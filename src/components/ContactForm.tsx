import { useState } from 'react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>(
    'idle'
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });
      if (!res.ok) throw new Error('Network error');
      setStatus('ok');
      setName(name);
      setMessage(message);
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col gap-4 text-start"
    >
      <label className="flex flex-col">
        <span className="text-sm font-medium">Naam</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          required
          className="mt-1 rounded border px-3 py-2"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-sm font-medium">Je bericht</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          rows={6}
          required
          className="mt-1 rounded border px-3 py-2"
        />
      </label>

      <button
        type="submit"
        className="t mt-2 inline-block rounded bg-blue-600 px-4 py-2"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Aan het versturen...' : 'Versturen'}
      </button>

      {status === 'ok' && (
        <p className="text-sm text-green-700">Bericht verstuurd.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-500">
          Niet gelukt, probeer later nog eeens.
        </p>
      )}
    </form>
  );
};
