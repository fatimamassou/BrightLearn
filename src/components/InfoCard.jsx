import Button from "./buttons";

function InfoCard({card}) {
    const cardInfo = card ;
    console.log(cardInfo)
    return(
        <div className="px-6 py-6">
            <div className="w-full bg-grey rounded-2xl p-4 flex space-x-4">
                <div>
                    <img src={cardInfo.avatar} alt="avatar" className="w-[300px] h-[400px] rounded-2xl"/>
                </div>
                <div className="flex items-center">
                    <div className="block space-y-4">
                        <table>
                            <tr className="h-10 ">
                                <td className="w-28">Full Name</td>
                                <td className="w-10">:</td>
                                <td className="h-10 ">Kim Nam jon</td>
                            </tr>
                            <tr className="h-10 ">
                                <td className="w-28">Specialty</td>
                                <td className="w-10">:</td>
                                <td className="h-10 ">Mathematics</td>
                            </tr>
                            <tr className="h-10 ">
                                <td className="w-28">Phone</td>
                                <td className="w-10">:</td>
                                <td className="h-10 ">+33 456 890 567 456</td>
                            </tr>
                            <tr className="h-10 ">
                                <td className="w-28">Email</td>
                                <td className="w-10">:</td>
                                <td className="h-10 ">kimnamjon@gmail.com</td>
                            </tr>
                            <tr className="h-10 ">
                                <td className="w-28">Description</td>
                                <td className="w-10">:</td>
                                <td className="h-10 w-[400px]">Hey there! I'm Kim Namjoon, your Math guru with 10 years of experience.Let's make math less about numbers and more about discovering how awesome problem-solving can be!</td>
                            </tr>
                        </table>
                        <div>
                           <Button text="Book It Now" to="/seemore" type="primary" px="px-6" py="py-2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;