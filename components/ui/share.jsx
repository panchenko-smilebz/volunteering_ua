'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import { Button } from './button';
import TopRightArrow from '../icons/TopRightArrow';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share';

const ShareDialog = () => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Access the current URL using the window object
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="default"
          className="md:items-end w-full md:h-12xl bg-neutral-white"
        >
          Поділитись сайтом
          <TopRightArrow />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Поділись сайтом та поширюй збір коштів на авто для ЗСУ!
          </DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="flex gap-xs flex-wrap mt-2xl">
            <FacebookShareButton url={currentUrl}>
              <FacebookIcon size={42} round />
            </FacebookShareButton>
            <TwitterShareButton url={currentUrl}>
              <TwitterIcon size={42} round />
            </TwitterShareButton>
            <TelegramShareButton url={currentUrl}>
              <TelegramIcon size={42} round />
            </TelegramShareButton>
            <WhatsappShareButton url={currentUrl} separator=":: ">
              <WhatsappIcon size={42} round />
            </WhatsappShareButton>
            <LinkedinShareButton url={currentUrl}>
              <LinkedinIcon size={42} round />
            </LinkedinShareButton>
            <EmailShareButton
              url={currentUrl}
              subject={'БФ «Волонтерський рух України»'}
            >
              <EmailIcon size={42} round />
            </EmailShareButton>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
