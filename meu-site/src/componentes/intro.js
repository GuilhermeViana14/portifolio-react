import React, { useEffect, useRef } from 'react';
import '../css/intro.css'

const Intro = () => {
    const typingEffectRef = useRef(null);
    const indexRef = useRef(0); 
    const text = "Desenvolvedor Web";

    useEffect(() => {
        const typingElement = typingEffectRef.current; 
        let typingTimeout; 

        const type = () => {
        if (indexRef.current < text.length) {
            typingElement.textContent += text.charAt(indexRef.current); 
            indexRef.current++;
            typingTimeout = setTimeout(type, 200); 
        } else {
            typingTimeout = setTimeout(deleteText, 1000); 
        }
        };

        const deleteText = () => {
        if (indexRef.current > 0) {
            typingElement.textContent = text.slice(0, indexRef.current - 1); 
            indexRef.current--;
            typingTimeout = setTimeout(deleteText, 100); 
        } else {
            indexRef.current = 0; 
            typingTimeout = setTimeout(type, 500); 
        }
        };

        const handleStartTyping = () => {
        typingElement.textContent = ''; 
        type(); 
        };

        const animationDelay = setTimeout(handleStartTyping, 50); 

       
        return () => {
        clearTimeout(animationDelay);
        clearTimeout(typingTimeout);
        typingElement.textContent = '';
        };
    }, []);

    
    return (
    <>
        <div className="title-container">
            <div ref={typingEffectRef} className="typing-effect"></div>
        </div>
    </>
    );
};

export default Intro;
