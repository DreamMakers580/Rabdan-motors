import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import * as MdIcons from 'react-icons/md';
import { AiOutlineRight } from 'react-icons/ai';

function AboutServices({ services }) {

    const subTitle = `text-[18px] leading-[32px] text-secondary uppercase`;
    const title = `lm:text-[42px] lm:leading-[50px] text-[32px] text-black mb-[35px] lg:max-w-[460px]`;
    const desc = `text-[14px] leading-[25px] text-secondary mb-[80px] lg:max-w-[490px]`;
    const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`;
    
    return (
        <div className="service-area md:mb-10 md:pt-160 pt-[60px] relative before:bg-pattern-1 before:absolute before:h-[336px] before:w-[336px] before:top-[170px] before:left-[-168px]">
            <div className="container max-w-full lg:pl-[70px] lg:pr-0">
                <div className="lg:grid lg:grid-cols-12 flex flex-col-reverse">
                    <div className="lg:col-span-6 xl:mr-[140px] lg:mr-[40px] max-md:pt-[50px]">
                        <div className="service-content xl:w-[490px] w-full ml-auto">
                        <div className="about-content max-md:pt-10">
                        <span className={subTitle}>About</span>
                        <h2 className={title}>
                            Our Story
                        </h2>
                        {//<h3 className="text-secondary text-2xl mb-12">
                          //  We know that good design means <br /> good business
                        //</h3>
                        }
                        <p className={desc}>
                        Over the years, our luxury car shop has grown and evolved, 
                        but one thing has remained constant: our dedication to providing our 
                        customers with the best possible car-buying experience. 
                        We understand that buying a luxury car is not just a purchase, 
                        it's an investment in your lifestyle. That's why we work tirelessly 
                        to help you find the perfect vehicle to meet your unique needs and 
                        preferences.<br/>At our luxury car shop, we believe that your satisfaction 
                        is our priority, which is why we offer a range of services to ensure that 
                        you have the best possible car-buying experience. From expert advice and 
                        guidance to customized financing solutions and exceptional customer service, 
                        we are committed to providing you with the best possible service and support 
                        every step of the way.
                        </p>

                        <div className="button-wrap pt-[20px]">
                            <Link href="/contact">
                                <a className="inline-flex items-center text-[14px] leading-[30px] p-[11px_32px] transition duration-[0.4s] border border-[#969696] uppercase hover:border-black hover:bg-black hover:text-white">
                                    Map Direction
                                    <div className="ml-[5px]">
                                        <AiOutlineRight />
                                    </div>
                                </a>
                            </Link>
                        </div>
                        
                    </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6">
                        <div className="service-image flex justify-end w-full lg:h-full h-[679px] relative">
                            <Image
                                src="/images/service/1.jpg"
                                alt="Service Image"
                                quality={70}
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

AboutServices.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
};

export default AboutServices;

