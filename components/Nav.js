import Link from 'next/link';

const MainNavigation = () => {
  return (
    <nav className="flex flex-col space-y-5xl">
      <Link
        href="#"
        className="text-xl font-medium text-neutral-neutralDark no-underline"
      >
        Про фонд
      </Link>
      <Link
        href="#"
        className="text-xl font-medium text-neutral-neutralDark no-underline"
      >
        Програми
      </Link>
      <Link
        href="#"
        className="text-xl font-medium text-neutral-neutralDark no-underline"
      >
        Контакти
      </Link>
      <Link
        href="#"
        className="text-xl font-medium text-neutral-neutralDark no-underline"
      >
        Новини
      </Link>
    </nav>
  );
};

export default MainNavigation;
