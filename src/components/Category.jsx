import { subjects } from '../data' ;

function Category () {
    
    return(
        <select id="subject" name="subject" className="px-3 w-50 h-12 bg-primary text-secondary rounded-lg outline-none">
            {subjects.map((element)=> (
            <option value={element} key={element}>
                {element}
            </option>))}
        </select>
    );
}

export default Category ;