import { Link } from 'react-scroll';

export default function NavBarLinks({ text, to }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="text-primary-100 text-xl tracking-[1px] transition-all duration-500 
                cursor-pointer hover:text-primary 
                after:content-[''] after:bg-primary after:h-[2px] after:w-[0%] after:block after:rounded-lg 
                hover:after:w-[100%] hover:after:duration-700 hover:after:transition-all hover:after:ease-in-out"
    >
      {text}
    </Link>
  );
}
