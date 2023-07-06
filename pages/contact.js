import Head from 'next/head';
import PropTypes from 'prop-types';
import NavbarTwo from '@/components/navbarTwo.jsx';
import GoogleMap from "../components/contact/contact-map.js";
import ContactForm from '../components/contact/contact-form.jsx';
import { getAllItems } from '../lib/items-util';

function ContactPage({ contactItems }) {
    return (
        <>
            <Head>
                <title>Contact Us</title>
                <meta name="description" content="Send us your messages!" />
            </Head>
            <NavbarTwo />
            <GoogleMap />
            <ContactForm contactItems={contactItems} />
        </>
    );
}

export function getStaticProps() {
    const contactItems = getAllItems('contact');
    return {
        props: {
            contactItems,
        },
    };
}

ContactPage.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
};

export default ContactPage;
