import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Master Coding Interviews</h1>
      <p className="text-xl md:text-2xl mb-8 text-muted-foreground">Prepare effectively with NeetCode's structured approach</p>
      <Button size="lg">Start Learning Now</Button>
    </section>
  );
};

export default Hero;
