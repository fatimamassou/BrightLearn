import { Link } from "react-router-dom";
export default function Button({type, text, to, py = 'py-2', px ='px-6'}) {
    return (
    <Link to={to}> 
      <button className={`${type === "primary" ? 'bg-primary text-secondary border border-primary hover:text-secondary transition-all duration-500' : ' text-primary border border-primary hover:text-secondary transition-all duration-500' } hover:bg-secondary-200 text-xl ${px} ${py} rounded-lg`}>
          {text}
        </button>
    </Link>
    );
  }
