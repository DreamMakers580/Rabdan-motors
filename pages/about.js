import Head from 'next/head';
import PropTypes from 'prop-types';
import NavbarTwo from '@/components/navbarTwo.jsx';
import Navbar from '@/components/navbar';
import PageBanner from '@/components/pagebanner';
import { getAllItems } from '../lib/items-util';
import Footer from '@/components/layout/footer';
import About from '@/components/about/about';

import Services from '@/components/about/services';

function AboutPage({ 
   
    services,
 
}) {
    return (
        <>
            <Head>
                <title>About Us</title>
                
            </Head>
            <Navbar />
            <PageBanner />
            <About />
            <Services services={services} />
            <Footer/>
            
        </>
    );
}

AboutPage.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
};


export const getServerSideProps = async () => {
 
  
  
    
    const services = getAllItems('services');

    return {
      props: {
        
         services,
       
      }
    }
  }

export default AboutPage;
