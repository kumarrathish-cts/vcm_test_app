import React from 'react';


import { GLoadingSpinner,GErrorBoundaries } from '../commonComponents';

const GLoadingSpinnerHOC = Comp =>({isLoading,children,...props})=>{
    if(isLoading){
        return (<GLoadingSpinner />);
    } else
    return (
        <GErrorBoundaries>
            <Comp {...props}>
                {children}
            </Comp>
        </GErrorBoundaries>
    );
};

export default GLoadingSpinnerHOC;