import PropTypes from 'prop-types';
import Link from 'next/link';
//import Image from 'next/image';

import { urlFor } from '@/lib/client';

function CartItem({ car:{
    image,
    name,
    slug,
    price,
    year,
    kilometers,
    color,
    make,
    stock
} }) {
    //const imagePath = `/images/projects/${project?.slug}/${project?.image}`;
    //const linkPath = `/projects/${Car?.slug}`;
    const makeThreeDigit = (number) => {
 
      return number?.toLocaleString() 
    
  }

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
  

    return (
        <div className={`project-item  gallery-item group ${slug.current}`}>
            <Link href={`/cars/${slug.current}`}>
                <a>
                <div class="relative mx-auto w-full">
	<a href="#" class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
	  <div class="shadow p-4 rounded-lg bg-white">
		<div class="flex justify-center relative rounded-lg overflow-hidden h-52">
		  <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
			<img src={urlFor(image && image[0])} />
		  </div>
		</div>

		<div class="mt-4">
		  <h2 class="font-medium text-base md:text-lg text-gray-800 line-clamp-1" title="New York">
			{name}
		  </h2>
      <div className='grid grid-cols-2 grid-rows-1 gap-4 mt-8'>
      <p class="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
			  <span class="text-sm uppercase">
				AED
			  </span>
			  <span class="text-lg"> {makeThreeDigit(price)}</span>
			</p>
     
      <h3 class=" inline-flex flex-col xl:flex-row xl:items-center font-medium text-base md:text-lg text-gray-800 line-clamp-1" title="New York">
			 {stock === 0 || stock === "0" ?  <span className='text-red-500' >Out of Stock</span>  : <span>Stock : {stock}</span> }
		  </h3>
		  
      </div>
		</div>

		<div class="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
		  <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
			{
             //   <svg class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"></path></svg>
            }	
          <svg width="27" height="27" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path fill="currentColor" stroke="none" d="m15.285 10.867-2.226 3.54a1.455 1.455 0 0 1-.328.328 1.412 1.412 0 0 1-1.641-2.297l3.54-2.227a.48.48 0 0 1 .547 0 .472.472 0 0 1 .108.656Z"></path>
           <path d="M12 3C6.202 3 1.5 7.697 1.5 13.495a10.461 10.461 0 0 0 2.64 6.961c.05.056.098.113.15.164a1.182 1.182 0 0 0 1.738-.004 8.115 8.115 0 0 1 11.944 0 1.18 1.18 0 0 0 1.739.004l.15-.164a10.46 10.46 0 0 0 2.639-6.96C22.5 7.695 17.798 3 12 3Z"></path>
           <path d="M12 6v1.5"></path>
           <path d="M19.5 13.5H18"></path>
           <path d="M6 13.5H4.5"></path>
           <path d="m7.758 9.256-1.06-1.06"></path>
           <path d="m16.242 9.256 1.061-1.06"></path>
          </svg>
      <span class="mt-2 md:ml-2 xl:mt-0">
			   {makeThreeDigit(kilometers)}
			</span>
		  </p>
		  <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
           <svg width="27" height="27" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3c-4.969 0-9 4.031-9 9s4.031 9 9 9 9-4.031 9-9-4.031-9-9-9Z"></path>
            <path d="M12 6v6.75h4.5"></path>
           </svg>
			<span class="mt-2 md:ml-2 xl:mt-0">
			  {year}
			</span>
		  </p>
		  <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
          <svg width="27" height="27" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path d="M20.162 16.308c-.31-.286-.764-.356-1.153-.422-.54-.09-.745-.188-1.06-.469-.67-.595-.67-1.458 0-2.053l1.42-1.26c2.176-1.923 2.176-5.073 0-6.995C17.768 3.7 15.616 3 13.38 3c-2.61 0-5.339.952-7.443 2.817-3.915 3.46-3.915 9.127 0 12.586 1.945 1.72 4.57 2.578 7.167 2.597h.08c2.596 0 5.156-.84 6.974-2.456.675-.596.562-1.716.005-2.236Z"></path>
             <path fill="currentColor" stroke="none" d="M6.75 11.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
             <path fill="currentColor" stroke="none" d="M7.125 16.078a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
             <path fill="currentColor" stroke="none" d="M10.5 8.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
             <path fill="currentColor" stroke="none" d="M12 19.453a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
             <path fill="currentColor" stroke="none" d="M15.375 8.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
          </svg>
            <span class="mt-2 md:ml-2 xl:mt-0">
			  {color}
			</span>
		  </p>
		  <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
			
            <svg width="27" height="27" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path d="M22.017 10.997c-.343-.456-1.62-.77-2.16-1.591-.54-.82-.982-2.598-2.356-3.281C16.127 5.442 13.5 5.25 12 5.25s-4.125.188-5.501.873c-1.377.686-1.817 2.462-2.357 3.282-.54.819-1.816 1.136-2.16 1.592-.343.456-.585 3.34-.438 4.753.147 1.414.422 2.25.422 2.25h4.031c.66 0 .875-.248 2.225-.375A43.135 43.135 0 0 1 12 17.437c.844 0 2.344.047 3.824.188 1.35.128 1.572.375 2.225.375h3.984s.275-.836.422-2.25c.147-1.414-.096-4.297-.438-4.753Z"></path>
             <path d="M21.375 18H18.75v.75h2.625V18Z"></path>
             <path d="M5.25 18H2.625v.75H5.25V18Z"></path>
             <path fill="currentColor" stroke="none" d="M17.084 14.492c-.276-.32-1.18-.588-2.375-.767-1.195-.179-1.63-.225-2.7-.225-1.068 0-1.555.077-2.7.226-1.146.148-2.006.412-2.375.766-.553.536.258 1.138.894 1.211.617.07 1.85.045 4.186.045 2.337 0 3.57.025 4.187-.045.636-.077 1.388-.637.883-1.211Z"></path>
             <path fill="currentColor" stroke="none" d="M20.23 11.395a.151.151 0 0 0-.146-.14c-.553-.02-1.115.019-2.112.313a4.4 4.4 0 0 0-1.41.706c-.107.083-.07.309.065.333a21.34 21.34 0 0 0 2.476.145c.496 0 1.009-.14 1.104-.583.048-.255.056-.517.023-.774Z"></path>
             <path fill="currentColor" stroke="none" d="M3.77 11.395a.151.151 0 0 1 .146-.14c.553-.02 1.115.019 2.112.313a4.4 4.4 0 0 1 1.41.706c.107.083.07.309-.065.333a21.34 21.34 0 0 1-2.476.145c-.496 0-1.009-.14-1.104-.583a2.457 2.457 0 0 1-.023-.774Z"></path>
              <path d="M20.25 9H21"></path>
             <path d="M3 9h.75"></path>
            <path d="M3.656 9.89S5.83 9.329 12 9.329c6.171 0 8.344.563 8.344.563"></path>
            </svg>
            <span class="mt-2 md:ml-2  xl:mt-0">
			       {rewrightMakeItemsToString(make)}
		       	</span>
		  </p>
		</div>

		
	  </div>
	</a>
  </div>

                </a>
            </Link>
            {//I commented this out to test something else
            //console.log("in the single car file " + name)
            }
        </div>
    );
}

CartItem.propTypes = {
    car: PropTypes.instanceOf(Object).isRequired,
};

export default CartItem;
