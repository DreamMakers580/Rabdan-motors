import PropTypes from 'prop-types';
import { useState , useEffect } from 'react';
import CarsGrid from "./cars-grid"

function AllCars({ cars : initialCars }) {
    const [cars, setCars] = useState(initialCars);
    const [make, setMake] = useState("all");
    const [condition, setCondition] = useState("all");
   

useEffect(() => {
    // action on update of filtered cars
    let array = initialCars; // this is a clone array to do all the filters on it
    
    if (make === "all") {
        console.log("nothing to be filtered in the make ");
    } else {
        //filter the make of the array 
        array = handlemakefilter(array);
    }
    
    if (condition === "new") {

        //filter if the condition is new
        array = handlecCnditionNewFilter(array);
    } else if (condition === "used") {

        //filter if the condition is used
        array = handlecCnditionUsedFilter(array);
    }else{
        console.log("nothing to be done in the condition filtering ");
    }
    
    // set the main array "cars" to the filtered one "array"

    setCars(array);
    
}, [make,condition]);




   function handlemake(event) {
     const currentMake  = event.target.value; 
     setMake(currentMake);

     
   }

   function handleCondition(event) {
    const currentCondition  = event.target.value; 
    setCondition(currentCondition);
    
  }


 const handlemakefilter = (array) => {

     return array.filter( (car) => car.make === make ); 
     
 }

 const handlecCnditionNewFilter = (array) => {
   
    return array.filter((car) => car.kilometers === 0) 
  
}

const handlecCnditionUsedFilter = (array) => {
 
    return array.filter((car) => car.kilometers > 0 ) 
  
}

 
  
  
   

    return (
        <> 
     <div className="container">
        
        <div className="filter-tab flex xl:justify-end flex-wrap text-[#30373E] uppercase md:pb-155 pb-[55px] max-lg:pt-[55px]">
        
                   
          <select onChange={handlemake} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option >Select car make</option>
            <option defaultValue value="all">All</option>
            <option  value="bmw">Bmw</option>
            <option  value="audi">audi</option>
            <option  value="bentley">Bentley</option>
            <option  value="dodge">Dodge</option>
          </select>

        
          <select onChange={handleCondition} id="condition" className=" mx-3  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option >Select Condition</option>
            <option defaultValue value="all">All</option>
            <option  value="new">New</option>
            <option  value="used">Used</option>
          </select>
                    
                    
                </div>
            </div>
              
                <CarsGrid  cars={cars} />
            
        </>
    );
}

AllCars.propTypes = {
    cars: PropTypes.instanceOf(Object).isRequired,
};

export default AllCars;
