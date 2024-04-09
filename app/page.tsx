import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Navbar />
      <div className="z-10 max-w-5xl w-full items-center text-sm lg:flex">
       <p className="text-xl mb-8">Mariah Laqua</p>
      </div>
      <div className="max-w-5xl w-full items-center text-lg lg:flex">
      <p>Fullstack engineer based in Amsterdam.</p>
      </div>
    </main>
  );
}
