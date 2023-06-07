import PropTypes from 'prop-types';
import { useState , useEffect } from 'react';
import CarsGrid from "./cars-grid"

function AllCars({ cars : initialCars }) {
    const [cars, setCars] = useState(initialCars);
    const [make, setMake] = useState("all");
    const [condition, setCondition] = useState("all");
    const [filteredCars, setFilteredCars] = useState(initialCars);
    
    //const [currentFilter, setCurrentFilter] = useState('all');

    /*const onFilterHandler = (e) => {
        e.preventDefault();
        const { target } = e;
        const filterValue = target.dataset.filter;
        setCurrentFilter(filterValue);
        const filteredProjects = initialProject.filter(
            (pro) => pro.category === filterValue
        );
        filterValue === 'all'
            ? setProjects(initialProject)
            : setProjects(filteredProjects);
    };*/
  
  function handleCondition(event) {
    const filterValue = event.target.value ;
    const filteredCars = initialCars.filter(
        (car) => { 
            
          if (filterValue === "new") {
            return car.kilometers === 0
        } else if (filterValue === "used"){
            return car.kilometers > 0
        }
        }
    );
      if (filterValue === 'all') {
        setCars(initialCars)
      }else{
        setCars(filteredCars);
      }
    //kilometers
  }
  
  
   function handlefilter(event) {
    const filterValue = event.target.value ;
    //console.log("the filter is : " + event.target.value);

    const filteredCars = initialCars.filter(
        (car) => car.make === filterValue
    );
      if (filterValue === 'all') {
        setCars(initialCars)
      }else{
        setCars(filteredCars);
      }
      
   }
   

    return (
        <>
            <div className="container">
                <div className="filter-tab flex xl:justify-end flex-wrap text-[#30373E] uppercase md:pb-155 pb-[55px] max-lg:pt-[55px]">
                    <button
                        className={` ml-10`}
                        type="button"
                        
                        data-filter="all"
                    >
                        All
                    </button>
          
          <select onChange={handlefilter} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected value="all">All</option>
            <option  value="bmw">Bmw</option>
            <option  value="audi">audi</option>
            <option  value="bentley">Bentley</option>
            <option  value="dodge">Dodge</option>
          </select>

                    <button
                        className={`ml-10`}
                        type="button"
                        
                        data-filter="residenital"
                    >
                        Residenital
                    </button>

          <select onChange={handleCondition} id="condition" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected value="all">All</option>
            <option  value="new">New</option>
            <option  value="used">Used</option>
          </select>
                    <button
                        className={` ml-10`}
                        type="button"
                        
                        data-filter="commercial"
                    >
                        Commercial
                    </button>
                    <button
                        className={` sm:ml-10 fixed-xs:mt-[10px]`}
                        type="button"
                        
                        data-filter="suitanable-space"
                    >
                        search
                    </button>
                </div>
            </div>
            <div className="grid xl:grid-cols-4 fixed-lg:grid-cols-3 fixed-md:grid-cols-2 gap-[5px]">
                <CarsGrid cars={cars} />
            </div>
        </>
    );
}

AllCars.propTypes = {
    cars: PropTypes.instanceOf(Object).isRequired,
};

export default AllCars;










// second backup

/*
 

import PropTypes from 'prop-types';
import { useState , useEffect } from 'react';
import CarsGrid from "./cars-grid"

function AllCars({ cars : initialCars }) {
    const [cars, setCars] = useState(initialCars);
    const [make, setMake] = useState("all");
    const [condition, setCondition] = useState("all");
    const [filteredCars, setFilteredCars] = useState(initialCars);
    
    //const [currentFilter, setCurrentFilter] = useState('all');

    /*const onFilterHandler = (e) => {
        e.preventDefault();
        const { target } = e;
        const filterValue = target.dataset.filter;
        setCurrentFilter(filterValue);
        const filteredProjects = initialProject.filter(
            (pro) => pro.category === filterValue
        );
        filterValue === 'all'
            ? setProjects(initialProject)
            : setProjects(filteredProjects);
    };*/
  /*
    function handleConditionn(event) {
        const filterValue = event.target.value ;
        const filteredCars = initialCars.filter(
            (car) => { 
                
              if (filterValue === "new") {
                return car.kilometers === 0
            } else if (filterValue === "used"){
                return car.kilometers > 0
            }
            }
        );
          if (filterValue === 'all') {
            setCars(initialCars)
          }else{
            setCars(filteredCars);
          }
        //kilometers
      }
      
      
       function handlefilter(event) {
        const filterValue = event.target.value ;
        //console.log("the filter is : " + event.target.value);
    
        const filteredCars = initialCars.filter(
            (car) => car.make === filterValue
        );
          if (filterValue === 'all') {
            setCars(initialCars)
          }else{
            setCars(filteredCars);
          }
          
       }
    
       
     useEffect(() => {
        // action on update of make
        console.log("the car make is "+ make);
        handlemakefilter(make);
        
        
    }, [make]);
    
      useEffect(() => {
        // action on update of condition
        console.log("the car condition is "+ condition);
        handlemakefilter(make);
        setTimeout( handlecCnditionFilter(condition) , 3000 );
        
    }, [condition]);
    
    useEffect(() => {
        // action on update of filtered cars
        console.log("the filtered cars is "+ filteredCars);
        setCars(filteredCars)
    }, [filteredCars]);
    
    
    
    
       function handlemake(event) {
         const currentMake  = event.target.value; 
         setMake(currentMake);
    
         
       }
    
       function handleCondition(event) {
        const currentCondition  = event.target.value; 
        setCondition(currentCondition);
        
      }
    
    
     function handlemakefilter(currentmake) {
    
        const filteredCars = initialCars.filter(
            (car) => car.make === currentmake
        );
        if (currentmake === "all") {
            setFilteredCars(initialCars)
        } else {
            setFilteredCars(filteredCars)
        }
     }
    
     function handlecCnditionFilter(currentCondition) {
    
        if (currentCondition === "new") {
            const currentFilter = filteredCars.filter(
                (car) => car.kilometers === 0
            ) 
            setFilteredCars(currentFilter)
        } else if (currentCondition === "used"){
            
            const currentFilter = filteredCars.filter(
                (car) => car.kilometers > 0
            ) 
            setFilteredCars(currentFilter)
        }else{
            console.log("nothing to be done in the condition filtering ");
        }
     }
      
      
       
    
        return (
            <>
                <div className="container">
                    <div className="filter-tab flex xl:justify-end flex-wrap text-[#30373E] uppercase md:pb-155 pb-[55px] max-lg:pt-[55px]">
                        <button
                            className={` ml-10`}
                            type="button"
                            
                            data-filter="all"
                        >
                            All
                        </button>
              
              <select onChange={handlemake} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue value="all">All</option>
                <option  value="bmw">Bmw</option>
                <option  value="audi">audi</option>
                <option  value="bentley">Bentley</option>
                <option  value="dodge">Dodge</option>
              </select>
    
                        <button
                            className={`ml-10`}
                            type="button"
                            
                            data-filter="residenital"
                        >
                            Residenital
                        </button>
    
              <select onChange={handleCondition} id="condition" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue value="all">All</option>
                <option  value="new">New</option>
                <option  value="used">Used</option>
              </select>
                        <button
                            className={` ml-10`}
                            type="button"
                            
                            data-filter="commercial"
                        >
                            Commercial
                        </button>
                        <button
                            className={` sm:ml-10 fixed-xs:mt-[10px]`}
                            type="button"
                            
                            data-filter="suitanable-space"
                        >
                            search
                        </button>
                    </div>
                </div>
                <div className="grid xl:grid-cols-4 fixed-lg:grid-cols-3 fixed-md:grid-cols-2 gap-[5px]">
                    <CarsGrid  cars={cars} />
                </div>
            </>
        );
    }
    
    AllCars.propTypes = {
        cars: PropTypes.instanceOf(Object).isRequired,
    };
    
    export default AllCars;
    


 */
