import React from 'react';

const Header = ({data}) => {
    return (
        <section className="header position-relative">
            <div className="video">
                <iframe src="https://player.vimeo.com/video/524782434?muted=1&autoplay=1&controls=0&loop=1" 
                    frameBorder="0" 
                    webkitallowfullscreen="true"
                    mozallowfullscreen ="true"
                    allowFullScreen
                    title="cyber erth tech">
                </iframe>
            </div>
            <h1 className="text-uppercase">{data.h1}</h1>    
        </section>
    );
}
export default Header;


