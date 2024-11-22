export default function SearchInput({width ,height ,onChange}) {
    const style = `w-[${width}px] h-[${height}px] px-6 text-lg border-2 border-primary rounded-lg`;

    return(
        <div className="">
            <input type="text" onChange={onChange} className={style} placeholder="Search" />
        </div>
    );
}