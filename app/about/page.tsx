import Navbar from "../components/Navbar";
import '../globals.css';
const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 font-mono">
      <Navbar />
      <div>
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
    </main>
  );
};

export default About;