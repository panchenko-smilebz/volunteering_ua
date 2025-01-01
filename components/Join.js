import Link from 'next/link';
import TopRightArrow from './icons/TopRightArrow';
import LargeContainer from './layout/large-container';
import PaddingContainer from './layout/padding-container';
import { Button, buttonVariants } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

const JoinSection = () => {
  return (
    <section className="py-11xl bg-neutral-neutralLight border-b border-neutral-neutralDark">
      <PaddingContainer>
        <LargeContainer>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_0.8fr] gap-y-md gap-x-11xl">
            <h2>Як ти можеш долучитись?</h2>
            <p className="max-w-15xl">
              Ми віримо, що кожна людина заслуговує на підтримку, і разом ми
              можемо зробити цей світ кращим. Долучайтеся до нашого фонду і
              станьте частиною великої справи!
            </p>
          </div>
          <div className="mt-9xl space-y-8xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-y-2xl gap-x-11xl">
              <div className="lg:flex gap-x-8xl">
                <span className="text-xl md:text-2xl font-bold">01</span>
                <p>
                  Ти можеш підтримати нашу ініціативу своїм донатом. Давай
                  наближувати перемогу разом!
                </p>
              </div>
              <Link
                href="#"
                className={buttonVariants({
                  variant: 'outline',
                  size: 'default',
                  className: 'md:items-end w-full md:h-12xl bg-neutral-white',
                })}
              >
                Зробити внесок
                <TopRightArrow />
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-y-2xl gap-x-11xl">
              <div className="lg:flex gap-x-8xl">
                <span className="text-xl md:text-2xl font-bold">02</span>
                <p>
                  Для нас буде великою цінністю, якщо ти будеш ділитися із
                  друзями та знайомими нашою ініціативою. Це буде твоїм дуже
                  вагомим внеском у досягнення нашої спільної мети!
                </p>
              </div>
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
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-y-2xl gap-x-11xl">
              <div className="lg:flex gap-x-8xl">
                <span className="text-xl md:text-2xl font-bold">03</span>
                <p>
                  Ви можете подати запит на одну з наших програм. Для цього
                  оберіть напрям та заповніть форму зворотнього зв’язку.
                </p>
              </div>
              <Link
                href="/programs"
                className={buttonVariants({
                  variant: 'outline',
                  size: 'default',
                  className: 'md:items-end w-full md:h-12xl bg-neutral-white',
                })}
              >
                Обрати програму
                <TopRightArrow />
              </Link>
            </div>
          </div>
        </LargeContainer>
      </PaddingContainer>
    </section>
  );
};

export default JoinSection;
