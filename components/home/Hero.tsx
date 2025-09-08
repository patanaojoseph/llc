import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='mx-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta id
          perferendis voluptatum?
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatibus!
        </p>
        <Button asChild size='lg' className='mt-8 bg-teal-700 text-gray-100'>
          <Link href='/services'>Learn More</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}

export default Hero;
