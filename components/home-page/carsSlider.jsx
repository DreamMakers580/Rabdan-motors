import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import CarItem from "./carItem";
import { Slide } from '../swiper';

function CarsSlider({ Cars, settings }) {
    const SwiperComps = dynamic(() => import('../swiper'), {
        ssr: false,
    });
    settings = {
        pagination: { clickable: true, type: 'bullets' },
        spaceBetween: 5,
        breakpoints: {
            1200: {
                slidesPerView: 4,
           },
            992: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    };
    return (
        <SwiperComps settings={settings}>
            {Cars.map((car) => (
                <Slide key={car.slug}>
                    <CarItem car={car} />
                </Slide>
            ))}
        </SwiperComps>
    );
}

CarsSlider.propTypes = {
    Cars: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        breakpoints: PropTypes.shape({}),
    }),
};

export default CarsSlider;
