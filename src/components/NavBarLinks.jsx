import { Link } from "react-router-dom";

export default function NavBarLinks ({text,to}){
    return(
        <Link to={to} className="text-primary text-l m-6">
            {text}
        </Link>
    );
};