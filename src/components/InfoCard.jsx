import Button from "./buttons";

function InfoCard({card}) {

    return(
        <div className="px-6 py-6">
            <div className="w-full bg-grey rounded-2xl p-4 flex space-x-8">
                <div>
                    <img src={card.avatar} alt="avatar" className="w-[300px] h-[400px] rounded-2xl"/>
                </div>
                <div className="flex items-center">
                    <div className="block space-y-12 text-primary">
                        <table>
                            <tr className="h-12">
                                <td className="w-32 text-xl font-bold">Full Name</td>
                                <td className="w-10 text-xl font-bold">:</td>
                                <td className="h-10">{card.firsName} {card.lastName}</td>
                            </tr>
                            <tr className="h-12">
                                <td className="text-xl font-bold">Specialty</td>
                                <td className="text-xl font-bold">:</td>
                                <td>{card.subject}</td>
                            </tr>
                            <tr className="h-12">
                                <td className="text-xl font-bold">Phone</td>
                                <td className="text-xl font-bold">:</td>
                                <td>{card.phone}</td>
                            </tr>
                            <tr className="h-12">
                                <td className="text-xl font-bold">Email</td>
                                <td className="text-xl font-bold">:</td>
                                <td>{card.email}</td>
                            </tr>
                            <tr className="h-12">
                                <td className="text-xl font-bold">Description</td>
                                <td className="text-xl font-bold">:</td>
                                <td className="w-[400px]">{card.description}</td>
                            </tr>
                        </table>
                        <div>
                           <Button text="Book It Now" to="/buy" type="primary" px="px-6" py="py-2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;