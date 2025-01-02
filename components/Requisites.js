import Link from 'next/link';
import TopRightArrow from './icons/TopRightArrow';
import LargeContainer from './layout/large-container';
import PaddingContainer from './layout/padding-container';
import { buttonVariants } from './ui/button';
import Card from './icons/Card';
import Jar from './icons/Jar';
import CopyButton from './ui/copyButton';

const RequisitesSection = () => {
  return (
    <section className="py-11xl bg-neutral-neutralLight border-b border-neutral-neutralDark">
      <PaddingContainer>
        <LargeContainer>
          <h2>Долучайтеся до нас, щоб разом творити зміни!</h2>
          <div className="mt-8xl lg:mt-9xl flex flex-col content-stretch gap-y-2xl">
            <Link
              href="#"
              className={buttonVariants({
                variant: 'outline',
                size: 'default',
                className: 'md:items-end w-full',
              })}
            >
              <div className="flex items-center gap-x-xs lg:gap-x-xl">
                <Card />
                Переказ карткою
              </div>
              <TopRightArrow />
            </Link>

            <Link
              href="#"
              className={buttonVariants({
                variant: 'outline',
                size: 'default',
                className: 'md:items-end w-full',
              })}
            >
              <div className="flex items-center gap-x-xs lg:gap-x-xl">
                <Jar />
                Mono Банка
              </div>
              <TopRightArrow />
            </Link>

            <div className="py-3xl px-md lg:p-6xl border text-xs lg:text-lg">
              <div className="pb-2xl lg:pb-5xl font-bold text-xs lg:text-h5">
                Реквізити
              </div>
              <p className="pb-2xl">
                <span className="font-bold">Отримувач: </span>
                Благодійний фонд «Волонтерський Рух України»
              </p>
              <p className="pb-2xl">
                <span className="font-bold">Адреса отримувача: </span>
                65114, Одеська обл., місто Одеса, Люстдорфська дорога, будинок
                140-а
              </p>
              <p className="pb-2xl">
                <span className="font-bold">ЄДРПОУ: </span>
                45019226, неприбуткова організація
              </p>
              <p className="my-md font-bold">IBAN UAH:</p>
              <div className="space-y-md">
                <div className="flex items-center gap-x-3xl flex-wrap">
                  <div className="font-bold">АТ КБ «ПРИВАТБАНК»</div>
                  <div>UA633052990000026005014933699</div>
                  <CopyButton text="UA633052990000026005014933699" />
                </div>
                <div className="flex items-center gap-x-3xl flex-wrap">
                  <div className="font-bold">АТ «Універсал банк»</div>
                  <div>UA103220010000026004170000618</div>
                  <CopyButton text="UA103220010000026004170000618" />
                </div>
                <div className="flex items-center gap-x-3xl flex-wrap">
                  <div className="font-bold">АТ «ПУМБ»</div>
                  <div>UA873348510000000026000204673</div>
                  <CopyButton text="UA873348510000000026000204673" />
                </div>
              </div>
            </div>
          </div>
        </LargeContainer>
      </PaddingContainer>
    </section>
  );
};

export default RequisitesSection;
