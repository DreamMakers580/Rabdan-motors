import Head from 'next/head';
import PropTypes from 'prop-types';
import NavbarTwo from '@/components/navbarTwo.jsx';
import Navbar from '@/components/navbar';

import Footer from '@/components/layout/footer';

import PrivacyPolicyContent from '@/components/privacy/privacy-policy';

function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy</title>
                
            </Head>
            <NavbarTwo />
            <PrivacyPolicyContent />
            <Footer/>
            
        </>
    );
}



export default PrivacyPolicy;
