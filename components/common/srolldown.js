import React, {useEffect} from 'react';

const Scrolldown = ({target}) => {
    useEffect(() => {
        const el = document.querySelector(target);
        window.addEventListener('scroll', function() {
            if(window.pageYOffset > el.getBoundingClientRect().y){
                let target = document.querySelector('.scroll-down-bar');
                if(target) target.style.animation = 'elasticus 1.2s cubic-bezier(1, 0, 0, 1)';
            }else{
                let target = document.querySelector('.scroll-down-bar');
                if(target) target.style.animation = 'elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite';
            }
        });
    },[]);
    return (
        <div className="mouseScroll position-relative d-lg-block d-none">
            <div className="scroll-down position-absolute">
                <div className="scroll-down-bar position-absolute"></div>
            </div>        
        </div>
    )
}
export default Scrolldown;