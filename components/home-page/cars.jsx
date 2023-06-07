import PropTypes from 'prop-types';
import Link from 'next/link';
import CarsSlider from './carsSlider';

function Cars({ Cars }) {
    return (
        <div className="project-area md:pt-160 pt-[60px]">
            <div className="container">
                <div className="project-wrap flex justify-between items-center max-sm:flex-col mb-[60px]">
                    <h2 className="lm:text-[42px] lm:leading-[50px] text-[32px] max-sm:mb-[15px]">
                        Latest Cars
                    </h2>
                    <Link href="/cars">
                        <a className="text-[18px] text-secondary uppercase leading-[24px]">
                            All Cars
                        </a>
                    </Link>
                </div>
            </div>
            <CarsSlider Cars={Cars} />
        </div>
    );
}

Cars.propTypes = {
    Cars: PropTypes.instanceOf(Object).isRequired,
};

export default Cars;
