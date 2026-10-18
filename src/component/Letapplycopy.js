import {PatternFormat} from "react-number-format";
import {Link} from "react-router-dom";
import '../css/Letapplycopy.css';
import React, { useState } from 'react';
import Choose from "./Chooseproect";
import { useModalStore } from '../useModalStore';

function Letapplycopy(props) {
    const [question, setQuestion] = React.useState(false);
    const [agree, setAgree] = React.useState(false);
    const [phone, setPhone] = React.useState('');
    return (
        <div>

            <div className={"fiveteen_part_copy"}>
                <div className={"fiveteen_partinner_copy"}>
                    <div className={"fiveteen_partinner1_copy"}>
                        <span className={"fiveteen_partinner1_text_copy"}>
                              Получите пример Паспорта дома на Email
                        </span>
                    </div>

                    <div className={"fiveteen_partinner2_copy"}>
                        <span className={"fiveteen_partinner2_text_copy"}>
                             Оставьте контакты — пришлём образец Паспорта и проконсультируем по лафету.
                        </span>
                    </div>


                    <form className={"form_copy"} action="">
                        <div className={"fiveteen_inp_div_copy"}>
                            <span className={"inp_text_copy"}>Ваше имя</span>
                            <input className={"fiveteen_inp_copy"} placeholder={"Как к вам обращаться?"} autoComplete="name"   name="" id=""/>
                        </div>

                        <div className={"fiveteen_inp_div_copy"}>
                            <span className={"inp_text_copy"}>Телефон / мессенджер *</span>
                            <PatternFormat
                                format="+7 (###) ###-##-##"
                                allowEmptyFormatting
                                mask="_"
                                value={phone}
                                onValueChange={(values) => setPhone(values.value)}
                                type="tel"
                                autoComplete="tel"
                                className={"fiveteen_inp1_copy"}// Перенесите сюда стили вашего инпута
                            />

                        </div>
                        <div className={"fiveteen_inp_div_copy"}>
                            <span className={"inp_text_copy"}>Email</span>
                            <input className={"fiveteen_inp_copy"} placeholder={"your@email.com"} autoComplete="email"   name="" id=""/>
                        </div>
                        <div className={"fiveteen_inp_div_copy"}>
                            <span className={"comfortable_text_copy"}>Удобный способ связи</span>
                            <div className={"comfort_div_copy"}>
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

                        <div className={"agree_div_copy"}>
                            <div className={`btn_check ${agree ?'active' : ''}`}  onClick={() => setAgree(!agree)}>✔</div>
                            <span className={"agree_text_copy"}>Соглашаюсь с</span>
                            <Link to="/Privacy" style={{"marginLeft":"10px"}} className={"my-navbar_project_as"}>
                                <span>политикой обработки персональных данных</span>
                            </Link>
                        </div>
                        <div className={"i_dont_robot_copy"}>
                            <div className={"robot_copy"}>
                                <div className={"robot1_copy"}>
                                    <div className={"robot_btn_copy"}></div>
                                </div>

                                <div className={"robot2_copy"}>
                                    <span className={"iam_not_robot_copy"}>Я не робот</span>
                                    <span className={'click_for_continue_copy'}>Нажмите чтобы продолжить</span>

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

                                <div className={"robot3_copy"} onClick={() => setQuestion(!question)}>
                                    <i className={`${question ? "fa-solid fa-rotate-left" : "fa-regular fa-circle-question"}`} />
                                </div>
                            </div>
                        </div>

                        <div className={"btn_take_div_copy"}>
                            <div className={"take_counting_copy"} onClick={() => window.scrollTo({top:11200, behavior: 'smooth' })}>
                                Получить пример Паспорта
                            </div>
                        </div>
                        <div className={"fiveteen_last_div_copy"}>
                           <span> Нажимая кнопку, вы соглашаетесь с</span>
                            <Link to="/Privacy" style={{"marginLeft":"10px"}} className={"my-navbar_project_as"}>
                                <span>политикой обработки персональных данных</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Letapplycopy;