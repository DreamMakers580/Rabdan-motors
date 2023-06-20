import PropTypes from 'prop-types';
import CartItem from '../home-page/carItem';

import { useState } from 'react';

function CarsGrid({ cars }) {

  const [visible, setvisible] = useState(16);

  const showMoreItems = () => {
    setvisible((preValue)=> preValue + 16 )
  }

    return (
        <>
        <div className="grid xl:grid-cols-4 fixed-lg:grid-cols-3 fixed-md:grid-cols-2 gap-[5px]">
        {cars.slice(0,visible).map((car) => (
                <CartItem key={car.slug} car={car} />
            ))}
            </div>
           
            <div className='w-full block mt-6 flex justify-center ' >
             <button onClick={showMoreItems} className=" boxed-btn justify-center text-[18px] leading-[30px]">
                Show More     
           </button>
           </div>
        </>
    );
}

CarsGrid.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default CarsGrid;
