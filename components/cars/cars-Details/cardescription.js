import Link from 'next/link';
import PropTypes from 'prop-types';




function Cardescription({ title , value }) {
  
    
    
    return (
        
        
        <div>
            <h2 className="text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]">
                {title} : <span className='float-right md:pr-[35px] pr-[15px] description-span'>{value}</span>
            </h2>

          </div>
        
    );
}

//Cardescription.propTypes = {
//    title: PropTypes.instanceOf(Object).isRequired,
//};

export default Cardescription;
