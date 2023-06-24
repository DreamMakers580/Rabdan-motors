import Head from 'next/head';
import PropTypes from 'prop-types';
import NavbarTwo from '@/components/navbarTwo.jsx';
import Navbar from '@/components/navbar';
import PageBanner from '@/components/pagebanner';
import { getAllItems } from '../lib/items-util';
import Footer from '@/components/layout/footer';

import About from '@/components/home-page/about';
import Services from '@/components/home-page/services';

import AboutInAbout from '@/components/about/aboutInAbout';
import AboutServices from '@/components/about/aboutServices';
import Brand from '@/components/home-page/brand';


function AboutPage({ 
    services,
    brandItems,
}) {
    return (
        <>
            <Head>
                <title>About Us</title>
                
            </Head>
            <Navbar />
            <PageBanner />
            <AboutInAbout />
            <AboutServices services={services} />
            <Brand brandItems={brandItems} />
            <Footer/>
            
        </>
    );
}

AboutPage.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
};


export const getServerSideProps = async () => {
 
  
  
    
    const services = getAllItems('services');
    const brandItems = getAllItems('brands');

    return {
      props: {
        
         services,
         brandItems,
       
      }
    }
  }

export default AboutPage;
