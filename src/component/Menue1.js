import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Импортируем ТОЛЬКО Link
import '../css/Menue1.css';
import Choose from "./Chooseproect";
import { useModalStore } from '../useModalStore';
function Menue(props) {
    const [isScrolled, setIsScrolled] = useState(false);
    const setChoose = useModalStore((state) => state.setChoose);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="wd">
                {/* Заменили классы на уникальные для Menue1 */}
                <header className={`header-white ${isScrolled ? 'header-white_active' : ''}`}>

                    <div className="logo_div">
                        <li className="my-navbar_li">
                            <Link to="/" className="navbar-logo">
                                <img className="logo" src='/logo.png' alt="WoodHouse Logo" />
                            </Link>
                        </li>
                    </div>

                    <div className="navbar_div">
                        <nav className="my-navbar" >
                            <li className="my-navbar_li"><Link className={`my-navbar_a_white ${isScrolled ? 'my-navbar_a_active-white' : ''}`} to="/Project">Проекты</Link></li>
                            <li className="my-navbar_li"><Link className={`my-navbar_a_white ${isScrolled ? 'my-navbar_a_active-white' : ''}`} to="/Texnologia">Технология</Link></li>
                            <li className="my-navbar_li"><Link className={`my-navbar_a_white ${isScrolled ? 'my-navbar_a_active-white' : ''}`} to="/Producing">Производство</Link></li>
                            <li className="my-navbar_li"><Link className={`my-navbar_a_white ${isScrolled ? 'my-navbar_a_active-white' : ''}`} to="/Escrow">Эскроу</Link></li>
                            <li className="my-navbar_li"><Link className={`my-navbar_a_white ${isScrolled ? 'my-navbar_a_active-white' : ''}`} to="/Blog">Блог</Link></li>
                            <li className="my-navbar_li"><Link className={`my-navbar_a_white ${isScrolled ? 'my-navbar_a_active-white' : ''}`} to="/Faq">Вопросы</Link></li>
                            <li className="my-navbar_li"><Link className={`my-navbar_a_white ${isScrolled ? 'my-navbar_a_active-white' : ''}`} to="/Contacts">Контакты</Link></li>
                        </nav>
                    </div>

                    <div className="passport_div">
                        <li className="my-navbar_li">
                            <Link to="/Passport" >
                                {/* Заменили на уникальный класс user_active-white */}
                                <div className={`userwhite ${isScrolled ? 'user_active-white' : ''}`}>
                                    <i className="fa-regular fa-user"></i>
                                </div>
                            </Link>
                        </li>
                    </div>

                    <div className="number_div">
                        {/* Заменили на уникальный класс number_active-white */}
                        <a href="tel:88005509088" className={`numberwhite ${isScrolled ? 'number_active-white' : ''}`}>8 800 550-90-88</a>
                    </div>

                    <div className="chosse_proect_div">
                        <div className="chosse_proect_white" onClick={() => setChoose(true)}>Подобрать проект</div>
                    </div>

                </header>
            </div>
        </div>
    );
}

export default Menue;
