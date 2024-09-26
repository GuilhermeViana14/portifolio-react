import React, { useState } from 'react';
import './css/curriculo.css';

const Curriculo = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);

    const handleOptionChange = (event) => {
        setIsAnimating(true); 
        setTimeout(() => {
            setSelectedOption(event.target.id);
            setIsAnimating(false); 
        }, 500);
    };

    const getInfo = () => {
        switch (selectedOption) {
            case 'html':
                return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu dignissim lectus. Fusce euismod mauris suscipit, consequat elit sed, consectetur ipsum. Mauris dapibus, nibh quis egestas elementum, arcu nisl tincidunt lorem, eu consequat sapien diam vel purus. Suspendisse leo ante, lacinia vitae nulla at, ultricies laoreet nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus lobortis est at ipsum luctus commodo. Duis ornare sapien et ex euismod, at lacinia magna ultricies. Cras tristique augue quis elit volutpat, quis maximus nisi posuere. Duis a condimentum leo. Vivamus eget orci ac eros pulvinar bibendum ut auctor est. Ut lobortis mauris dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui urna, varius in dui ac, consectetur sodales nisl. Pellentesque aliquam magna id mi faucibus mattis. Duis tellus massa, scelerisque vel lobortis ut, vehicula vitae elit.";
            case 'css':
                return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu dignissim lectus. Fusce euismod mauris suscipit, consequat elit sed, consectetur ipsum. Mauris dapibus, nibh quis egestas elementum, arcu nisl tincidunt lorem, eu consequat sapien diam vel purus. Suspendisse leo ante, lacinia vitae nulla at, ultricies laoreet nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus lobortis est at ipsum luctus commodo. Duis ornare sapien et ex euismod, at lacinia magna ultricies. Cras tristique augue quis elit volutpat, quis maximus nisi posuere. Duis a condimentum leo. Vivamus eget orci ac eros pulvinar bibendum ut auctor est. Ut lobortis mauris dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui urna, varius in dui ac, consectetur sodales nisl. Pellentesque aliquam magna id mi faucibus mattis. Duis tellus massa, scelerisque vel lobortis ut, vehicula vitae elit.";
            case 'javascript':
                return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu dignissim lectus. Fusce euismod mauris suscipit, consequat elit sed, consectetur ipsum. Mauris dapibus, nibh quis egestas elementum, arcu nisl tincidunt lorem, eu consequat sapien diam vel purus. Suspendisse leo ante, lacinia vitae nulla at, ultricies laoreet nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus lobortis est at ipsum luctus commodo. Duis ornare sapien et ex euismod, at lacinia magna ultricies. Cras tristique augue quis elit volutpat, quis maximus nisi posuere. Duis a condimentum leo. Vivamus eget orci ac eros pulvinar bibendum ut auctor est. Ut lobortis mauris dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui urna, varius in dui ac, consectetur sodales nisl. Pellentesque aliquam magna id mi faucibus mattis. Duis tellus massa, scelerisque vel lobortis ut, vehicula vitae elit.";
            default:
                return "Selecione uma linguagem para ver as informações.";
        }
    };

    return (
        <div className="container-curriculo">
            <legend className="title">Conhecimento em Programação</legend>
            
            <label htmlFor="html" className="option" onClick={handleOptionChange}>
                <div className="icon">  HTML</div>
                <input type="radio" name="status" className="input" id="html" />
            </label>
            
            <label htmlFor="css" className="option" onClick={handleOptionChange}>
                <div className="icon"> CSS</div>
                <input type="radio" name="status" className="input" id="css" />
            </label>
            
            <label htmlFor="javascript" className="option" onClick={handleOptionChange}>
                <div className="icon">  JavaScript</div>
                <input type="radio" name="status" className="input" id="javascript" />
            </label>
            
            <div className={`info-card ${isAnimating ? 'dynamic-out' : 'dynamic-in'}`}>
                {getInfo()}
            </div>
        </div>
    );
};

export default Curriculo;
