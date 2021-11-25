import React from 'react';

const Header = ({data}) => {
    return (
        <section className="header-project position-relative">
            <img src={data.left_image.filename} alt={data.left_image.alt}></img>
            <h1 className="text-center text-uppercase">{data.h1}</h1>
            <img src={data.right_image.filename} alt={data.right_image.filename}></img>
        </section>
    );
}
export default Header;


