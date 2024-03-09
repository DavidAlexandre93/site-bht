import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Space } from 'antd';
import { FaDiscord, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import Button from './Button';
import '../css/ContentHero.scss';
import '../css/GlitchEffect2.scss';


const ContentHero = () => {
    const button_discord_server = {
        text: 'Server Discord',
        icon: FaDiscord, 
        type: 'price-button',
        url: 'https://example.com/recruit-competitive' 
    }
    const button_instagram = {
        text: 'Instagram',
        icon: FaInstagram, 
        type: 'price-button',
        url: 'https://example.com/recruit-competitive' 
    }
    const button_tiktok = {
        text: 'TikTok',
        icon: FaTiktok, 
        type: 'price-button',
        url: 'https://example.com/recruit-competitive' 
    }
    const button_group_whatsapp = {
        text: 'Comunidade WhatsApp',
        icon: FaWhatsapp, 
        type: 'price-button',
        url: 'https://example.com/recruit-competitive' 
    }
    const button_recruitment_casual = {
        text: 'Recrutamento player casual',
        icon: FaWhatsapp, 
        type: 'price-button',
        url: 'https://example.com/recruit-competitive' 
    }

    const button_recruitment_competitive = {
        text: 'Recrutamento player competitivo',
        icon: FaWhatsapp, 
        type: 'price-button',
        url: 'https://example.com/recruit-competitive' 
    }

    useEffect(() =>{
        Aos.init();
    }, []);

    return (
        <div 
            data-aos="fade-up"
        > 
            <div className="hero-content">
                <h1 className="hero-content__title-1 glitch-overlay" data-content="SURVIVE AT ALL COSTS">
                    <span>
                    BLOODHUNTS GAMING
                    </span>
                </h1>
                {/* <h1 className="hero-content__title-1">
                    SURVIVE AT ALL COSTS
                </h1> */}
                <h4 className="hero-content__title-2">Experience new social battle royale game</h4>
                <Space>
                <Button {...button_discord_server}/>
                <Button {...button_instagram}/>
                <Button {...button_tiktok}/>
                </Space>
                <Space>
                <Button {...button_group_whatsapp}/>
                <Button {...button_recruitment_casual}/>
                <Button {...button_recruitment_competitive}/>
                </Space>
            </div>
        </div>
    )
}

export default ContentHero;
