import {useState , useEffect} from "react"
import Head from 'next/head';
import NavbarTwo from '@/components/navbarTwo';

import { client, urlFor } from '../../lib/client';

function carsDetailss({
  home_products,
  bmw,
  audi,
  bentley,
  dodge,
  currentSlug,
}) {
  const {image} = bmw || home_products || audi || bentley || dodge; 
 



   


  return (
    <>
    <NavbarTwo />
    <img src={urlFor(image && image[0])} />
    <div>carsDetails</div>
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

  console.log("test this thiiingggg"+ JSON.stringify(arr))

  return {
    paths:arr,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "home_products" && slug.current == '${slug}'][0]`;
  const home_products = await client.fetch(query);

  const bmwquery = `*[_type == "bmw" && slug.current == '${slug}'][0]`;
  const bmw = await client.fetch(bmwquery);

  const audiquery = `*[_type == "audi" && slug.current == '${slug}'][0]`;
  const audi = await client.fetch(audiquery);

  const bentleyquery = `*[_type == "bentley" && slug.current == '${slug}'][0]`;
  const bentley = await client.fetch(bentleyquery);

  const dodgequery = `*[_type == "dodge" && slug.current == '${slug}'][0]`;
  const dodge = await client.fetch(dodgequery);
  
   console.log("in the single car page "+ home_products  ); 
   const currentSlug = slug;
  return {
    props: { 
      home_products,
      bmw,
      audi,
      bentley,
      dodge,
      currentSlug,

      

    }
  }
}


export default carsDetailss