import Head from 'next/head';
import PropTypes from 'prop-types';
import NavbarTwo from '@/components/navbarTwo.jsx';
import GoogleMap from "../components/contact/contact-map.js";
import ContactForm from '../components/contact/contact-form.js';
import { getAllItems } from '../lib/items-util';
import Footer from '@/components/layout/footer.js';

function AboutPage({ contactItems }) {
    return (
        <>
            <Head>
                <title>About Us</title>
                
            </Head>
            <NavbarTwo />
            <h1>about page</h1>
            <Footer/>
            
        </>
    );
}


export default AboutPage;
