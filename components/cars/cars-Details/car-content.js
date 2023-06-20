import Link from 'next/link';
import PropTypes from 'prop-types';

import { IoMdGrid } from 'react-icons/io';
import CarBanner from './car-banner';
import CarSidebar from './carsidebar';
import Cardetails from './cardetails';

import {urlFor} from "../../../lib/client"

function CarContent({ car }) {
  
    console.log("in the car banner"+JSON.stringify(car));
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
    
    return (
        <article>
        
        <div className="lg:grid lg:grid-cols-12 xl:gap-x-[50px] gap-x-[30px]">
                    <Cardetails car={car} />
                    <div className="lg:col-span-4 max-md:pt-[50px]">
                        <CarSidebar car={car} />
                    </div>
                </div>
        </article>
    );
}

CarContent.propTypes = {
    car: PropTypes.instanceOf(Object).isRequired,
};

export default CarContent;
