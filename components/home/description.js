import React from 'react';
import Scrolldown from '../common/srolldown';

const Description = ({data}) => {
    let scrollTarget = '.description';
    return (
        <section className="description py-5 position-relative">
            <Scrolldown target={scrollTarget}/> 
            <div className="container">
                <h2 className="pt-5 mt-5">{data.title}</h2>
                <p className="w-75 text-center pt-3 m-auto pb-md-5">
                    {data.description}
                </p>    
            </div>
        </section>
    );
}
export default Description;


