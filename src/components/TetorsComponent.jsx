import { useFakeData } from '@faissaloux/fake-data';
import { useState } from 'react';

import { subjects } from '../data' ;

import Card from './card';
import Category from './Category';


function TetorsComponent() {
  const subjectHave = subjects.filter(element=>{return element !== 'All';}) ;  
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
      args: { min: 1, max: 12, multipleOf: 1 },
    }  ,
    minute :{
      identifier: 'number.int',
      args: { min: 0, max: 59, multipleOf: 1 },
    }  , 
    date :{
      identifier: 'date.past',
      args: { separator: '/' },
    }  , 
    Price :{
      identifier: 'number.int',
      args: { min: 2, max: 20, multipleOf: 1 },
    }  ,       
        
  } , 40);
  const [selectedSubject , setSelectedSubject] = useState('All') ;
  const filteredData =
    selectedSubject === 'All' ? cards : cards.filter(item => item.subject === selectedSubject);
    
  return(
    <div className="space-y-24 w-full">
      <div>
        <Category onChange={e => setSelectedSubject(e.target.value)} selectedSubject={selectedSubject}/>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(380px,_2fr))] gap-2">
        {filteredData.length < 0 ?
          filteredData.map(card => {
            return <Card card={card} />;
          }) :
            <div className="flex items-center justify-center">
              <div 
                className={'w-2/5 tracking-wide text-primary font-semibold rounded-xl '+
                  'text-2xl bg-secondary h-[50px] flex items-center justify-center'}
                  >
                Not Found
              </div>
            </div>
        }
      </div>
    </div>
  );
}

export default TetorsComponent;
