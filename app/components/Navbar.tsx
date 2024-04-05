import Link from 'next/link';
import '../globals.css';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-items-end py-8 font-mono">
        <li className='px-8'>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className='pr-8'>
          <Link href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;