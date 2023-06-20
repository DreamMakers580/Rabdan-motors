import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Navbar from '@/components/navbar';
import AllCars from '@/components/cars/all-cars';
import { client } from '@/lib/client';
import NavbarTwo from '@/components/navbarTwo';
import Footer from '@/components/layout/footer';

import {useState , useEffect} from "react"

export default function allCarsPage(
    {
        
        home_products,
        bmw,
        audi,
        bentley,
        dodge,
        ford,
        gmc,
        jeep,
        land_rover,
        maserati,
        mercedes_benz,
        porsche,
        tesla,
       
    }
 ) {
    const [cars, setCars] = useState(
        [
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
         ...tesla,
       ]
    );
    
    return (
        <>
            <Head>
                <title>All Projects</title>
                <meta
                    name="description"
                    content="A list of all programming-related tutorials and projects!"
                />
            </Head>
            <NavbarTwo />
            <Breadcrumb activePage="Cars" pageTitle="Our Cars" />
            <AllCars cars={cars} />
            <Footer/>
        </>
    );
}


allCarsPage.propTypes = {
    cars: PropTypes.instanceOf(Object).isRequired,
};

export const getServerSideProps = async () => {
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

    
  
  
    return {
      props: {
         home_products,
         bmw,
         audi,
         bentley,
         dodge,
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


