import Head from 'next/head';
import PropTypes from 'prop-types';
import NavbarTwo from '@/components/navbarTwo.jsx';
import Navbar from '@/components/navbar';

import Footer from '@/components/layout/footer';

import DisclaimersContent from '@/components/privacy/disclaimers';

function Disclaimers() {
    return (
        <>
            <Head>
                <title>Disclaimers</title>
                
            </Head>
            <NavbarTwo />
            <DisclaimersContent />
            <Footer/>
            
        </>
    );
}



export default Disclaimers;
