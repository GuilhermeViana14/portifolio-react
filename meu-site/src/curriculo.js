import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './curriculo.css';

const Curriculo = () => {
    const curriculo = [
        { id: 1, title: 'Card 1', content: 'Conteúdo do Card 1' },
        { id: 2, title: 'Card 2', content: 'Conteúdo do Card 2' },
        { id: 3, title: 'Card 3', content: 'Conteúdo do Card 3' },
        { id: 4, title: 'Card 4', content: 'Conteúdo do Card 4' },
    ];

    return (
        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true}>
            {curriculo.map(card => (
                <SwiperSlide key={card.id}>
                    <div className="card">
                        <h3>{card.title}</h3> {/* Corrigido */}
                        <p>{card.content}</p> {/* Corrigido */}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Curriculo;
