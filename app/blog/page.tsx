import Navbar from "../components/Navbar";
import '../globals.css';
const Blog = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 font-mono">
      <Navbar />
      <div>
      <h1>Blog</h1>
      <p>This is the blog page</p>
    </div>
    </main>
  );
};

export default Blog;