import TopRightArrow from './icons/TopRightArrow';
import LargeContainer from './layout/large-container';
import PaddingContainer from './layout/padding-container';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:justify-center pb-9xl lg:pb-0 relative lg:h-[calc(100svh-87px)] lg:text-neutral-white">
      <PaddingContainer>
        <LargeContainer>
          <h1 className="mt-5xl lg:mt-0 md:max-w-14xl lg:max-w-16xl">
            Допомагаємо тим, хто цього найбільше потребує
          </h1>
          <p className="mt-md lg:mt-5xl md:max-w-13xl">
            Об&apos;єднуємо небайдужих людей для підтримки військових, їхніх
            сімей та дітей у дитячих будинках
          </p>
          <Button className="mt-7xl w-full md:max-w-14xl lg:mt-9xl">
            Підтримати проєкт
            <TopRightArrow />
          </Button>
        </LargeContainer>
      </PaddingContainer>
      <video
        width="1920"
        height="auto"
        autoPlay
        loop
        muted
        poster="/cfb06dec04cdc377a45ab91b9f912217.png"
        className="w-full lg:h-full object-cover lg:absolute z-[-2]"
      >
        <source
          src="/1473989_People_Family_1920x1080 (2).mp4"
          type="video/mp4"
        />
        <source
          src="/1473989_People_Family_1920x1080 (1).webm"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="hero_shadow w-full h-full hidden lg:block absolute z-[-1]"></div>
    </section>
  );
};

export default HeroSection;
