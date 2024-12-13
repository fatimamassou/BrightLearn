import { useFakeData } from "@faissaloux/fake-data";
import Button from "./buttons";

function Card() {
    const cardInfo = useFakeData({
        avatar : 'image.avatar' ,
        firsName : 'person.firstName' ,
        lastName : 'person.lastName' ,
        subject : 'person.jobArea' ,
        hour :{
            identifier: 'number.int',
            args: {min: 1, max: 12, multipleOf: 1}
        }  ,
        minute :{
            identifier: 'number.int',
            args: {min: 0, max: 59, multipleOf: 1}
        }  , 
        date :{
            identifier: 'date.past',
            args: {separator: '/'}
        }  , 
        Price :{
            identifier: 'number.int',
            args: {min: 5, max: 20, multipleOf: 1}
        }  ,       
        
    } , 1);

    return(
        <div className="px-6 py-6 h-80">
            <div className="w-80 bg-grey rounded-lg px-2 py-2 flex space-x-4">
                <div className="">
                    <img src={cardInfo.avatar} alt="avatar" className="w-28 h-60 rounded-lg"/>
                </div>
                <div className="flex items-center">
                    <div className="block space-y-4">
                        <div className="space-y-2">
                            <p className="text-xl font-bold text-primary">{cardInfo.lastName} {cardInfo.firsName}</p>
                            <p className="text-xl text-primary font-medium">{cardInfo.subject}</p>
                            <p className="flex text-primary">{cardInfo.hour} : {cardInfo.minute} PM {cardInfo.date}</p>
                            <p className="text-xl font-bold text-primary">{cardInfo.Price} $ <span className="text-sm font-normal">/1h</span></p>
                        </div>
                        <div className="">
                            <Button text="See more" to="See more page" type="primary" px="px-4" py="py-0.5"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;