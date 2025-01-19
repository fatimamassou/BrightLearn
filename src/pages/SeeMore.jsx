import { useFakeData } from "@faissaloux/fake-data";
import InfoCard from "../components/InfoCard";
import Layout from "../layouts/Layout";
import { subjects } from '../data' ;

function SeeMore() {
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
        
    } , 1);
    return(
        <Layout>
            <div className="w-2/3">
                <InfoCard card={cards}/>
            </div>
        </Layout>
    );
}

export default SeeMore;