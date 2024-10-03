import React, { useEffect, useRef, useState } from 'react';
import '../css/SoftSkills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUsers, faLightbulb, faBrain, faGraduationCap, faRocket, faHandshake, faChartLine } from '@fortawesome/free-solid-svg-icons';

const SoftSkills = () => {
    const [fadeClass, setFadeClass] = useState('fade-in');
    const skillsRef = useRef([]);

    const observer = useRef(
        new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setFadeClass('fade-in');
                } else {
                    setFadeClass('fade-out');
                }
            });
        })
    );

    useEffect(() => {
        const currentObserver = observer.current;
        const skillElements = skillsRef.current;

        skillElements.forEach((el) => {
            if (el) {
                currentObserver.observe(el);
            }
        });

        return () => {
            skillElements.forEach((el) => {
                if (el) {
                    currentObserver.unobserve(el);
                }
            });
        };
    }, [skillsRef]);

    return (
        <>
            <h1 className='titulo-Softskills'>SoftSkills</h1>
            <div className="container-softskills">
                {[
                    { title: 'Comunicação Eficaz', icon: faComments },
                    { title: 'Trabalho em Equipe', icon: faUsers },
                    { title: 'Criatividade', icon: faLightbulb },
                    { title: 'Pensamento Crítico', icon: faBrain },
                    { title: 'Capacidade de Aprender', icon: faGraduationCap },
                    { title: 'Proatividade', icon: faRocket },
                    { title: 'Solução de Conflitos', icon: faHandshake },
                    { title: 'Pensamento Analítico', icon: faChartLine },
                ].map((skill, index) => (
                    <div 
                        key={index}
                        className={`card-softskills ${fadeClass}`}
                        ref={(el) => (skillsRef.current[index] = el)}
                    >
                        <FontAwesomeIcon icon={skill.icon} className="fa-icon" />
                        <span className='card-softskills-span'>{skill.title}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SoftSkills;
