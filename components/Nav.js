import Link from 'next/link';

const MainNavigation = () => {
  return (
    <nav className="flex flex-col lg:flex-row space-y-5xl lg:space-y-0 lg:space-x-6xl lg:grow lg:justify-center">
      <Link
        href="#"
        className="text-xl lg:text-sm font-medium lg:font-regular text-neutral-neutralDark no-underline"
      >
        Про фонд
      </Link>
      <Link
        href="#"
        className="text-xl lg:text-sm font-medium lg:font-regular text-neutral-neutralDark no-underline"
      >
        Програми
      </Link>
      <Link
        href="#"
        className="text-xl lg:text-sm font-medium lg:font-regular text-neutral-neutralDark no-underline"
      >
        Контакти
      </Link>
      <Link
        href="#"
        className="text-xl lg:text-sm font-medium lg:font-regular text-neutral-neutralDark no-underline"
      >
        Новини
      </Link>
    </nav>
  );
};

export default MainNavigation;
