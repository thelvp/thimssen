export const NavbarCreds = () => {
  return (
    <p className="items-end text-xs text-gray-500 hover:text-gray-300">
      <a
        className={'group hover:font-semibold'}
        href="https://github.com/thelvp"
        target="_blank"
        rel="noopener noreferrer"
      >
        Designed with{' '}
        <span aria-hidden="true" className="group-hover:text-red-400">
          ♡
        </span>{' '}
        by thelvp
      </a>
    </p>
  );
};
