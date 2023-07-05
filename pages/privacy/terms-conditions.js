import Head from 'next/head';
import PropTypes from 'prop-types';
import NavbarTwo from '@/components/navbarTwo.jsx';
import Navbar from '@/components/navbar';

import Footer from '@/components/layout/footer';
import TermsAndConditionContent from '@/components/privacy/terms-conditions';

function TermsAndConditions() {
    return (
        <>
            <Head>
                <title>Terms And Conditions</title>
                
            </Head>
            <NavbarTwo />
            <TermsAndConditionContent />
            <Footer/>
            
        </>
    );
}



export default TermsAndConditions;
