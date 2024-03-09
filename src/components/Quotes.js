import React from 'react'
import Button from './Button';
import CardTestimonial from './CardTestimonial';
import { Testimonial_1, Testimonial_2, Testimonial_3 } from '../utils/Images';
import '../css/Quotes.scss';
import '../css/GlitchEffect2.scss';

const Quotes = () => {
    const button_info = {
        text: 'Saiba mais',
        price_text: '', 
        type: 'normal-button' 
    }
    return (
        <section className="quotes-section" id="quotes">
            <div className="quotes-section__left">
                <h4 className="display-2">Quem esta por trás da organização?</h4>
                
                <h1 className="display-1 glitch-overlay" data-content="EQUIPE ADMINISTRATIVA">
                    <span>Administrativo</span>
                </h1>
                <div className="text">
                    <p>
                        Esses são nossos representantes que fazem a organização BloodHunts Gaming conseguir estar presente em todo cenário do mundo dos games. 
                    </p>
                </div>
                <Button {...button_info}/>
            </div>
            <div className="quotes-section__right">
                <CardTestimonial testimonial={{
                    img_src: Testimonial_1,
                    img_name: 'evan img',
                    name: 'David Fernandes',
                    code_name: 'VANHELL',
                    content: 'CEO',
                    date: '2024'
                }}/>
                <CardTestimonial testimonial={{
                    img_src: Testimonial_2,
                    img_name: 'jada img',
                    name: 'Lucas',
                    code_name: 'LukeCoach',
                    content: 'Líder geral de lines',
                    date: '2024'
                }}/>
                <CardTestimonial testimonial={{
                    img_src: Testimonial_3,
                    img_name: 'aaron img',
                    name: 'Emili Karmaico',
                    code_name: 'Tata',
                    content: 'Lider de clã casual secundário',
                    date: '2024'
                }}/>
                
            </div>
        </section>
    )
}

export default Quotes
