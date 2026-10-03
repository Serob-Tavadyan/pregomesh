import React from 'react';
import {Link} from "react-router-dom";
import '../css/Footer.css';
function Footer(props) {
    return (
        <div>
            <div className={"sixteen_part"}>
                <div className={"sixpart_first"}>
                    <div className={"top_part_sixteen"}>
                        <div className="logo_div">
                            <li className="my-navbar_li">
                                <Link to="/" className="navbar-logo">
                                    <img className="logo" src='/logo.png' alt="WoodHouse Logo" />
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className={"middle_part_sixteen"}>
                        <span className={"private_producingw"}>Собственное производство домов из лафета камерной сушки. Тёплый контур с доставкой и монтажом.</span>
                    </div>
                    <div className={"bottom_part_sixteen"}>
                        <span className={"woodhouse_safe_rules"}>© 2026 WoodHouse. Все права защищены.</span>
                    </div>


                </div>
                <div className={"sixpart_second"}>
                    <div className={"sixpart_second_first"}>
                        <span className={"catalog_title_White"}>Каталог</span>
                        <div className={"navbar_sixteen"}>
                            <li>
                                <Link to="/Project" className="last_hrfs">
                                    Все проекты
                                </Link>
                            </li>
                            <li>
                                <Link to="/House" className="last_hrfs">
                                    Дома
                                </Link>
                            </li>
                            <li>
                                <Link to="/Bath" className="last_hrfs">
                                    Бани
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className={"sixpart_second_second"}>
                        <span className={"catalog_title_White"}>Компания</span>
                        <div className={"navbar_sixteen"}>
                            <li>
                                <Link to="/Production" className="last_hrfs">
                                    Производство
                                </Link>
                            </li>
                            <li>
                                <Link to="/escrow" className="last_hrfs">
                                    Эскроу
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="last_hrfs">
                                    Вопросы и ответы
                                </Link>
                            </li>
                            <li>
                                <Link to="/Contacts" className="last_hrfs">
                                    Контакты
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className={"sixpart_second_third"}>
                        <span className={"catalog_title_White"}>Контакты</span>
                        <div className={"navbar_sixteen"}>
                            <div className={"navbar_sixteen_part"}>
                                <i className="fa-solid fa-phone"></i>
                                <a className={"mailinfo"} href="tel:+78005509088">8 800 550-90-88</a>
                            </div>
                            <div className={"navbar_sixteen_part"}>
                                <i className="fa-regular fa-envelope"></i>
                                <a className={"mailinfo"} href="mailto:info@woodhouse.ltd">info@woodhouse.ltd</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Footer;