import TopRightArrow from '@/components/icons/TopRightArrow';
import LargeContainer from '@/components/layout/large-container';
import PaddingContainer from '@/components/layout/padding-container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <section>
        <PaddingContainer>
          <LargeContainer>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              nemo ea eius quisquam sint voluptas dicta beatae sunt laboriosam
              perspiciatis ipsa ullam quaerat, suscipit libero error saepe quas
              illum incidunt!
            </p>
            <Link href="#">Text Link</Link>
            <Button>Більше про нас</Button>
            <Button>
              Підтримати проєкт
              <TopRightArrow />
            </Button>
            <Button variant="outline">Більше про нас</Button>
          </LargeContainer>
        </PaddingContainer>
      </section>
    </main>
  );
}
