// "use client";

import Hero from "@/components/home/Hero";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";

function HomePage() {
  // const handleClick = () => {
  //   toast.success("Development in Progress!");
  // };

  return (
    <div>
      {/* <h1 className='text-3xl text-muted-foreground'>Home Page</h1>
      <Button
        variant='default'
        size='lg'
        className='m-8 capitalize'
        onClick={handleClick}
      >
        click me
      </Button> */}

      <Hero />
    </div>
  );
}

export default HomePage;
