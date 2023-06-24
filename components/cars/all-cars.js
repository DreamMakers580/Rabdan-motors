import PropTypes from 'prop-types';
import { useState , useEffect } from 'react';
import CarsGrid from "./cars-grid"

function AllCars({ cars : initialCars }) {
    const [cars, setCars] = useState(initialCars);
    const [make, setMake] = useState("all");
    const [condition, setCondition] = useState("all");
    const [price, setPrice] = useState("all");
   

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

    if (price === "all") {
        
        console.log("nothing to be filtered in the price ");

    }else if (price === "above") {

        //filter if the price is above 800,000+
        array = handlePriceAboveFilter(array);
    } else {
        //filter the price of the array 
        array = handlepricefilter(array);
    }
    
    // set the main array "cars" to the filtered one "array"

    setCars(array);
    
}, [make,condition,price]);




   function handlemake(event) {
     const currentMake  = event.target.value; 
     setMake(currentMake);

     
   }

   function handleCondition(event) {
    const currentCondition  = event.target.value; 
    setCondition(currentCondition);
    
  }

  function handlePrice(event) {
    const currentPrice  = event.target.value; 
    setPrice(currentPrice);
    
  }
  const makeLowerCase = (string) => {

    return string?.toString().toLowerCase() 
    
}


 const handlemakefilter = (array) => {

     return array.filter( (car) => makeLowerCase(car.make) === make ); 
     
 }

 const handlecCnditionNewFilter = (array) => {
   
    return array.filter((car) => car.kilometers === 0) 
  
}

const handlecCnditionUsedFilter = (array) => {
 
    return array.filter((car) => car.kilometers > 0 ) 
  
}

const handlepricefilter = (array) => {
 
    return array.filter((car) => car.price <= price ) 
  
}

const handlePriceAboveFilter = (array) => {
 
    return array.filter((car) => car.price > 800000 ) 
  
}


  
  
   

    return (
        <> 
     <div className="container">
        
        <div className="filter-tab flex xl:justify-end flex-wrap text-[#30373E] uppercase md:pb-155 pb-[55px] max-lg:pt-[55px]">
        
                   
          <select onChange={handlemake} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="all">Select car make</option>
            <option defaultValue value="all">All</option>
            <option  value="bmw">Bmw</option>
            <option  value="audi">audi</option>
            <option  value="bentley">Bentley</option>
            <option  value="dodge">Dodge</option>
            <option  value="ford">Ford</option>
            <option  value="gmc">Gmc</option>
            <option  value="jeep">Jeep</option>
            <option  value="land_rover">Land Rover</option>
            <option  value="maserati">Maserati</option>
            <option  value="mercedes_benz">Mercedes Benz</option>
            <option  value="porsche">Porsche</option>
            <option  value="tesla">Tesla</option>
            <option  value="rolls_roys">Mercedes Benz</option>
            <option  value="alfa_romeo">Alfa Romeo</option>
            <option  value="ferrari">Ferrari</option>
            <option  value="lamborgini">Lamborgini</option>
          </select>

        
          <select onChange={handleCondition} id="condition" className=" mx-3  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="all">Select Condition</option>
            <option defaultValue value="all">All</option>
            <option  value="new">New</option>
            <option  value="used">Used</option>
          </select>


          <select onChange={handlePrice} id="price" className=" md:mt-[0] mt-4  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="all">Select Price</option>
            <option defaultValue value="all">All</option>
            <option  value={30000}>30,000</option>
            <option  value={60000}>60,000</option>
            <option  value={90000}>90,000</option>
            <option  value={120000}>120,000</option>
            <option  value={150000}>150,000</option>
            <option  value={180000}>180,000</option>
            <option  value={220000}>220,000</option>
            <option  value={260000}>260,000</option>
            <option  value={300000}>300,000</option>
            <option  value={350000}>350,000</option>
            <option  value={400000}>400,000</option>
            <option  value={500000}>500,000</option>
            <option  value={600000}>600,000</option>
            <option  value={800000}>800,000</option>
            <option  value="above">800,000+</option>

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
