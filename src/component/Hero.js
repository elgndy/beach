import React from 'react';

const Banner = ({Hero ,children}) => {

    return(
        <div className={Hero}>
            {children}
        </div>
    )
}

export default Banner;
