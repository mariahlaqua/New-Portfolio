import Link from "next/link";
import "../globals.css";
import FeatherIcon from "feather-icons-react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-24 ">
      <div className="flex flex-row items-center">
        <Link href="/" className="flex flex-row mr-4"><FeatherIcon icon="home" className="mr-2"></FeatherIcon>Home</Link>
        <Link href="/blog" className="flex flex-row mr-4"><FeatherIcon icon="book" className="mr-2"></FeatherIcon>Blog</Link>
        <Link href="https://github.com/mariahlaqua" className="flex flex-row mr-4"><FeatherIcon icon="github" className="mr-2"></FeatherIcon>GitHub</Link>
        <Link href="https://www.linkedin.com/in/mariahlaqua/" className="flex flex-row mr-4"><FeatherIcon icon="linkedin" className="mr-2"></FeatherIcon>LinkedIn</Link>
        </div>
        </footer>
  );
}

export default Footer;