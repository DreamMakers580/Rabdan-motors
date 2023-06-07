import Image from 'next/image'
import Navbar from '@/components/navbar'
import Hero from '@/components/home-page/hero'
import Services from '@/components/home-page/services';
import PropTypes from 'prop-types';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import About from '@/components/home-page/about';
import Testimonial from '@/components/home-page/testimonial';
import Brand from '@/components/home-page/brand';
import Footer from '@/components/layout/footer';

import { client } from '@/lib/client';
import { urlFor } from '@/lib/client';

import Cars from '@/components/home-page/cars';

export default function Home(
  {
    heroItems,
    services,
    testimonialItems,
    brandItems,
    home_products,
   
  }
) {
  return (
    <>
    <Navbar />
    <Hero heroItems={heroItems} />
    <Services services={services} />
    <About />
    <Cars Cars={home_products} />
    <Testimonial
                testimonialItems={testimonialItems}
                testimonialTitle="+1,250 Happy Clients"
            />
    <Brand brandItems={brandItems} />
    <Footer />
    {console.log(home_products)}
    </>
  )
}
/*
export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const services = getAllItems('services');
    const testimonialItems = getAllItems('testimonial');
    const brandItems = getAllItems('brands');
    return {
        props: {
            heroItems,
            services,
            testimonialItems,
            brandItems,
        },
    };
}
*/
Home.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    
};

export const getServerSideProps = async () => {
  const query = '*[_type == "home_products"]';

  const home_products = await client.fetch(query);


  const heroItems = getAllItems('heros');
  const services = getAllItems('services');
  const testimonialItems = getAllItems('testimonial');
  const brandItems = getAllItems('brands');

  return {
    props: {
       home_products,
       heroItems,
       services,
       testimonialItems,
       brandItems, 
    }
  }
}

