import Link from 'next/link';
import LargeContainer from './layout/large-container';
import PaddingContainer from './layout/padding-container';
import { buttonVariants } from './ui/button';
import Image from 'next/image';

const AreasSection = () => {
  return (
    <section className="py-9xl lg:py-11xl border-b border-neutral-neutralDark">
      <PaddingContainer>
        <LargeContainer>
          <div className="md:flex  md:gap-md justify-between items-center">
            <h2>Наші основні напрямки діяльності:</h2>
            <Link
              href="/programs"
              className={buttonVariants({
                variant: 'outline',
                size: 'small',
                className: 'mt-5xl md:mt-0',
              })}
            >
              Більше про напрямки
            </Link>
          </div>

          <div className="mt-8xl lg:mt-9xl grid grid-cols-1 md:grid-cols-2 gap-x-2xl gap-y-8xl">
            <div>
              <figure>
                <Image
                  src="/programs/photo.jpg"
                  width={636}
                  height={424}
                  alt=""
                  className="w-full aspect-3/2 object-cover"
                />
              </figure>
              <div className="mt-4xl max-w-16xl">
                <h3 className="text-h5">Реабілітація військових</h3>
                <p className="mt-xs">
                  Ми забезпечуємо комплексний підхід до відновлення фізичного та
                  психологічного здоров’я наших героїв, включаючи фізіотерапію,
                  психологічні консультації, арт-терапії, йогу та інші
                  відновлювальні практики.
                </p>
              </div>
            </div>
            <div>
              <figure>
                <Image
                  src="/programs/photo-1.jpg"
                  width={636}
                  height={424}
                  alt=""
                  className="w-full aspect-3/2 object-cover"
                />
              </figure>
              <div className="mt-4xl max-w-16xl">
                <h3 className="text-h5">Психологічна допомога</h3>
                <p className="mt-xs">
                  Ми надаємо професійну психологічну підтримку військовим та
                  їхнім сім&apos;ям, допомагаючи подолати стрес,
                  посттравматичний синдром та адаптуватися до мирного життя.
                </p>
              </div>
            </div>
            <div>
              <figure>
                <Image
                  src="/programs/photo-2.jpg"
                  width={636}
                  height={424}
                  alt=""
                  className="w-full aspect-3/2 object-cover"
                />
              </figure>
              <div className="mt-4xl max-w-16xl">
                <h3 className="text-h5">Юридична підтримка</h3>
                <p className="mt-xs">
                  Наші фахівці надають консультації з правових питань,
                  допомагаючи вирішити юридичні проблеми, з якими стикаються
                  військовослужбовці та ВПО.
                </p>
              </div>
            </div>
          </div>
        </LargeContainer>
      </PaddingContainer>
    </section>
  );
};

export default AreasSection;
