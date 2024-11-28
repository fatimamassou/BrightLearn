export default function SearchInput({width ,height ,onChange}) {
    const style = `w-[600px] h-12 focus:outline-secondary-100 px-6 border-2 border-primary rounded-lg text-primary text-xl`;

    return(
        <div className="">
            <input type="text" onChange={onChange} className={style} placeholder="Search" />
        </div>
    );
}