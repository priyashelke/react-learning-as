import {useState} from 'react';
import ItemList from "./ItemList";

const RestroCategory = ({data, showIndex, setShowIndexMenu}) => {
    
  // const [showCardData, setShowCardData] = useState(false);
    const handleClick = () => {
      setShowIndexMenu();
    };
    return (
        <div className="w-8/12 bg-grey-50 shadow-lg m-auto p-5 my-4">
          <div className="flex justify-between cursor-pointer" 
          onClick={handleClick}
          >
            <span className="font-bold">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
          </div>
          <div>
            {showIndex && <ItemList item = {data.itemCards} />}
          </div>
        </div>
    );
};

export default RestroCategory;