import Link from 'next/link';
import LargeContainer from './layout/large-container';
import PaddingContainer from './layout/padding-container';
import { buttonVariants } from './ui/button';

const AboutSection = () => {
  return (
    <section className="py-9xl lg:py-11xl border-y lg:border-t-0 border-neutral-neutralDark bg-neutral-neutralLight">
      <PaddingContainer>
        <LargeContainer>
          <div className="md:grid md:grid-cols-2 md:gap-2xl">
            <h2 className="max-w-15xl text-h3">
              Ми, Благодійний фонд «Волонтерський рух України»
            </h2>
            <div className="mt-md md:mt-0">
              <p>
                Організація, яка об&apos;єднує небайдужих людей задля допомоги
                тим, хто найбільше цього потребує. Ми зосереджуємо наші зусилля
                на підтримці військових, дітей та сімей військовослужбовців, а
                також на допомозі дитячим будинкам.
              </p>
              <Link
                href="/about"
                className={buttonVariants({
                  variant: 'outline',
                  size: 'small',
                  className: 'mt-5xl md:mt-5xl',
                })}
              >
                Більше про нас
              </Link>
            </div>
          </div>
        </LargeContainer>
      </PaddingContainer>
    </section>
  );
};

export default AboutSection;
