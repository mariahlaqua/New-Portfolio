import Navbar from "../components/Navbar";
import '../globals.css';
const About = () => {
  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <Navbar />
      <div className="max-w-5xl w-full text-sm">
      <h1 className="text-2xl mb-8">About</h1>
      <p className="text-lg w-2/3">I&apos;m Mariah, a fullstack engineer based in Amsterdam. I work with Node.js, Cloud, TypeScript, databases and more to drive measurable outcomes in my projects.</p>
    </div>
    </main>
  );
};

export default About;