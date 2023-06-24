import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';
function AboutInAbout() {
    const subTitle = `text-[18px] leading-[32px] text-secondary uppercase`;
    const title = `lm:text-[42px] lm:leading-[50px] text-[32px] text-black mb-[35px] lg:max-w-[460px]`;
    const desc = `text-[14px] leading-[25px] text-secondary mb-[80px] lg:max-w-[490px]`;
    const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`;
    
    return (
        <div  className="about-area md:pt-[150px] pt-[50px]">
            <div className="container max-lg:max-w-full fixed-lg:pr-0">
                <div className="lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse">
                    <div className="about-content max-md:pt-10">
                        <span className={subTitle}>About</span>
                        <h2 className={title}>
                            Over 12 years leading and deeps in Cars
                             industrial
                        </h2>
                        <h3 className="text-secondary text-2xl mb-12">
                        Drive in luxury,  <br /> every day
                        </h3>
                        <p className={desc}>
                        Our selection of luxury cars is carefully curated to offer the best of the 
                        best, with top-of-the-line features and exceptional performance. 
                        Whether you're looking for a sleek and sporty coupe, a spacious and 
                        comfortable SUV, or a powerful and sophisticated sedan, we have the perfect 
                        vehicle for you. <br/> At our luxury car shop, we believe that your 
                        satisfaction is our priority, which is why we offer a range of services 
                        to ensure that you have the best possible car-buying experience. 
                        From expert advice and guidance to customized financing 
                        solutions and exceptional customer service, 
                        we are committed to providing you with the best possible service and support 
                        every step of the way. 
                        </p>
                       
                        <div className="button-wrap pt-[20px]">
                            <Link href="/cars">
                                <a className="inline-flex items-center text-[14px] leading-[30px] p-[11px_32px] transition duration-[0.4s] border border-[#969696] uppercase hover:border-black hover:bg-transparent hover:text-black bg-black text-white">
                                    View Our Cars
                                    <div className="ml-[5px]">
                                        <AiOutlineRight />
                                    </div>
                                </a>
                            </Link>
                        </div>
                        
                        
                    </div>
                    <div className={aboutImage}>
                        <Image
                            src="/images/about/1.jpg"
                            alt="Service Image"
                            width={390}
                            height={760}
                            quality={70}
                            layout="fixed"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutInAbout;
