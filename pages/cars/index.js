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
       
    }
 ) {
    const [cars, setCars] = useState(
        [
         ...bmw,
         ...audi,
         ...bentley,
         ...dodge,
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

    
  
  
    return {
      props: {
         home_products,
         bmw,
         audi,
         bentley,
         dodge,
       
      }
    }
  }


