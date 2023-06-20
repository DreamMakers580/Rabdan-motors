import {useState , useEffect} from "react"
import Head from 'next/head';
import NavbarTwo from '@/components/navbarTwo';
import Navbar from "@/components/navbar";
import Footer from "@/components/layout/footer";
import CarContent from "@/components/cars/cars-Details/car-content";

import { client, urlFor } from '../../lib/client';


function carsDetails({
  home_products,
  bmw,
  audi,
  bentley,
  dodge,
  currentSlug,
  ford,
  gmc,
  jeep,
  land_rover,
  maserati,
  mercedes_benz,
  porsche,
}) {
   
  const handleSlugfilter = (array) => {
  
    return array.filter( (car) => car.slug.current === currentSlug ); 
  }
  const [allcars, setAllcars] = useState(
    [
     ...home_products,
     ...bmw,
     ...audi,
     ...bentley,
     ...dodge,
     ...ford,
     ...gmc,
     ...jeep,
     ...land_rover,
     ...maserati,
     ...mercedes_benz,
     ...porsche,
   ]
);
 // const {image} = bmw || home_products || audi || bentley || dodge; 

 let array = allcars;
 array = handleSlugfilter(array);
 //console.log(" this array car is " +JSON.stringify(array));
 
// console.log(" this car is " + array);
 const [CurrentCar, setCurrentCar] = useState(array);

 console.log("seif seif adsadfcabdcv" +JSON.stringify(CurrentCar) );
 
  useEffect(() => {
    //console.log(" this array car is " +array);

     //setCurrentCar(array)
     //alert("asfcadf");
     
   
    
    
  }, []);
  
  

   
   const [{image}] = CurrentCar; 
   //const {image} = first; 

   console.log("the image is"+image);

  return (
    <>
    <NavbarTwo />
  
   <CarContent car={CurrentCar} />
   
   
   <Footer />
    </>
  )
}

export const getStaticPaths = async () => {
  
  let arr = [];

  const query = `*[_type == "home_products"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const homepaths = products.map((product) => {
   
    //arr = {...arr,params: { slug: product.slug.current}};
    
    return {params: { slug: product.slug.current}}
    
  });
   homepaths.map((homepath , index)=>{
    arr.push( homepath )
    return null
  })
 

  

  const bmwquery = `*[_type == "bmw"] {
    slug {
      current
    }
  }
  `;

  const bmwproducts = await client.fetch(bmwquery);

  const bmwpaths = bmwproducts.map((product) => ({     
    params: { 
      slug: product.slug.current
    }
  }));
  
  bmwpaths.map((bmwpath)=>{
    arr.push( bmwpath )
    return null
  })


  const audiquery = `*[_type == "audi"] {
    slug {
      current
    }
  }
  `;

  const audiproducts = await client.fetch(audiquery);

  const audipaths = audiproducts.map((product) => {
   
    //arr = {...arr,params: { slug: product.slug.current}};
    
    return {params: { slug: product.slug.current}}
    
  });
  audipaths.map((audipath , index)=>{
    arr.push( audipath )
    return null
  })
  

  const bentleyquery = `*[_type == "bentley"] {
    slug {
      current
    }
  }
  `;

  const bentleyproducts = await client.fetch(bentleyquery);

  const bentleypaths = bentleyproducts.map((product) => {
   
    //arr = {...arr,params: { slug: product.slug.current}};
    
    return {params: { slug: product.slug.current}}
    
  });
  bentleypaths.map((bentleypath , index)=>{
    arr.push( bentleypath )
    return null
  })


  const dodgequery = `*[_type == "dodge"] {
    slug {
      current
    }
  }
  `;

  const dodgeproducts = await client.fetch(dodgequery);

  const dodgepaths = dodgeproducts.map((product) => {
   
    //arr = {...arr,params: { slug: product.slug.current}};
    
    return {params: { slug: product.slug.current}}
    
  });
  dodgepaths.map((dodgepath , index)=>{
    arr.push( dodgepath )
    return null
  })



  const fordquery = `*[_type == "ford"] {
    slug {
      current
    }
  }
  `;

  const fordproducts = await client.fetch(fordquery);

  const fordpaths = fordproducts.map((product) => {
   
    //arr = {...arr,params: { slug: product.slug.current}};
    
    return {params: { slug: product.slug.current}}
    
  });
  fordpaths.map((fordpath , index)=>{
    arr.push( fordpath )
    return null
  })


  const gmcquery = `*[_type == "gmc"] {
    slug {
      current
    }
  }
  `;

  const gmcproducts = await client.fetch(gmcquery);

  const gmcpaths = gmcproducts.map((product) => {
   
    //arr = {...arr,params: { slug: product.slug.current}};
    
    return {params: { slug: product.slug.current}}
    
  });
  gmcpaths.map((gmcpath , index)=>{
    arr.push( gmcpath )
    return null
  })


  const jeepquery = `*[_type == "jeep"] {
    slug {
      current
    }
  }
  `;

  const jeepproducts = await client.fetch(jeepquery);

  const jeeppaths = jeepproducts.map((product) => {
   
    //arr = {...arr,params: { slug: product.slug.current}};
    
    return {params: { slug: product.slug.current}}
    
  });
  jeeppaths.map((jeeppath , index)=>{
    arr.push( jeeppath )
    return null
  })
  

  const land_roverquery = `*[_type == "land_rover"] {
    slug {
      current
    }
  }
  `;

  const land_roverproducts = await client.fetch(land_roverquery);

  const land_roverpaths = land_roverproducts.map((product) => {
   
    //arr = {...arr,params: { slug: product.slug.current}};
    
    return {params: { slug: product.slug.current}}
    
  });
  land_roverpaths.map((land_roverpath , index)=>{
    arr.push( land_roverpath )
    return null
  })


  const maseratiquery = `*[_type == "maserati"] {
    slug {
      current
    }
  }
  `;

  const maseratiproducts = await client.fetch(maseratiquery);

  const maseratipaths = maseratiproducts.map((product) => {
   
    //arr = {...arr,params: { slug: product.slug.current}};
    
    return {params: { slug: product.slug.current}}
    
  });
  maseratipaths.map((maseratipath , index)=>{
    arr.push( maseratipath )
    return null
  })


  const mercedes_benzquery = `*[_type == "mercedes_benz"] {
    slug {
      current
    }
  }
  `;

  const mercedes_benzproducts = await client.fetch(mercedes_benzquery);

  const mercedes_benzpaths = mercedes_benzproducts.map((product) => {
   
    //arr = {...arr,params: { slug: product.slug.current}};
    
    return {params: { slug: product.slug.current}}
    
  });
  mercedes_benzpaths.map((mercedes_benzpath , index)=>{
    arr.push( mercedes_benzpath )
    return null
  })


  const porschequery = `*[_type == "porsche"] {
    slug {
      current
    }
  }
  `;

  const porscheproducts = await client.fetch(porschequery);

  const porschepaths = porscheproducts.map((product) => {
   
    //arr = {...arr,params: { slug: product.slug.current}};
    
    return {params: { slug: product.slug.current}}
    
  });
  porschepaths.map((porschepath , index)=>{
    arr.push( porschepath )
    return null
  })
  

  const teslaquery = `*[_type == "tesla"] {
    slug {
      current
    }
  }
  `;

  const teslaproducts = await client.fetch(teslaquery);

  const teslapaths = teslaproducts.map((product) => {
   
    //arr = {...arr,params: { slug: product.slug.current}};
    
    return {params: { slug: product.slug.current}}
    
  });
  teslapaths.map((teslapath , index)=>{
    arr.push( teslapath )
    return null
  })


  const toyotaquery = `*[_type == "toyota"] {
    slug {
      current
    }
  }
  `;

  const toyotaproducts = await client.fetch(toyotaquery);

  const toyotapaths = toyotaproducts.map((product) => {
   
    //arr = {...arr,params: { slug: product.slug.current}};
    
    return {params: { slug: product.slug.current}}
    
  });
  toyotapaths.map((toyotapath , index)=>{
    arr.push( toyotapath )
    return null
  })



  const volkswagenquery = `*[_type == "volkswagen"] {
    slug {
      current
    }
  }
  `;

  const volkswagenproducts = await client.fetch(volkswagenquery);

  const volkswagenpaths = volkswagenproducts.map((product) => {
   
    //arr = {...arr,params: { slug: product.slug.current}};
    
    return {params: { slug: product.slug.current}}
    
  });
  volkswagenpaths.map((volkswagenpath , index)=>{
    arr.push( volkswagenpath )
    return null
  })




  console.log("test this thiiingggg"+ JSON.stringify(arr))

  return {
    paths:arr,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = '*[_type == "home_products"]';
  const home_products = await client.fetch(query); 

  const bmwquery = '*[_type == "bmw"]';
  const bmw = await client.fetch(bmwquery);

  const audiquery = '*[_type == "audi"]';
  const audi = await client.fetch(audiquery);

  const bentleyquery = '*[_type == "bentley"]';
  const bentley = await client.fetch(bentleyquery);

  const dodgequery = '*[_type == "dodge"]';
  const dodge = await client.fetch(dodgequery);

  const fordquery = '*[_type == "ford"]';
  const ford = await client.fetch(fordquery);

  const gmcquery = '*[_type == "gmc"]';
  const gmc = await client.fetch(gmcquery);

  const jeepquery = '*[_type == "jeep"]';
  const jeep = await client.fetch(jeepquery);

  const land_roverquery = '*[_type == "land_rover"]';
  const land_rover = await client.fetch(land_roverquery);

  const maseratiquery = '*[_type == "maserati"]';
  const maserati = await client.fetch(maseratiquery);

  const mercedes_benzquery = '*[_type == "mercedes_benz"]';
  const mercedes_benz = await client.fetch(mercedes_benzquery);

  const porschequery = '*[_type == "porsche"]';
  const porsche = await client.fetch(porschequery);
  
  const teslaquery = '*[_type == "tesla"]';
  const tesla = await client.fetch(teslaquery);
  
  
  // console.log("in the single car page "+ home_products  ); 
   const currentSlug = slug;
  return {
    props: { 
      home_products,
      bmw,
      audi,
      bentley,
      dodge,
      currentSlug,
      ford,
      gmc,
      jeep,
      land_rover,
      maserati,
      mercedes_benz,
      porsche,
      tesla,

      

    }
  }
}


export default carsDetails



