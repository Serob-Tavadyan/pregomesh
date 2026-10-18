import {PatternFormat} from "react-number-format";
import {Link} from "react-router-dom";
import '../css/LetApply.css';
import React, { useState } from 'react';
import Choose from "./Chooseproect";
import { useModalStore } from '../useModalStore';

function Letapply(props) {
    const [question, setQuestion] = React.useState(false);
    const [agree, setAgree] = React.useState(false);
    const [phone, setPhone] = React.useState('');
    return (
        <div>
            <Choose/>
            <div className={"fiveteen_part"}>
                <div className={"fiveteen_partinner"}>
                    <div className={"fiveteen_partinner1"}>
                        <span className={"fiveteen_partinner1_text"}>
                              Подберём проект и рассчитаем тёплый контур
                        </span>
                    </div>

                    <div className={"fiveteen_partinner2"}>
                        <span className={"fiveteen_partinner2_text"}>
                              Оставьте контакты — пришлём подборку проектов и предварительный расчёт.
                        </span>
                    </div>

                    <div className={"fiveteen_partinner3"}>
                        <div className={"fiveteen_partinner31"}>
                            <i className="fa-regular fa-clock fiveteenicon"></i>
                            <span className={"fiveteen_text"}>
                                Расчёт за 24 часа
                            </span>
                        </div>
                        <div className={"fiveteen_partinner31"}>
                            <i className="fa-solid fa-check fiveteenicon"></i>
                            <span className={"fiveteen_text"}>
                               Без обязательств
                            </span>
                        </div>
                        <div className={"fiveteen_partinner31"}>
                            <i className="fa-solid fa-shield fiveteenicon"></i>
                            <span className={"fiveteen_text"}>
                                100+ проектов
                            </span>
                        </div>
                    </div>
                    <form className={"form"} action="">
                        <div className={"fiveteen_inp_div"}>
                            <span className={"inp_text"}>Ваше имя</span>
                            <input className={"fiveteen_inp"} placeholder={"Как к вам обращаться?"} autoComplete="name"   name="" id=""/>
                        </div>
                        <div className={"fiveteen_inp_div"}>
                            <span className={"inp_text"}>Телефон / мессенджер *</span>
                            <PatternFormat
                                format="+7 (###) ###-##-##"
                                allowEmptyFormatting
                                mask="_"
                                value={phone}
                                onValueChange={(values) => setPhone(values.value)}
                                type="tel"
                                autoComplete="tel"
                                className={"fiveteen_inp1"}// Перенесите сюда стили вашего инпута
                            />

                        </div>
                        <div className={"fiveteen_inp_div"}>
                            <span className={"comfortable_text"}>Удобный способ связи</span>
                            <div className={"comfort_div"}>
                                <a
                                    href="https://max.ru/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="my_max_button-style">
                                    <img className={"Max_logo"} src="/MAXlogo.webp" alt="" />
                                    <span>Макс</span>
                                </a>
                                <a
                                    href="https://www.whatsapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="my_phone_button-style">
                                    <i className="fa-solid fa-phone"></i>
                                    <span>Звонок</span>
                                </a>

                            < /div>
                        </div>
                        <div className={"fiveteen_inp_div"}>
                            <span className={"inp_text"}>Регион строительства</span>
                            <input className={"fiveteen_inp"} placeholder={"Город или регион"} autoComplete="name"   name="" id=""/>
                        </div>
                        <div className={"fiveteen_inp_div"}>
                            <span className={"inp_text"}>Желаемая площадь (м²)</span>
                            <input className={"fiveteen_inp"} placeholder={" Hапример: 150"} autoComplete="name"   name="" id=""/>
                        </div>
                        <div className={"agree_div"}>
                            <div className={`btn_check ${agree ?'active' : ''}`}  onClick={() => setAgree(!agree)}>✔</div>
                            <span className={"agree_text"}>Соглашаюсь с</span>
                            <Link to="/Privacy" className={"my-navbar_project_a"}>
                                <span className={"privacy"}>политикой обработки персональных данных</span>
                            </Link>
                        </div>
                        <div className={"i_dont_robot"}>
                            <div className={"robot"}>
                                <div className={"robot1"}>
                                    <div className={"robot_btn"}></div>
                                </div>

                                <div className={"robot2"}>
                                    <span className={"iam_not_robot"}>Я не робот</span>
                                    <span className={'click_for_continue'}>Нажмите чтобы продолжить</span>

                                    <span>
                                        {question ? (
                                            <>
                                                <a
                                                    href="https://yandex.ru/legal/smartcaptcha_notice/ru/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hrf_robot"
                                                >
                                                    <span>Обработка данных .</span>
                                                </a>
                                                <a
                                                    href="https://yandex.ru/support2/smart-captcha/ru/problems.html?link_spot=support"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hrf_robot"
                                                >
                                                    <span>Поддержка</span>
                                                </a>
                                            </>
                                        ) : (
                                            <a
                                                href="https://yandex.cloud/ru/services/smartcaptcha?utm_source=smart-captcha&utm_medium=chbx&utm_campaign=security"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hrf_robot"
                                            >
                                                <span>Yandex SmartCaptcha</span>
                                            </a>
                                        )}
      </span>
                                </div>

                                <div className={"robot3"} onClick={() => setQuestion(!question)}>
                                    <i className={`${question ? "fa-solid fa-rotate-left" : "fa-regular fa-circle-question"}`} />
                                </div>
                            </div>
                        </div>

                        <div className={"btn_take_div"}>
                            <div className={"take_counting"} onClick={() => window.scrollTo({top:11200, behavior: 'smooth' })}>
                                Получить подбор и расчёт
                            </div>
                        </div>
                        <div className={"fiveteen_last_div"}>
                            Цена ориентировочная; финальную стоимость считаем индивидуально по проекту.
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Letapply;