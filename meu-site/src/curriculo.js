import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './curriculo.css';

const Curriculo = () => {
    const cards = [
        { id: 1, title: 'Card 1', content: 'Este é o conteúdo do Card 1. Aqui você pode colocar qualquer texto que desejar.' },
        { id: 2, title: 'Card 2', content: 'Texto personalizado para o Card 2. Adicione informações relevantes aqui.' },
        { id: 3, title: 'Card 3', content: 'Card 3 tem seu próprio texto. Personalize conforme necessário.' },
        { id: 4, title: 'Card 4', content: 'Aqui está o conteúdo do Card 4. Sinta-se à vontade para modificar.' },
    ];



    return (
    <div>
        <h1 className="titulo_curriculo">Linguagens -</h1>
        
        <div className="swiper-container">
            <Swiper 
                spaceBetween={20} 
                slidesPerView={3} 
                grabCursor={true} 
            >
                {cards.map(card => (
                    <SwiperSlide key={card.id}>
                        <div className="card">
                            <h3>{card.title}</h3>
                            <p>{card.content}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
    );
};

export default Curriculo;
