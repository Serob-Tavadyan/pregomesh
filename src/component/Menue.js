import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Импортируем ТОЛЬКО Link
import '../css/Menue.css';
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
                {/* Шапка меняет класс на header_active при скролле */}
                <header className={`header ${isScrolled ? 'header_active' : ''}`}>

                    <div className="logo_div">
                        <li className="my-navbar_li">
                            <Link to="/" className="navbar-logo">
                                <img className="logo" src='/logo.png' alt="WoodHouse Logo" />
                            </Link>
                        </li>
                    </div>

                    <div className="navbar_div">
                        <nav className="my-navbar" >
                            <li className="my-navbar_li"><Link className={`my-navbar_a ${isScrolled ? 'my-navbar_a_active' : ''}`} to="/Project">Проекты</Link></li>
                            <li className="my-navbar_li"><Link className={`my-navbar_a ${isScrolled ? 'my-navbar_a_active' : ''}`} to="/Texnologia">Технология</Link></li>
                            <li className="my-navbar_li"><Link className={`my-navbar_a ${isScrolled ? 'my-navbar_a_active' : ''}`} to="/Producing">Производство</Link></li>
                            <li className="my-navbar_li"><Link className={`my-navbar_a ${isScrolled ? 'my-navbar_a_active' : ''}`} to="/Escrow">Эскроу</Link></li>
                            <li className="my-navbar_li"><Link className={`my-navbar_a ${isScrolled ? 'my-navbar_a_active' : ''}`} to="/Blog">Блог</Link></li>
                            <li className="my-navbar_li"><Link className={`my-navbar_a ${isScrolled ? 'my-navbar_a_active' : ''}`} to="/Faq">Вопросы</Link></li>
                            <li className="my-navbar_li"><Link className={`my-navbar_a ${isScrolled ? 'my-navbar_a_active' : ''}`} to="/Contacts">Контакты</Link></li>
                        </nav>
                    </div>

                    <div className="passport_div">
                        <li className="my-navbar_li">
                            <Link to="/Passport" >
                                {/* Иконка пользователя тоже меняет класс при скролле */}
                                <div className={`user ${isScrolled ? 'user_active' : ''}`}>
                                    <i className="fa-regular fa-user"></i>
                                </div>
                            </Link>
                        </li>
                    </div>

                    <div className="number_div">
                        {/* Телефон меняет цвет при скролле на number_active */}
                        <a href="tel:88005509088" className={`number ${isScrolled ? 'number_active' : ''}`}>8 800 550-90-88</a>
                    </div>

                    <div className="chosse_proect_div">
                        <div className="chosse_proect" onClick={() => setChoose(true)} >
                            Подобрать проект
                        </div>
                    </div>

                </header>
            </div>
        </div>
    );
}

export default Menue;
