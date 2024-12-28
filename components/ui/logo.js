import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/Logo_01.svg';

const LogoComponent = () => {
  return (
    <Link href="/" aria-label="Повернутись на головну">
      <Image src={Logo} width={116} height={62} alt=""></Image>
    </Link>
  );
};

export default LogoComponent;
