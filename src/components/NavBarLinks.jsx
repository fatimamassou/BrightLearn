import { Link } from "react-router-dom";

export default function NavBarLinks ({text,to}){
    return(
        <Link to={to} className="text-primary text-xl hover:border-b-2 border-primary transition-all duration-200">
            {text}
        </Link>
    );
};