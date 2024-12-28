import Link from 'next/link';

const NavContacts = () => {
  return (
    <address className="not-italic text-xs font-medium lg:hidden">
      <Link
        href={`tel:+380675507775`}
        className="block text-neutral-neutralDarker no-underline"
      >
        +380 67 550 77 75{' '}
      </Link>
      <Link
        href={`mailto:fund@volunteering.in.ua`}
        className="block text-neutral-neutralDarker no-underline"
      >
        fund@volunteering.in.ua
      </Link>
    </address>
  );
};

export default NavContacts;
