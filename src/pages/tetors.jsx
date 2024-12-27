import { Link } from "react-router-dom";
import Card from "../components/card";
import Category from "../components/Category";
import { useFakeData } from "@faissaloux/fake-data";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { subjects } from '../data' ;
import { useState } from "react";

function Tetors({ showSeeAll=true }) {
    const subjectHave = subjects.filter((element)=>{return element !== 'All'}) ;  
    const cards = useFakeData({
        avatar : 'image.avatar' ,
        firsName : 'person.firstName' ,
        lastName : 'person.lastName' ,
        subject :{
            identifier: 'array.element',
            args: subjectHave ,
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
        
    } , 20);
    const [selectedSubject , setSelectedSubject] = useState('All') ;
    const filteredData =
    selectedSubject === "All" ? cards : cards.filter((item) => item.subject === selectedSubject);
    
    return(
    <div className="px-10 w-full min-h-screen bg-bg_secondary flex flex-col">
        {/* Category Dropdown */}
        <div className="mt-12 mb-12">
            <Category onChange={(e) => setSelectedSubject(e.target.value)} selectedSubject={selectedSubject} />
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredData.length > 0 ? (
                filteredData.slice(0, 12).map((card) => (
                    <Card key={card.id} card={card} /> // Each card
            ))
            ) : (
            <div className="col-span-full text-center w-full tracking-wide text-primary font-semibold text-2xl bg-secondary h-[50px] flex items-center justify-center rounded-xl">
                Not Found
            </div>
            )}
        </div>

        {/* "See All" Button */}
        {showSeeAll && (
            <div className="mt-12">
            <Link
                to="/see-all"
                className="text-primary-200 font-medium text-3xl space-x-2 border-b-4 border-primary-200 py-2 hover:text-primary-300"
            >
                <span>See All</span>
                <ArrowForwardIcon fontSize="large" />
            </Link>
            </div>
        )}
    </div>
    );
}

export default Tetors;