
function Input({ type, Placeholder, value, onChange }) {
  const classStyle = 'w-full border-2 border-primary-200 rounded-xl outline-0 py-2 px-4 '+
                      'text-primary-100 font-normal bg-transparent';
  return(            
    type === 'tel' ?  <input
      type="tel"
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
      placeholder="123-456-7890" 
      className={classStyle}
      onChange={onChange}
      value={value}
      required
    />
      : type === 'textarea' ? 
        <textarea 
          id="textarea" 
          name="textarea" 
          cols="50" 
          rows="4" 
          placeholder={Placeholder} 
          wrap="soft" 
          className={classStyle}
          onChange={onChange}
          value={value} 
          required 
        />
        :<input 
          type={type}
          className={classStyle}
          placeholder={Placeholder}
          onChange={onChange}
          value={value}
          required
        />
  );
}

export default Input ;
