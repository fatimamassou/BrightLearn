import { Link } from 'react-router-dom';
export default function Button({ type, text, to, py = 'py-2', px ='px-6' }) {
  return (
    <Link to={to}> 
      <button 
        className={`${type === 'primary' ?
          'bg-primary text-secondary border border-primary hover:text-secondary ' 
          :' text-primary border border-primary' 
        } hover:shadow-300 text-xl ${px} ${py} rounded-lg transition-all duration-700`}
      >
        {text}
      </button>
    </Link>
  );
}
