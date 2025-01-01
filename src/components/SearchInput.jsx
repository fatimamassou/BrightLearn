import SearchIcon from '@mui/icons-material/Search';


export default function SearchInput({width ,height ,onChange}) {
    const onclick = ()=>{} ;
    const style = `${width} ${height} focus:outline-none focus:border-3 px-6 border-2 border-primary-100 rounded-lg text-primary bg-transparent text-xl placeholder:text-secondary-100`;

    return(
        <div className="w-full flex aitems-center justify-center">
            <input type="text" onChange={onChange} className={style} placeholder="Search" />
            <SearchIcon 
                className='relative top-2 right-11 cursor-pointer text-primary-100'
                onClick={onclick}
                fontSize="large" 
            />
        </div>
    );
}