import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <Hero />
      </main>

    </>
  );
}
