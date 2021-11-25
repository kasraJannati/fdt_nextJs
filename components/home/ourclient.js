import React from 'react';

const Ourclient = ({data}) => {
    let title = "Our Clients";
    return (
        <section className="ourclient py-5 position-relative">
            <div className="container py-5 position-relative">
                <div className="row py-5">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center pb-lg-0 pb-5">
                        <section>
                            <h2>{title}</h2>
                            <h3 className="pt-3 pleasureToWork text-left">Pleasure to <br/>work with</h3>
                        </section>               
                    </div>
                    <div className="col-lg-6">
                        <section className="clientslogo" >
                            {data.map((image,i) => (
                                <img src={image.filename} alt={image.alt} key={image.id} />
                            ))}
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Ourclient;


