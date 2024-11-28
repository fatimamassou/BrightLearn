export default function SearchInput({width ,height ,onChange}) {
    const style = `${width} ${height} focus:outline-secondary-100 px-6 border-2 border-primary rounded-lg text-primary text-xl placeholder:text-secondary-100`;

    return(
        <div className="w-full flex aitems-center justify-center">
            <input type="text" onChange={onChange} className={style} placeholder="Search" />
        </div>
    );
}