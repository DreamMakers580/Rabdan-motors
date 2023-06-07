import PropTypes from 'prop-types';
import CartItem from '../home-page/carItem';

function CarsGrid({ cars }) {
    return (
        <>
            {cars.map((car) => (
                <CartItem key={car.slug} car={car} />
            ))}
        </>
    );
}

CarsGrid.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default CarsGrid;
