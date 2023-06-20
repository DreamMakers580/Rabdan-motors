import PropTypes from 'prop-types';

import { urlFor } from '@/lib/client';

import React, { useState } from 'react';
import Cardescription from './cardescription';

function Cardetails({ car }) {
    const [index, setIndex] = useState(0);
    
    const [{
        image , 
        name , 
        price, 
        description,
        kilometers,
        make,
        model,
        year,
        drive_train,
        color,
        vehicle_type,
        export_status,
        specs,
        gearbox,
        fuel,
        seats,
        cylinders,
        interior, 
        Horse_Power,
        engine_capacity,
    }] = car;
    
    return (
        <div className="lg:col-span-8">
        <div className=" w-full flex justify-center">
         <div className="product-detail-container w-full flex">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image md:max-w-full md:w-full md:h-[450px] h-[330px] max-w-[340px]  " />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
            </div>
        </div>
         
        <h1 className=" flex justify-center  lm:text-[60px] text-[36px] lm:leading-[60px] mt-[45px]">
                    Car Details
        </h1>
        <div className="grid px-[35px] lm:grid-cols-2 mt-12 gap-x-[25px] gap-y-[55px]">

           
        <Cardescription title={"kilometers"} value={kilometers} />
        <Cardescription title={"Make"} value={make} />
        <Cardescription title={"Model"} value={model} />
        <Cardescription title={"Year"} value={year} />
        <Cardescription title={"Exterior Color"} value={color} />
        <Cardescription title={"Drive Train"} value={drive_train} />
        <Cardescription title={"Vehicle type"} value={vehicle_type} />
        <Cardescription title={"Export status"} value={export_status} />
        <Cardescription title={"Specs"} value={specs} />
        <Cardescription title={"Gearbox"} value={gearbox} />
        <Cardescription title={"Fuel"} value={fuel} />
        <Cardescription title={"Seats"} value={seats} />
        <Cardescription title={"Cylinders"} value={cylinders} />
        <Cardescription title={"Engine Capacity"} value={engine_capacity + " L"} />
        <Cardescription title={"Horse power"} value={Horse_Power + " HP"} />
        <Cardescription title={"Interior Color"} value={interior} />
      

        </div>
    </div>
    );
}

Cardetails.propTypes = {
    car: PropTypes.instanceOf(Object).isRequired,
};

export default Cardetails;
