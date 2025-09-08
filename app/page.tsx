// "use client";

import { Button } from "@/components/ui/button";
// import { toast } from "sonner";

function HomePage() {
  // const handleClick = () => {
  //   toast.success("Button clicked!");
  // };

  return (
    <div className='text-3xl'>
      HomePage
      <Button variant='default' size='lg' className='m-8 capitalize'>
        click me
      </Button>
    </div>
  );
}

export default HomePage;
