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
    
        phone : "hone.number",       
        email :{
            identifier: 'internet.email',
            args:{provider: "@gmail.com"} ,
        },
        description : "Hey there! I'm Kim Namjoon, your Math guru with 10 years of experience.Let's make math less about numbers and more about discovering how awesome problem-solving can be!"
        
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