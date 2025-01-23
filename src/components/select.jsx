import { subjects } from '../data' ;

function Select ({ onChange, selectedSubject }) {
  const classStyle = 'w-full border-2 h-12 border-primary-200 rounded-xl outline-0 py-2 px-4 text-primary-100 font-normal bg-transparent';
    
  return(
    <select 
      id="celectSubject" 
      name="celectSubject" 
      className={classStyle}
      onChange={onChange}
      value={selectedSubject}
    >
      {subjects.map(element=> (
        <option value={element} key={element}>
          {element}
        </option>))}
    </select>
  );
}

export default Select ;
