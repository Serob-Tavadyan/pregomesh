import '../css/Passport.css';
import '../css/Menue1.css';
import Menue1 from './Menue1';
import { Routes, Route,Link } from 'react-router-dom'; // Импортируем только Routes и Route
import React, { useState} from 'react';
import Footer from "./Footer";
import Letapplycopy from './Letapplycopy';
import Choose from "./Chooseproect";
import { useModalStore } from '../useModalStore';
function Passport(props) {
    const passport = [
        {
            id:1,
            icon:"fa-regular fa-file-lines",
            title:"Инструкция по эксплуатации",
            intr:"Подробные правила ухода за домом: контроль влажности, обновление покрытий, регулировка узлов. Вы всегда знаете, что и когда делать.",
        },
        {
            id:2,
            icon:"fa-regular fa-calendar",
            title:"Календарь регламентных работ",
            intr:"Чёткий график осмотров и обслуживания. Понятный финансовый план — никаких сюрпризов и неожиданных расходов.",
        },
        {
            id:3,
            icon:"fa-regular fa-clock",
            title:"Сервисная история",
            intr:"Как ТО для автомобиля — фиксация всех проведённых работ. Повышает ценность дома при продаже или наследовании.",
        },
        {
            id:4,
            icon:"fa-solid fa-shield-halved",
            title:"Расширенная гарантия до 20 лет",
            intr:"Активируется при соблюдении регламента. Предупреждение проблем с влагой, усадкой и покрытиями — меньше рисков, больше спокойствия.",
        }
    ]
    return (
        <div>
            <Choose/>
            <Menue1/>
            <div className={"Passport_part1"}>
                <div className={"part1_div1_passport"}>
                    <div className={"div2_passport"}>
                        <div className={"passport_house"}>
                            <i className="fa-solid fa-shield-halved"></i>
                            <span>Паспорт дома</span>
                        </div>
                    </div>
                    <div className={"part1_div2_passport"}>
                        Паспорт дома WoodHouse —
                    </div>
                    <div className={"part1_div3_passport"}>
                    надёжная защита на десятилетия
                    </div>
                    <div className={"part1_div4_passport"}>
                        С каждым домом мы выдаём официальный документ и подробную инструкцию по эксплуатации дома из норвежского лафета. Сохраняем качество, даём расширенную гарантию.
                    </div>
                    <div className={"part1_div5_passport"}>
                      <div className={"div5_innerdiv_passport"}>
                          <div className={"div5_circle_passport"}>
                              <i className="fa-regular fa-file"></i>
                          </div>
                          <span>Инструкция по эксплуатации</span>

                      </div>
                        <div className={"div5_innerdiv_passport"}>
                            <div className={"div5_circle_passport"}>
                                <i className="fa-regular fa-calendar"></i>
                            </div>
                            <span>Регламент работ</span>

                        </div>
                        <div className={"div5_innerdiv_passport"}>
                            <div className={"div5_circle_passport"}>
                                <i className="fa-solid fa-shield-halved"></i>
                            </div>
                            <span>Гарантия 20 лет</span>

                        </div>

                    </div>
                </div>

                <div className={"part2_div1_passport"}>
                    <div className={"part2_div1_passport_circle"}>
                        <img className={"part2_div1_passport_img"} src="/hero-1.jpg" alt=""/>
                    </div>
                </div>

            </div>
            <div className={"Passport_part2"}>Что внутри Паспорта</div>
            <div className={"Passport_part3"}>Инженерная сервисная книжка вашего дома</div>
            <div className={"Passport_part4"}>Полный комплект документов для правильной эксплуатации дома из норвежского лафета — от инструкций до расширенной гарантии.</div>
            <div className={"Passport_part5"}>
                {
                 passport.map((item, index) => (
                     <div key={index} className={"passport_card"}>
                          <div className={"square_passport"}>
                              <i className={item.icon}></i>
                          </div>
                         <span className={"passport_title"}>{item.title}</span>
                         <span className={"passport_intr"}>{item.intr}</span>
                     </div>
                 ))
                }
            </div>
            <div className={"Passport_part6"}>
                <div className={"Passport_part2"}>Регламент обслуживания</div>
                <div className={"Passport_part3"}>Прозрачный план обслуживания</div>
                <div className={"Passport_part4"}>Вы всегда знаете, что и когда нужно делать. Никаких догадок и неожиданностей — только чёткий инженерный регламент.</div>
                <div className={"Passport_part7"}>
                    <div className={"Passport_part7_div1"}>
                        <span className={"Passport_part7_div1_title"}>Период эксплуатации</span>
                        <span className={"Passport_part7_div1_title"}>Вид регламентных работ</span>
                        <span className={"Passport_part7_div1_title"}>Обоснование / Важность</span>
                    </div>
                    <div className={"select_passport"}>
                        <span className={"select_passport_text_black"}>Раз в неделю (первые 30 дней), далее раз в месяц (первый год)</span>
                        <span className={"select_passport_text2_black"}>Регулировка винтовых компенсаторов (домкратов) на вертикальных опорах</span>
                        <span className={"select_passport_text3_black"}>Предотвращает «зависание» венцов и образование щелей.</span>
                    </div>
                    <div className={"select_passport"}>
                        <span className={"select_passport_text_black"}>Раз в 2 месяца (первые 3 года)</span>
                        <span className={"select_passport_text2_black"}>Осмотр и регулировка скользящих опор стропильной системы</span>
                        <span className={"select_passport_text3_black"}>Позволяет стропилам смещаться при усадке фронтонов, предотвращая деформацию крыши.</span>
                    </div>
                    <div className={"select_passport"}>
                        <span className={"select_passport_text_black"}>Ежегодно (весна/осень)</span>
                        <span className={"select_passport_text2_black"}>Контроль усадочных зазоров над окнами и дверями (в обсаде)</span>
                        <span className={"select_passport_text3_black"}>Зазор (5-7% от высоты) гарантирует, что оседающий лафет не раздавит оконные рамы.</span>
                    </div>
                    <div className={"select_passport"}>
                        <span className={"select_passport_text_black"}>Постоянно (в отопительный сезон)</span>
                        <span className={"select_passport_text2_black"}>Контроль влажности в помещениях (норма 30–45%)</span>
                        <span className={"select_passport_text3_black"}>Предотвращает резкую усушку древесины и раскрытие глубоких трещин в лафете.</span>
                    </div>
                    <div className={"select_passport"}>
                        <span className={"select_passport_text_black"}>Через 1 год после сборки</span>
                        <span className={"select_passport_text2_black"}>Финишная обработка торцов лафета герметиком или воском</span>
                        <span className={"select_passport_text3_black"}>Торцы отдают влагу быстрее всего. Обработка снижает растрескивание и защищает от грибка.</span>
                    </div>
                    <div className={"select_passport"}>
                        <span className={"select_passport_text_black"}>После первого отопительного сезона</span>
                        <span className={"select_passport_text2_black"}>Нанесение акрилового герметика (технология «Тёплый шов»)</span>
                        <span className={"select_passport_text3_black"}>Защищает швы от влаги, ветра и промерзания на 20 лет.</span>
                    </div>
                    <div className={"select_passport2"}>
                        <span className={"select_passport_text_black"}>Каждые 3–5 лет</span>
                        <span className={"select_passport_text2_black"}>	Обновление защитно-декоративного покрытия фасада (масло/воск с УФ-фильтром)</span>
                        <span className={"select_passport_text3_black"}>Защищает лафет от ультрафиолета (посерения), влаги и биопоражений.</span>
                    </div>
                </div>
                <Letapplycopy/>
            </div>
            <Footer/>
        </div>
    );
}

export default Passport;