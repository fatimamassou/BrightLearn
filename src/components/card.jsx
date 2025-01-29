import Button from './buttons';

function Card({ card }) {
  const cardInfo = card ;
  return(
    <div className="px-6 py-6 h-80">
      <div className="w-80 bg-grey rounded-2xl px-2 py-2 flex space-x-4 shadow cursor-pointer">
        <div className="">
          <img src={cardInfo.avatar} alt="avatar" className="w-28 h-60 rounded-2xl"/>
        </div>
        <div className="flex items-center">
          <div className="block space-y-4">
            <div className="space-y-4">
              <p className="text-xl font-bold text-primary">{cardInfo.lastName} {cardInfo.firsName}</p>
              <p className="text-xl text-primary font-medium">{cardInfo.subject}</p>
              <p className="flex text-primary">{cardInfo.hour} : {cardInfo.minute} PM {cardInfo.date}</p>
              <p 
                className="text-xl font-bold text-primary"
              >
                {cardInfo.Price}
                 $ 
                <span 
                  className="text-sm font-normal"
                >
                  /1h
                </span>
              </p>
            </div>
            <div>
              <Button text="See more" to="/seemore" type="primary" px="px-4" py="py-0.5"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
