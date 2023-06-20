import Head from 'next/head';
import PropTypes from 'prop-types';
import NavbarTwo from '@/components/navbarTwo.jsx';
import PageBanner from '@/components/pagebanner';
import { getAllItems } from '../lib/items-util';
import Footer from '@/components/layout/footer.js';

function AboutPage({ contactItems }) {
    return (
        <>
            <Head>
                <title>About Us</title>
                
            </Head>
            <NavbarTwo />
            <PageBanner />
            <h1>about page</h1>
            <Footer/>
            
        </>
    );
}


export default AboutPage;
