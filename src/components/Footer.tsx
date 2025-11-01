export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 flex w-full justify-between p-6 text-gray-400">
      <ul className="mt-3 flex flex-wrap items-center text-sm font-medium sm:mt-0">
        <li>
          <a href="#" className="me-4 hover:underline md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="#" className="me-4 hover:underline md:me-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="https://flowbite.com/"
            className="mb-4 me-4 flex items-center space-x-3 hover:underline sm:mb-0 md:me-6 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-3"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap">Flowbite</span>
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
      <p className="text-xs">
        Designed with ♡ by{' '}
        <a className="hover:underline" href="https://github.com/thelvp">
          thelvp
        </a>
      </p>
    </footer>
  );
};
