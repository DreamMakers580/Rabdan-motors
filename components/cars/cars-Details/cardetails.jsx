import PropTypes from 'prop-types';

import { urlFor } from '@/lib/client';

import dynamic from 'next/dynamic';
import { Slide } from '@/components/swiper';


import React, { useState } from 'react';
import Cardescription from './cardescription';

import ImageSmallItem from './ImageSmallItem';

function Cardetails({ car , settings }) {
    const [index, setIndex] = useState(0);
    
    const [{
        image , 
        name , 
        price, 
        description,
        stock,
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

    const SwiperComps = dynamic(() => import('@/components/swiper'), {
      ssr: false,
  });
  settings = {
    pagination: { clickable: true, type: 'bullets' },
    spaceBetween: 4,
    breakpoints: {
      450: {
        slidesPerView: 5,
        },
        350: {
            slidesPerView: 4,
       },
        250: {
            slidesPerView: 3,
        },
        100: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
};


    function rewrightMakeItemsToString(string) {
      switch (string) {
        case "land_rover": 
           return "Land Rover"
          break;
  
          case "alfa_romeo": 
           return "Alfa Romeo "
          break;
      
          case "rolls_roys": 
           return "Rolls Roys"
          break;
  
          case "mercedes_benz": 
           return "Mercedes Benz"
          break;
      
      
        default: 
          return string
          break;
      }
    }

    const makeThreeDigit = (number) => {
 
        return number?.toLocaleString() 
      
    }
    
    return (
        <div className="lg:col-span-8">
        <div className=" w-full flex justify-center">
         <div className="product-detail-container md:pl-6 w-full flex">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image md:max-w-full  md:h-[450px]  max-w-[340px]   " />
          </div>
          <div className="small-images-container">
          <SwiperComps settings={settings}>
             {image?.map((item, i) => (
              <Slide key={i}>
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                //onMouseEnter={() => setIndex(i)}
                onClick={() => setIndex(i)}
              />
             </Slide>
             
            ))}
        </SwiperComps>
           
          </div>
        </div>
            </div>
        </div>
         
        <h1 className=" flex justify-center  lm:text-[60px] text-[36px] lm:leading-[60px] mt-[45px]">
                    Car Details
        </h1>
        <div className="grid px-[35px] lm:grid-cols-2 mt-12 gap-x-[25px] gap-y-[55px]">

        <Cardescription title={"Make"} value={rewrightMakeItemsToString(make)} />   
        <Cardescription title={"Model"} value={model} />
        <Cardescription title={"Year"} value={year} />
        <Cardescription title={"kilometers"} value={makeThreeDigit(kilometers)} />
        <Cardescription title={"Exterior Color"} value={color} />
        <Cardescription title={"Drive Train"} value={drive_train} />
        <Cardescription title={"Vehicle type"} value={vehicle_type} />
        <Cardescription title={"Export status"} value={export_status} />
        <Cardescription title={"Specs"} value={specs} />
        <Cardescription title={"Gearbox"} value={gearbox} />
        <Cardescription title={"Fuel"} value={fuel} />
        <Cardescription title={"Seats"} value={seats} />
        <Cardescription title={"Cylinders"} value={cylinders} />
        <Cardescription title={"Engine Capacity"} value={engine_capacity? engine_capacity + " L": ""} />
        <Cardescription title={"Horse power"} value={Horse_Power? Horse_Power + " HP":""} />
        <Cardescription title={"Interior Color"} value={interior} />
      

        </div>
    </div>
    );
}

Cardetails.propTypes = {
    car: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
      slidesPerView: PropTypes.number,
      spaceBetween: PropTypes.number,
      breakpoints: PropTypes.shape({}),
  }),
};

export default Cardetails;

