import React from 'react';
import Scrolldown from '../common/srolldown';

const DescriptionPr = ({title,description}) => {
    let scrollTarget = '.descriptionPr';
    return (
        <section className="descriptionPr py-5 position-relative">
            <Scrolldown target={scrollTarget}/>
            <div className="container">
                <h2 className="pt-5 mt-5 text-capitalize">{title}</h2>
                <p className="w-75 text-center pt-3 m-auto pb-md-5 ">
                    {description}
                </p>    
            </div>
        </section>
    );
}
export default DescriptionPr;


