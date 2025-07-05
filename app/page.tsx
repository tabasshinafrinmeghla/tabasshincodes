import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { GoHome } from "react-icons/go";


export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-16 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{
          name: 'Hone', link: '/', icon: <GoHome />
        }]} />
        <Hero />
        <Grid />
      </div>
    </main>

  );
}
