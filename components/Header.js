'use client';

import { Button } from '@/components/ui/button';
import TopRightArrow from '@/components/icons/TopRightArrow';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ logo, navigation, contacts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    initial: {
      opacity: 0,
      y: '-100%',
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  };

  return (
    <header className="md:py-md md:px-5xl md:bg-neutral-white md:border-b md:border-neutral-neutralDarkest">
      <div className="w-full max-w-[81rem] mx-auto">
        <div className="py-md px-md flex items-center justify-between relative z-20 bg-neutral-white border-b border-neutral-neutralDarkest">
          {logo}

          <div className="lg:hidden" onClick={toggleOpen}></div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="w-full bg-neutral-neutralLight fixed top-0 left-0 z-10 h-screen"
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="pt-12xl pb-8xl px-md flex flex-col gap-y-5xl justify-between h-full overflow-auto">
                {navigation}

                <div className="flex flex-col gap-y-8xl">
                  <Button onClick={toggleOpen}>
                    Підтримати проєкт
                    <TopRightArrow />
                  </Button>

                  <div>{contacts}</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
