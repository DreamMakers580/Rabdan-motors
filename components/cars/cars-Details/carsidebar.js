import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

function CarSidebar({ car }) {
    
    console.log("in the car side baaaaarrr"  +car);
    const [{
        image , 
        name , 
        price, 
        description,
        kilometers,
        make,
        model,
        year,
        wheels,
        color,
        vehicle_type,
        export_status,
        specs,
        gearbox,
        fuel,
        seats,
        cylinders,
        interior 
    }] = car;

    const makeThreeDigit = (number) => {
 
        return number?.toLocaleString() 
      
    }
    return (
        <div className="post-sidebar border-[#eee] border p-[50px_29px_66px]">
            <div className="post-searchbar">
                <h2 className="text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]">
                    {name}
                </h2>
             
                <p class="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
			  <span class="text-lg uppercase">
				AED
			  </span>
			  <span class="text-xl"> {makeThreeDigit(price)}</span>
			</p>
                
            </div>
            <div className="post-sidebar-item mt-[50px]">
                <h2 className="text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]">
                    Description
                </h2>
                <p className="post-list">
                    {description}
                </p>
            </div>
            <div className="post-sidebar-item post-sidebar-item mt-[50px]">
                <h2 className="text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]">
                    Model
                </h2>
                <p className="post-list">
                    {model}
                </p>
                
            </div>
            <div className="post-sidebar-item post-sidebar-item mt-[50px]">
                <h2 className="text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]">
                    Condition
                </h2>

                <p className="post-list">
                    { kilometers === 0 || kilometers === "0"? "New": "Used" }
                </p>
            </div>

            <div className='w-full block mt-6 flex justify-center ' >
             <button className=" boxed-btn justify-center text-[18px] leading-[30px]">
                Call Us    
           </button>
           </div>

        </div>
    );
}

CarSidebar.propTypes = {
    car: PropTypes.instanceOf(Object).isRequired,
};

export default CarSidebar;
