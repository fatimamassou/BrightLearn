import { Link } from "react-router-dom";
import Card from "../components/card";
import Category from "../components/Category";
import { useFakeData } from "@faissaloux/fake-data";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { subjects } from '../data' ;
import { useState } from "react";

function Tetors() {
    const cards = useFakeData({
        avatar : 'image.avatar' ,
        firsName : 'person.firstName' ,
        lastName : 'person.lastName' ,
        subject :{
            identifier: 'array.element',
            args: subjects ,
        },
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
            args: {min: 2, max: 20, multipleOf: 1}
        }  ,       
        
    } , 4);
    const [selectedSubject , setSelectedSubject] = useState('All') ;
    const filteredData =
    selectedSubject === "All"
      ? cards
      : cards.filter((item) => item.subject === selectedSubject);
    

    return(
        <div className="px-10 w-screen h-screen bg-bg_secondary flex items-center">
            <div className="space-y-24 w-full">
                <div className="">
                    <Category />
                </div>
                <div className="flex justify-center items-center">
                    {cards.map((card) => {return <Card card={card} />})}
                </div>
                <div className="text-center">
                    <Link to="See All page" className="text-primary-200 font-medium text-3xl space-x-2 border-b-4 border-primary-200 py-2"> 
                        <span>
                            See All
                        </span>
                        <span>
                            <ArrowForwardIcon fontSize='large' />    
                        </span> 
                     </Link> 
                </div>
            </div>
        </div>
    );
}

export default Tetors;