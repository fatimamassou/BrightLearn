import { Link } from 'react-scroll';

export default function NavBarLinks({ text, to }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="text-primary-100 text-xl tracking-[1px] transition-all duration-200 
                cursor-pointer hover:text-primary 
                after:content-[''] after:bg-primary after:h-[2px] after:w-full after:block after:rounded-lg"
    >
      {text}
    </Link>
  );
}
