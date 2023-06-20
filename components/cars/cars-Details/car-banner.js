import PropTypes from 'prop-types';
//import Image from 'next/image';

import {urlFor} from "../../../lib/client"

function CarBanner({ title, excerpt, image }) {
    return (
        <div className="project-banner relative">
            <div className="image relative w-full lg:h-[500px] h-[250px] before:absolute before:bg-black before:opacity-40 before:w-full before:h-full before:z-[1]">
                <img
                    className='object-cover w-full lg:h-[500px] h-[250px]'
                    src={urlFor(image && image[0])}
                    //alt={title}
                    //layout="fill"
                    //objectFit="cover"
                    quality={70}
                />
            </div>
            <div className="container">
                <div className="content absolute top-1/2 transform -translate-y-1/2 z-[1]">
                    <div className="inner-content relative z-[1]">
                        <span className="text-[18px] leading-[29px] text-white uppercase md:max-w-[225px] block mb-[30px]">
                            {excerpt}
                        </span>
                        <h2 className="md:text-[80px] lm:text-[45px] text-[36px] md:leading-[90px] text-white md:max-w-[770px]">
                            {title}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

CarBanner.propTypes = {
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default CarBanner;
