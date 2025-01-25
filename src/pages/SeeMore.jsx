import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useFakeData } from '@faissaloux/fake-data';
import { Link } from 'react-router-dom';

import InfoCard from '../components/InfoCard';
import Layout from '../layouts/Layout';
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
    phone : 'hone.number',       
    email :{
      identifier: 'internet.email',
      args:{ provider: '@gmail.com' } ,
    },
    description :'Hey there! I\'m Kim Namjoon, your Math guru with 10 years of experience.Let\'s make math '+
                'less about numbers and more about discovering how awesome problem-solving can be!',
        
  } , 1);
  return(
    <Layout>
      <div className="w-full">
        <Link to='/seeall' >
          <KeyboardDoubleArrowLeftIcon 
            fontSize='large'
            className='cursor-pointer transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-10 
                        duration-800 text-primary-100 absolute lg:top-40 lg:left-20 md:top-10 md:left-8'
          />
        </Link>
        <div className="w-full">
          <InfoCard card={cards}/>
        </div>
      </div>
    </Layout>
  );
}

export default SeeMore;
