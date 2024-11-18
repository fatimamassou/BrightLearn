import { Link } from "react-router-dom";
export default function Button({type,text,to}) {
    return (
    <Link to={to}> 
      <button className={`${type =="primary" ? 'bg-primary text-secondary hover:text-secondary transition-all duration-500' : 'bg-secondary text-primary border-2 border-primary hover:text-secondary transition-all duration-500' } hover:bg-secondary-100 text-xl px-6 py-2 rounded-lg`}>
          {text}
        </button>
    </Link>
    );
  }
