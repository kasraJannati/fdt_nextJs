import React from 'react';
import poly1 from '/public/img/poly1.png';
import poly2 from '/public/img/poly2.png';
import poly3 from '/public/img/poly3.png';

const Step = ({steps}) => {
    let step = steps[0];
    console.log(step,'step');
    let svgNumber;
    let id;
    if(step.number == 1){
        id = 1;
        svgNumber  = `
                        <svg width="602" height="504" viewBox="0 0 602 504" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M214 384.711C196.161 384.711 180.211 381.651 166.148 375.531C152.216 369.411 140.367 360.232 130.602 347.992C110.419 322.732 100.328 285.818 100.328 237.25C100.328 194.021 110.484 160.557 130.797 136.859C151.109 113.031 179.951 101.117 217.32 101.117C253.258 101.117 280.992 113.161 300.523 137.25C319.664 161.078 329.234 195.323 329.234 239.984C329.234 287.12 318.948 323.253 298.375 348.383C278.323 372.602 250.198 384.711 214 384.711ZM215.367 371.234C261.591 371.234 291.93 347.536 306.383 300.141C311.461 283.604 314 263.747 314 240.57C314 217.393 311.591 197.797 306.773 181.781C301.956 165.766 295.25 152.745 286.656 142.719C270.12 123.448 246.878 113.812 216.93 113.812H214.781V371.234H215.367ZM401.695 144.281L389 147.992C380.927 150.336 374.872 152.549 370.836 154.633C363.674 158.539 358.401 160.427 355.016 160.297C349.417 160.167 346.812 157.758 347.203 153.07C347.464 148.253 351.826 144.867 360.289 142.914C365.107 141.612 369.924 140.245 374.742 138.812L501.5 100.727V381H401.5L401.695 144.281Z" fill="#F1F2EE"/>
                            </g>
                            <defs>
                                <filter id="filter0_di" x="0.328125" y="0.726562" width="601.172" height="483.984" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="50"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.945098 0 0 0 0 0.94902 0 0 0 0 0.933333 0 0 0 0.2 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dx="2" dy="2"/>
                                    <feGaussianBlur stdDeviation="5"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                                    
                                </filter>
                            </defs>
                        </svg>
                    `
    }else if (step.number == 2) {
        id = 2;
        svgNumber = `  
                        <svg width="664" height="503" viewBox="0 0 664 503" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M213.828 383.711C195.99 383.711 180.039 380.651 165.977 374.531C152.044 368.411 140.195 359.232 130.43 346.992C110.247 321.732 100.156 284.818 100.156 236.25C100.156 193.021 110.312 159.557 130.625 135.859C150.938 112.031 179.779 100.117 217.148 100.117C253.086 100.117 280.82 112.161 300.352 136.25C319.492 160.078 329.062 194.323 329.062 238.984C329.062 286.12 318.776 322.253 298.203 347.383C278.151 371.602 250.026 383.711 213.828 383.711ZM215.195 370.234C261.419 370.234 291.758 346.536 306.211 299.141C311.289 282.604 313.828 262.747 313.828 239.57C313.828 216.393 311.419 196.797 306.602 180.781C301.784 164.766 295.078 151.745 286.484 141.719C269.948 122.448 246.706 112.812 216.758 112.812H214.609V370.234H215.195ZM563.242 370.234C563.242 376.745 556.667 380 543.516 380H353.672C356.927 353.958 377.24 314.57 414.609 261.836C457.708 202.982 480.82 170.885 483.945 165.547C487.201 160.208 489.349 156.302 490.391 153.828C492.214 149.922 493.125 145.951 493.125 141.914C493.125 137.878 492.214 134.102 490.391 130.586C488.698 126.94 486.094 123.88 482.578 121.406C474.896 115.938 463.958 113.203 449.766 113.203C436.354 113.203 424.766 115.286 415 119.453C398.464 126.615 387.852 134.102 383.164 141.914C379.648 147.383 375.612 150.117 371.055 150.117C366.497 150.117 364.219 147.318 364.219 141.719C364.219 134.818 370.469 127.266 382.969 119.062C402.76 106.432 426.263 100.117 453.477 100.117C486.68 100.117 513.307 107.214 533.359 121.406C552.5 134.948 562.07 152.266 562.07 173.359C562.07 185.469 560.378 195.56 556.992 203.633C553.737 211.576 550.547 218.411 547.422 224.141C544.297 229.87 540.521 236.25 536.094 243.281L498.594 299.336C480.625 325.768 468.06 347.969 460.898 365.938H518.125C525.417 365.938 532.188 365.352 538.438 364.18C546.12 362.747 551.393 362.031 554.258 362.031C557.253 362.031 559.466 362.943 560.898 364.766C562.461 366.458 563.242 368.281 563.242 370.234Z" fill="#F1F2EE"/>
                            </g>
                            <defs>
                                <filter id="filter0_di" x="0.15625" y="0.117188" width="663.086" height="483.594" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="50"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.945098 0 0 0 0 0.94902 0 0 0 0 0.933333 0 0 0 0.2 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dx="2" dy="2"/>
                                    <feGaussianBlur stdDeviation="5"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                                </filter>
                            </defs>
                        </svg>
                    `
    }else if (step.number == 3) {
        id = 3;
        svgNumber = `  
                        <svg width="674" height="503" viewBox="0 0 674 503" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M214.062 383.711C196.224 383.711 180.273 380.651 166.211 374.531C152.279 368.411 140.43 359.232 130.664 346.992C110.482 321.732 100.391 284.818 100.391 236.25C100.391 193.021 110.547 159.557 130.859 135.859C151.172 112.031 180.013 100.117 217.383 100.117C253.32 100.117 281.055 112.161 300.586 136.25C319.727 160.078 329.297 194.323 329.297 238.984C329.297 286.12 319.01 322.253 298.438 347.383C278.385 371.602 250.26 383.711 214.062 383.711ZM215.43 370.234C261.654 370.234 291.992 346.536 306.445 299.141C311.523 282.604 314.062 262.747 314.062 239.57C314.062 216.393 311.654 196.797 306.836 180.781C302.018 164.766 295.312 151.745 286.719 141.719C270.182 122.448 246.94 112.812 216.992 112.812H214.844V370.234H215.43ZM456.836 219.062C459.961 219.062 462.956 218.932 465.82 218.672V114.766L461.523 114.375C460.091 114.245 458.724 114.18 457.422 114.18C456.12 114.18 453.32 114.18 449.023 114.18C444.857 114.18 439.648 114.635 433.398 115.547C427.148 116.328 421.484 117.5 416.406 119.062C406.25 121.927 399.089 125.768 394.922 130.586C391.016 135.143 387.305 137.552 383.789 137.812C376.758 138.333 373.112 136.055 372.852 130.977C372.331 123.164 383.268 115.417 405.664 107.734C421.419 102.656 438.867 100.117 458.008 100.117C477.279 100.117 493.359 101.81 506.25 105.195C519.271 108.581 530.013 113.203 538.477 119.062C555.273 130.521 563.672 146.146 563.672 165.938C563.672 185.339 553.841 201.615 534.18 214.766C527.409 219.323 519.466 223.099 510.352 226.094C540.299 235.729 559.961 252.331 569.336 275.898C572.331 283.711 573.828 292.891 573.828 303.438C573.828 313.984 571.094 324.336 565.625 334.492C560.286 344.648 552.539 353.372 542.383 360.664C521.029 376.029 491.927 383.711 455.078 383.711C423.438 383.711 396.094 374.922 373.047 357.344C364.974 351.224 359.57 344.583 356.836 337.422C356.055 335.339 355.729 333.516 355.859 331.953C356.25 326.484 358.724 323.945 363.281 324.336C367.969 324.987 371.615 327.917 374.219 333.125C376.823 338.203 380.404 342.826 384.961 346.992C389.518 351.029 394.987 354.74 401.367 358.125C415.56 365.547 431.055 369.258 447.852 369.258H465.82V234.297C461.133 233.776 456.836 233.516 452.93 233.516H445.508L425.195 234.688C416.211 234.688 411.719 232.148 411.719 227.07C411.719 220.82 416.016 217.695 424.609 217.695L456.836 219.062ZM489.062 119.453C486.328 118.542 483.333 117.76 480.078 117.109L489.062 119.453Z" fill="#F1F2EE"/>
                            </g>
                            <defs>
                                <filter id="filter0_di" x="0.390625" y="0.117188" width="673.438" height="483.594" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="50"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.945098 0 0 0 0 0.94902 0 0 0 0 0.933333 0 0 0 0.2 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dx="2" dy="2"/>
                                    <feGaussianBlur stdDeviation="5"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                                </filter>
                            </defs>
                        </svg>
                    `
    }else if (step.number == 4) {
        id = 4;
        svgNumber = `  
                        <svg width="718" height="503" viewBox="0 0 718 503" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M213.906 383.711C196.068 383.711 180.117 380.651 166.055 374.531C152.122 368.411 140.273 359.232 130.508 346.992C110.326 321.732 100.234 284.818 100.234 236.25C100.234 193.021 110.391 159.557 130.703 135.859C151.016 112.031 179.857 100.117 217.227 100.117C253.164 100.117 280.898 112.161 300.43 136.25C319.57 160.078 329.141 194.323 329.141 238.984C329.141 286.12 318.854 322.253 298.281 347.383C278.229 371.602 250.104 383.711 213.906 383.711ZM215.273 370.234C261.497 370.234 291.836 346.536 306.289 299.141C311.367 282.604 313.906 262.747 313.906 239.57C313.906 216.393 311.497 196.797 306.68 180.781C301.862 164.766 295.156 151.745 286.562 141.719C270.026 122.448 246.784 112.812 216.836 112.812H214.688V370.234H215.273ZM377.188 325.508L368.984 325.703H366.445C363.19 325.703 360.13 324.727 357.266 322.773C354.401 320.82 352.969 318.216 352.969 314.961C352.969 311.576 353.229 308.906 353.75 306.953C354.401 304.87 355.378 302.721 356.68 300.508C357.982 298.294 359.609 295.755 361.562 292.891L490.078 103.828H570.742V310.859C586.758 310.859 596.198 310.469 599.062 309.688C603.49 308.646 606.81 308.125 609.023 308.125C611.367 308.125 613.32 308.841 614.883 310.273C616.445 311.706 617.227 313.594 617.227 315.938C617.227 321.146 613.255 324.01 605.312 324.531C600.365 325.182 593.398 325.508 584.414 325.508H570.742V380H470.742V325.508C439.622 325.508 408.438 325.508 377.188 325.508ZM470.742 310.859V159.688L373.867 304.609C372.174 307.214 371.719 308.906 372.5 309.688C373.411 310.469 375.951 310.859 380.117 310.859H470.742Z" fill="#F1F2EE"/>
                            </g>
                            <defs>
                                <filter id="filter0_di" x="0.234375" y="0.117188" width="716.992" height="483.594" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="50"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.945098 0 0 0 0 0.94902 0 0 0 0 0.933333 0 0 0 0.2 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dx="2" dy="2"/>
                                    <feGaussianBlur stdDeviation="5"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                                </filter>
                            </defs>
                        </svg>        
                    `
    }else{
        svgNumber = ``
    }
    const Svglinedown = () =>  
            <svg width="710" height="201" viewBox="0 0 710 201" fill="none" xmlns="http://www.w3.org/2000/svg" className="Svglinedown position-absolute">
                <g filter="url(#filter0_f)">
                    <path d="M689 180L530 21H20" stroke="#44C2AB" strokeWidth="2"/>
                </g>
                <path d="M692.5 183.5L530 21H20" stroke="#44C2AB"/>
                <defs>
                    <filter id="filter0_f" x="0" y="0" width="709.707" height="200.707" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur"/>
                    </filter>
                </defs>
            </svg>;
    const Svglineup = () =>  
            <div className="SvglineupBox">
                <svg width="711" height="202" viewBox="0 0 711 202" fill="none" xmlns="http://www.w3.org/2000/svg" className="Svglineup position-absolute">
                    <g filter="url(#filter0_f)">
                        <path d="M21.5 21.5002L180.5 180.5L690.5 180.5" stroke="#44C2AB" strokeWidth="2"/>
                    </g>
                    <path d="M18 18.0002L180.5 180.5L690.5 180.5" stroke="#44C2AB"/>
                    <defs>
                        <filter id="filter0_f" x="0.792847" y="0.792847" width="709.707" height="200.707" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur"/>
                        </filter>
                    </defs>
                </svg>
            </div>

    return (
        <section className="step py-md-5 position-relative" value={step.number}>
            {step.number == 1 ?  <img  src={poly1.src} alt='Future Deep tech' className="poly poly1 d-none d-lg-block" /> :  ''}
            {step.number == 2 ?  <img  src={poly2.src} alt='future deep technology' className="poly poly2" /> :  ''}
            {step.number == 4 ?  <img  src={poly3.src} alt='fdt' className="poly poly3" /> :  ''}
            <div className="container">
                <div className="row">
                    <div className={`col-md-6 order-1 position-relative ${step.number % 2  == 0 ? "order-md-1" : "order-md-0"}` }>
                        <h3 className={`text-capitalize fw-bold pb-md-4 ${step.number % 2  == 0 ? "text-md-end" : "text-md-start"}` }>{step.name}</h3>
                        {step.number % 2  == 0 ? <Svglineup></Svglineup> : <Svglinedown></Svglinedown>}
                        <p className={`${step.number % 2  == 0 ? "text-md-end" : "text-md-start"}` }>{step.description}</p>
                    </div>
                    <div className={`col-md-6 svgNum ${step.number % 2  == 0 ? "marginstepeven" : "marginstepodd"}` }>
                        <div dangerouslySetInnerHTML={{__html: svgNumber}} className=""></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Step;