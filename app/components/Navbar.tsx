import Link from 'next/link';
import '../globals.css';

const Navbar = () => {
  return (
    <nav className='mb-16'>
      <ul className="flex flex-row justify-end">
        <li className='pr-8'>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className='pr-8'>
          <Link href="/blog">
            Blog
          </Link>
        </li>
        <li className='pr-8'>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;