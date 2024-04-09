import Navbar from "../components/Navbar";
import '../globals.css';
const Blog = () => {
  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <Navbar />
      <div className="max-w-5xl w-full text-sm">
      <h1 className="text-2xl mb-8">Blog</h1>
      <p className="text-lg w-2/3">Learning in public via my blog.</p>
    </div>
    </main>
  );
};

export default Blog;