import { Link } from "react-scroll";

export default function NavBarLinks({ text, to }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="text-primary text-xl hover:border-b-2 border-primary transition-all duration-200 cursor-pointer"
    >
      {text}
    </Link>
  );
}
