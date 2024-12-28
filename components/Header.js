'use client';

import { Button } from '@/components/ui/button';
import TopRightArrow from '@/components/icons/TopRightArrow';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';

const Header = ({ logo, navigation, contacts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkWidth();

    window.addEventListener('resize', checkWidth);

    return () => window.removeEventListener('resize', checkWidth);
  }, []);

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
    <header className="lg:py-md lg:px-5xl lg:bg-neutral-white lg:border-b lg:border-neutral-neutralDarkest">
      <div className="w-full max-w-[81rem] mx-auto lg:flex lg:items-center">
        <div className="py-md lg:py-0 px-md lg:px-0 flex lg:block items-center justify-between relative z-20 bg-neutral-white border-b lg:border-b-0 border-neutral-neutralDarkest">
          {logo}

          <div className="lg:hidden" onClick={toggleOpen}>
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={32}
              label={!isOpen ? 'Show menu' : 'Hide menu'}
            />
          </div>
        </div>

        <AnimatePresence>
          {(isOpen || isDesktop) && (
            <motion.div
              className="w-full bg-neutral-neutralLight lg:bg-neutral-transparent fixed lg:static top-0 left-0 z-10 h-screen lg:h-auto"
              variants={!isDesktop ? menuVariants : {}}
              initial={!isDesktop ? 'initial' : false}
              animate={!isDesktop ? 'animate' : false}
              exit={!isDesktop ? 'exit' : false}
            >
              <div className="pt-12xl lg:pt-0 pb-8xl lg:pb-0 px-md lg:px-0 flex flex-col lg:flex-row lg:items-center justify-between gap-y-5xl lg:gap-y-0 h-full lg:h-auto">
                {navigation}

                <div className="flex flex-col lg:flex-row gap-y-8xl lg:gap-x-4xl lg:items-center">
                  <Button
                    onClick={toggleOpen}
                    variant={!isDesktop ? 'default' : 'small'}
                  >
                    Підтримати проєкт
                    {!isDesktop ? <TopRightArrow /> : ''}
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
