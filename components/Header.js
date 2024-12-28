'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button } from '@/components/ui/button';
import TopRightArrow from '@/components/icons/TopRightArrow';
import { useState } from 'react';

const Header = ({ logo, navigation, contacts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="md:py-md md:px-5xl md:bg-neutral-white md:border-b md:border-neutral-neutralDarkest">
      <div className="w-full max-w-[81rem] mx-auto">
        <div className="py-md px-md flex items-center justify-between relative z-20 bg-neutral-white border-b border-neutral-neutralDarkest">
          {logo}

          <div className="lg:hidden" onClick={toggleOpen}>
            <DotLottieReact src="/menu-button.lottie" className="w-4xl h-4xl" />
          </div>
        </div>

        <div
          className="w-full bg-neutral-neutralLight absolute top-0 left-0 z-10 overflow-hidden"
          style={{ height: !isOpen ? '0svh' : '100svh' }}
        >
          <div className="pt-12xl pb-8xl px-md flex flex-col gap-y-5xl justify-between h-full overflow-auto">
            {navigation}

            <div className="flex flex-col gap-y-8xl">
              <Button onClick={toggleOpen}>
                Підтримати проєкт
                <TopRightArrow />
              </Button>

              <div>
                {/* Localization Toggle */}

                {contacts}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
