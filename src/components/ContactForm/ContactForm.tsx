import { useState } from 'react';

export const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>(
    'idle'
  );
  const [errorMessage, setErrorMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  function isValidEmail(email: string) {
    var re =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  function isBot(honeypot: string) {
    if (honeypot) {
      //if hidden form filled up
      return true;
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      if (!isValidEmail(email)) {
        setStatus('error');
        setErrorMessage('Het ingevulde emailadres is niet valide.');
        return false;
      }

      if (isBot(honeypot)) {
        return false;
      }

      var formData = {
        email: email,
        message: message,
      };

      var encodedFormData = Object.entries(formData)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join('&');

      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbxknL7wBwARa4m5PZ19lwxSNnhouhXHeunWUup1lGR26r_oibidR1B3lseHdOvmyABJ/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encodedFormData,
        }
      );
      if (!res.ok) throw new Error('Network error');
      setStatus('ok');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMessage('Niet gelukt, probeer later nog eens.');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="gform mt-6 flex flex-col gap-4 text-start text-sm sm:text-base"
    >
      <label className="flex flex-col">
        <span>Email</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="text"
          required
          className="mt-1 rounded border px-3 py-2"
        />
      </label>

      <label className="flex flex-col">
        <span>Je bericht</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          rows={6}
          required
          className="mt-1 rounded border px-3 py-2"
        />
      </label>

      <label className="flex hidden flex-col">
        <span>Naam</span>
        <textarea
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          name="name"
          className="mt-1 rounded border px-3 py-2"
        />
      </label>

      <button
        type="submit"
        className="interactive focus-ring mt-2 inline-block rounded bg-blue-600 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:bg-blue-800 hover:shadow-xl"
        disabled={status === 'sending'}
        aria-busy={status === 'sending'}
      >
        {status === 'sending' ? 'Aan het versturen...' : 'Versturen'}
      </button>

      {status === 'ok' && (
        <p className="text-sm text-green-700">Bericht verstuurd.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-500">{errorMessage}</p>
      )}
    </form>
  );
};
