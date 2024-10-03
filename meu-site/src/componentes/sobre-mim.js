import React, { useEffect, useRef, useState } from 'react';
import '../css/sobre-mim.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGamepad, faCode } from '@fortawesome/free-solid-svg-icons';

const Sobremim = () => {
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

    useEffect(() => {
        const handleScroll = () => {
            const icons = document.querySelectorAll('.imagem-card-sobremim');
            icons.forEach(icon => {
                const scrollPosition = window.scrollY;
                const offset = scrollPosition * 0.2; // Ajuste a intensidade do movimento
                icon.style.transform = `translateY(${offset}px)`; // Aplica o movimento baseado na rolagem
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <h1 className='titulo-sobremim'>Conheça mais Sobre mim</h1>
            <div className="container-sobremim"> 
                {[ 
                    {
                        title: 'Quem sou eu ?',
                        content: "Meu nome é Guilherme Viana e minha paixão por tecnologia começou cedo, especialmente com jogos, que despertaram meu interesse em seguir uma carreira na área de TI. Foi esse fascínio que me levou a escolher o curso de Ciência da Computação, onde posso aprofundar meus conhecimentos e trabalhar com aquilo que mais me motiva.",
                        imgSrc: "avatar.png",
                        icon: faUser
                    },
                    {
                        title: 'Interesses',
                        content: "Tenho um forte interesse em desenvolvimento web e estou constantemente em busca de novas tecnologias para expandir minhas habilidades. Além disso, como hobby, sou apaixonado por jogos, sem me limitar a um único gênero; na verdade, gosto de explorar a maioria deles, o que enriquece minha criatividade e perspectiva.",
                        imgSrc: "pc-interesse.png",
                        icon: faGamepad
                    },
                    {
                        title: 'Objetivos !',
                        content: "Meu objetivo de vida é me tornar um desenvolvedor full stack, criando soluções inovadoras que melhorem a experiência do usuário na web e em jogos. Estou comprometido em aprimorar minhas habilidades e acompanhar as tendências do mercado, unindo a tecnologia e entretenimento para desenvolver experiências imersivas e memoráveis.",
                        imgSrc: "objetivos.png",
                        icon: faCode
                    }
                ].map((item, index) => (
                    <div 
                        key={index}
                        className={`card-sobremim ${fadeClass}`}
                        ref={(el) => (skillsRef.current[index] = el)}
                    >
                        <span className='card-sobremim-span'>{item.title}</span>
                        <p className="info">{item.content}</p>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={item.icon} className="card-icon" />
                        </div>
                    </div>
                ))}
            </div>   
        </>
    );
};

export default Sobremim;
