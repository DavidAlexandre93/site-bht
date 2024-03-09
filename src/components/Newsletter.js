import React, {useState} from 'react'
import { Newsletter } from '../utils/Images';
import Button from './Button';
import '../css/Newsltetter.scss';
import '../css/GlitchEffect2.scss';

const NewsletterSection = () => {
    const [inputValue, setInputValue] = useState('bloodhuntsgaming@outlook.com');
    
    function handleChange(e){
        setInputValue(e.target.value)
    }

    const button_info = {
        text: 'Subscribe now',
        price_text: '', 
        type: 'normal-button' 
    }
    return (
        <section className="newsletter-section">
            
            <div className="newsletter-section__left">
                <img src={Newsletter} alt=""/>
            </div>
            <div className="newsletter-section__right">
                <h4 className="display-2">RECEBA INFORMAÇÕES</h4>
                <h1 className="display-1 glitch-overlay" data-content="NEWSLETTER SUBSCRIBE">
                    <span>NEWSLETTER SUBSCRIBE</span>
                </h1>

                <p>
                    Informe seu email para receber informações sobre nossa organização e noticias. 
                </p>

                <div className="input-group">
                    <div className="input-email">
                        <input type="email" onChange={handleChange} value={inputValue} id="email" placeholder="Your email address"/>
                        <label htmlFor="email">Seu email</label>
                    </div>
                    <Button {...button_info}/>
                </div>
            </div>
        </section>
    )
}

export default NewsletterSection
