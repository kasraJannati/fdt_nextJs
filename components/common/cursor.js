import React, { useState, useEffect } from 'react';
import classNames from "classnames";

const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};
const Cursor = (cursorTarget) => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hovered, setHovered] = useState(false);
    var mobile = false;
    useEffect(() => {
        if(!mobile){
            handleLinkHoverEvents();
            addEventListeners();  
            return () => removeEventListeners();
        }
    }, []);
    if (typeof navigator !== 'undefined' && isMobile()){
        mobile = true;
        return null;
    } 
    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };
    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };
    const onMouseDown = () => {
        setClicked(true);
    };
    const onMouseUp = () => {
        setClicked(false);
    };
    const onMouseLeave = () => {
        setHidden(true);
    };
    const onMouseEnter = () => {
        setHidden(false);
    };
    const onMouseMove = (e) => {
        setPosition({x: e.clientX, y: e.clientY});
    };               
    const handleLinkHoverEvents = () => {
        document.querySelectorAll("a").forEach(el => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
        cursorTarget.cursorTarget.forEach(el => {
            document.querySelector(el).addEventListener("mouseover", () => setHovered(true));
            document.querySelector(el).addEventListener("mouseout", () => setHovered(false));
        });
    };
    const cursorClasses = classNames(
        'cursor',
        {
        'cursor--clicked': clicked,
            'cursor--hidden': hidden,
            'cursor--link-hovered': linkHovered,
            'cursor--hovered': hovered,
        }
    );   
    return <div className={cursorClasses}
    style={{
        left: `${position.x}px`,
        top: `${position.y}px`
    }}/>
}
export default Cursor;