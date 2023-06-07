import Link from 'next/link';
import * as AiIcons from 'react-icons/ai';
import Image from 'next/image';

function Footer() {
    const currentYear = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
    });
    return (
        <footer className="footer-area lg:mx-20 mx-4 md:pt-[120px] pt-[60px]">
            <div className="footer-top">
                <div className="custom-container">
                    <div className="lm:grid xl:grid-cols-5 lm:grid-cols-12 xl:gap-x-[30px] gap-[30px]">
                        <div className="max-lg:col-span-12">
                            <div className="footer-logo">
                                <Image
                                    src="/images/logo/footer-logo.png"
                                    alt="Logo"
                                    width={70}
                                    height={70}
                                />
                            </div>
                        </div>
                        <div className="fixed-lg:col-span-3 fixed-md:col-span-4 fixed-lm:col-span-6 max-sm:pt-[35px]">
                            <div className="footer-widget-item">
                                <h2 className="title">Contact</h2>
                                <ul className="contact-info mt-[25px]">
                                    <li>
                                        17 Princess Road, London, Greater
                                        London, NW18JR, Uk
                                    </li>
                                    <li>
                                        <Link href="mailto:hello@Rusticstudio.co">
                                            <a className="hover:text-black transition-all">
                                                hello@Rabdanmotors.ae
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="tel:+0084-912-3548-073">
                                            <a className="hover:text-black transition-all">
                                                (+971) 50-803-0173
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="fixed-lg:col-span-3 fixed-md:col-span-3 fixed-lm:col-span-6 max-sm:pt-[30px]">
                            <div className="footer-widget-item">
                                <h2 className="title">Quick Links</h2>
                                <ul className="footer-list mt-[25px]">
                                    <li>
                                        <Link href="/contact">Works</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Affiliate</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Shop</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">Partners</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">Reviews</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="fixed-lg:col-span-3 fixed-md:col-span-2 fixed-lm:col-span-6 max-sm:pt-[30px]">
                            <div className="footer-widget-item">
                                <h2 className="title">Studio</h2>
                                <ul className="footer-list mt-[25px]">
                                    <li>
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link href="/cars">Cars</Link>
                                    </li>
        
                                </ul>
                            </div>
                        </div>
                        <div className="fixed-lg:col-span-3 fixed-md:col-span-3 fixed-lm:col-span-6 max-sm:pt-[30px]">
                            <div className="footer-widget-item">
                                <h2 className="title">Help Center</h2>
                                <ul className="footer-list mt-[25px]">
                                    <li>
                                        <Link href="/about">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Help</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">Services</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="custom-container">
                    <div className="inner-container border-[#dfdfdf] border-t md:mt-[95px] mt-[50px] py-9">
                        <div className="md:grid md:grid-cols-12 flex flex-col">
                            <div className="md:col-span-4 max-lm:order-last max-lm:pt-[10px]">
                                <div className="copyright flex-wrap md:justify-start justify-center md:mb-0 mb-[10px]">
                                    © {currentYear}
                                    <span className="mx-1"></span>
                                    Made by
                                   
                                    <Link href="">
                                        <a target="_blank">
                                            <span className='ml-2' > Dream makers</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="md:col-span-6">
                                <ul className="footer-social-link md:mb-0 mb-[10px]">
                                    <li>
                                        <Link href="https://twitter.com/">
                                            <a>Twitter</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://facebook.com/">
                                            <a>Facebook</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://instagram.com/">
                                            <a>Instagram</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://tumblr.com/">
                                            <a>Tumblr</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://pinterest.com/">
                                            <a>Pinterest</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:col-span-2">
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
