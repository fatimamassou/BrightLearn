import { Link } from "react-router-dom";
import Card from "../components/card";
import Category from "../components/Category";
import { useFakeData } from "@faissaloux/fake-data";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Tetors() {
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
        
    } , 4);
    return(
        <div className="px-12 w-screen h-screen bg-bg_secondary flex items-center">
            <div className="space-y-24">
                <div className="">
                    <Category />
                </div>
                <div className="flex ">
                    {cardInfo.map((card) => {return <Card card={card} />})}
                </div>
                <div className="text-center">
                    <Link to="See All page" className="text-primary font-medium text-3xl space-x-2"> 
                        <span>
                            See All
                        </span>
                        <span>
                            <ArrowForwardIcon />    
                        </span> 
                     </Link> 
                </div>
            </div>
        </div>
    );
}

export default Tetors;