import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { addItem } from '../utils/cartSlice';
import Shimmer from './Shimmer';

const ItemList = ({item}) => {
 
   const dispatch = useDispatch();
   const handleAddItem = (item) => {
      dispatch(addItem(item));
   }
   return (
   <div>
         {item.map((item) => (
        <div key={item.card.info.id} className='m-2 p-2 border-gray-200 border-b-2 flex'>
         <div className='text-left w-9/12'>
         <div className='p-2'>
            <span>{item.card.info.name}</span>
            <span> - ₹  {item.card.info.price ? item.card.info.price/ 100 : item.card.info.defaultPrice/ 100}</span>
         </div>
         <p className='text-sm'>{item.card.info.description}</p>
         </div>
         <div className='float-right w-3/12'>
            <img src= {CDN_URL + item.card.info.imageId} className='w-[100px] h-auto'/>
            <button className='bg-green-500 rounded-lg px-5' onClick={() => handleAddItem(item)}>ADD +</button>
          </div>
          </div>
         
         ))}
   </div>
   )
}

export default ItemList;