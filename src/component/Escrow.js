import '../css/Escrow.css';
import '../css/Menue1.css';
import Menue1 from './Menue1';
import { Routes, Route,Link } from 'react-router-dom'; // Импортируем только Routes и Route
import React, { useState} from 'react';
import Footer from "./Footer";
import { useTranslation } from 'react-i18next';
import Letapply from './Letapply';
import Choose from "./Chooseproect";
import { useModalStore } from '../useModalStore';
function Escrow() {
    const { t } = useTranslation();
    const part3 = [
        {
            icon:"fa-regular fa-clock",
            title:"Быстрое изготовление",
            intr:"Мы не растягиваем сроки. От утверждения проекта до готового домокомплекта проходит минимум времени.",
        },
        {
            icon:"fa-solid fa-industry",
            title:"Независимость от поставщиков",
            intr:"У нас собственное производство домокомплектов из лафета камерной сушки. Нам не нужны ваши деньги, чтобы «перезаказать» материалы на стороне.",
        },
        {
            icon:"fa-solid fa-shield-halved",
            title:"Гарантия качества — 20 лет",
            intr:"После сдачи объекта мы выдаем Паспорт дома, регламент обслуживания и даем гарантию 20 лет. Мы строим так, чтобы сдать проект с первого раза и без задержек.",
        }
    ];
    const catalog = [
        {
            id: 1,
            img: "/dugnad.webp",
            category: "house",
            area: 130,
            floors: 1,
            price: 10700000,
            name: "catalog.dugnad.name",
            intro: "catalog.dugnad.intro",
            tooltip: "catalog.common.tooltip",
            moredetails: "catalog.common.moredetails",
            specText: "catalog.spec.bedrooms3",
            rulerIcon: "fa-solid fa-ruler-horizontal",
            houseIcon: "fa-solid fa-house",
            specIcon: "fa-solid fa-bed"
        },
        {
            id: 2,
            img: "/loen.webp",
            category: "house",
            area: 85,
            floors: 1,
            price: 6990000,
            name: "catalog.loen.name",
            intro: "catalog.loen.intro",
            tooltip: "catalog.common.tooltip",
            moredetails: "catalog.common.moredetails",
            specText: "catalog.spec.bedrooms3",
            rulerIcon: "fa-solid fa-ruler-horizontal",
            houseIcon: "fa-solid fa-house",
            specIcon: "fa-solid fa-bed"
        },
        {
            id: 3,
            img: "/gausdai.webp",
            category: "house",
            area: 147,
            floors: 1,
            price: 9752525,
            name: "catalog.gausdal.name",
            intro: "catalog.gausdal.intro",
            tooltip: "catalog.common.tooltip",
            moredetails: "catalog.common.moredetails",
            specText: "catalog.spec.bedrooms3",
            rulerIcon: "fa-solid fa-ruler-horizontal",
            houseIcon: "fa-solid fa-house",
            specIcon: "fa-solid fa-bed"
        },
        ]
    return (
        <div>
            <Choose/>
            <Menue1/>
            <div className={"escrow_part1"}>
                <div className={"escrow_part1_half1"}>
                    <div className={"checked_circle_div"}>
                        <div className={"before_btn"}>
                            <div className={"after_btn"}>
                                <i className="fa-solid fa-user-shield"></i>
                            </div>
                        </div>
                    </div>
                    <div className={"domokomplekty_div"}>
                        <span >
                            <span className={"domocoplecty_text"}>Домокомплекты из лафета через</span>
                            <span className={"escrow_count_text"}>эскроу-счёт</span>
                        </span>
                    </div>
                    <div className={"your_moneys_in_proof"}>
                        <span>Ваши деньги находятся под 100% защитой банка до изготовления домокомплекта. Мы получаем оплату только после того, как изготовим и передадим вам готовый домокомплект. Никаких финансовых рисков.</span>
                    </div>
                    <div className={"escrow_part1_half1_btn_div"}>
                        <div className={"half1_btn_escrow"} onClick={() => window.scrollTo({top:11200, behavior: 'smooth' })}> Узнать условия и получить расчёт <i
                            className="fa-solid fa-arrow-right"></i></div>
                    </div>

                </div>
                <div className={"escrow_part1_half2"}>
                    <div className={"part1_half2_innerdiv"}>
                        <div className={"innerdiv1"}>
                                <div className={"before_btn2"}>
                                    <div className={"after_btn2"}>
                                        <i className="fa-solid fa-user-shield"></i>
                                    </div>
                            </div>
                        </div>
                        <div className={"innerdiv2"}>Деньги под защитой</div>
                        <div className={"innerdiv3"}>
                            <div className={"list_div"}>
                                <i className="fa-solid fa-check check"></i>
                                <span className={"list_grey"}>100% гарантия банка</span>
                            </div>
                        </div>
                        <div className={"innerdiv3"}>
                            <div className={"list_div"}>
                                <i className="fa-solid fa-check check"></i>
                                <span className={"list_grey"}>Оплата после изготовления</span>
                            </div>
                        </div>
                        <div className={"innerdiv3"}>
                            <div className={"list_div"}>
                                <i className="fa-solid fa-check check"></i>
                                <span className={"list_grey"}>Производим за свой счёт</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={"escrow_part2"}>
                <div className={"escrow_part2_half1"}>Как это работает</div>
                <div className={"escrow_part2_half2"}>
                    Как защищены ваши деньги: 4 простых шага
                </div>
                <div className={"one_two_tree1_escrow"}>
                    <div className={"numberr_escrow"}>1</div>
                    <div className={"line1_escrow"}></div>
                    <div className={"numberr_escrow"}>2</div>
                    <div className={"line1_escrow"}></div>
                    <div className={"numberr_escrow"}>3</div>
                    <div className={"line1_escrow"}></div>
                    <div className={"numberr_escrow"}>4</div>
                </div>

                <div className={"names_of_numbers_escrow"}>
                    <div className={"proect_etc_div_escrow"}>
                        <div className={"proect_div_escrow"}>Фиксируем смету и проект</div>
                        <div className={"producing_div_escrow"}>Вы открываете счёт в банке</div>
                        <div className={"delivery_div_escrow"}>Мы изготавливаем домокомплект за свой счёт</div>
                        <div className={"delivery_div_escrow"}>Вы принимаете домокомплект — мы получаем деньги</div>

                    </div>

                    <div className={"proect_etc_intr_div_escrow"}>
                        <div className={"proect_intr_div_escrow"}>Выбираем проект из каталога (более 100 вариантов) или адаптируем его под вас. Заключаем договор с неизменной суммой.</div>
                        <div className={"producing_intr_div_escrow"}>Это бесплатно. Вы вносите сумму за домокомплект на специальный эскроу-счёт. Доступ к деньгам заблокирован как для нас, так и для третьих лиц.</div>
                        <div className={"delivery_intr_div_escrow"}>Благодаря собственному производству, станкам ЧПУ и складским запасам лафета, мы не зависим от предоплат. Изготавливаем домокомплект в кратчайшие сроки.</div>
                        <div className={"delivery_intr_div_escrow"}>Только после подписания акта приёмки готового домокомплекта банк переводит средства компании WoodHouse. Вы ничем не рискуете.</div>

                    </div>
                </div>
            </div>
            <div className={"escrow_part3"}>
                <div className={"escrow_part2_half1"}>Наши преимуществат</div>
                <div className={"escrow_part2_half2"}>
                    Почему мы готовы производить за свои деньги,
                    а вы не замораживаете свои
                </div>
                <div className={"escrow_part3_half2"}>
                    {
                        part3.map((item, index) => (
                            <div key={index} className={"escrow_cards"}>
                                <div className={"card_part1"}>
                                    <div className={"escrow_green_circle"}>
                                        <i className={item.icon}></i>
                                    </div>
                                </div>
                                <div className={"card_part2"}>{item.title}</div>
                                <div className={"card_part3"}>{item.intr}</div>


                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="escrow_part4">
                <div className={"escrow_part2_half1"}>Популярные проекты</div>
                <div className={"escrow_part2_half2"}>
                    Выберите проект для строительства через эскроу
                </div>
                <div className={"escrow_part4_div"}>
                    {catalog.map((house) => (
                        /* Не забываем добавить уникальный key={house.id} для React */
                        <div key={house.id} className={"products"}>

                            <div className={"product_image_div"}>
                                {/* В alt тоже передаем перевод названия */}
                                <img className={"house_img"} src={house.img} alt={t(house.name)} />
                            </div>

                            <div className={"names_div"}>
                                {/* Заменили house.productName на перевод по ключу */}
                                <span className={"house_name"}>{t(house.name)}</span>
                            </div>

                            <div className={"intr_div"}>
                                {/* Заменили house.introduction на перевод по ключу */}
                                <span className={"house_intr"}>{t(house.intro)}</span>
                            </div>

                            <div className={"inform_div"}>
                                <div className={"square_metr"}>
                                    <i className={house.rulerIcon}></i>
                                    <span className={"area"}>{house.area}</span>
                                    {/* Переводим единицу измерения площади */}
                                    <span className={"metr_sqrt"}> {t('catalog.common.meters')}</span>
                                </div>

                                <div className={"floor_qount"}>
                                    <i className={house.houseIcon}></i>
                                    <span className={"floors_count"}>{house.floors}</span>
                                    {/* Переводим слово "этаж" */}
                                    <span className={"floorstext"}> {t('catalog.common.floor')}</span>
                                </div>

                                <div className={"rooms_qount"}>
                                    <i className={house.specIcon}></i>
                                    {/* Заменили house.bedrooms на перевод по ключу (3 спальни / Баня) */}
                                    <span className={"bedrooms_count"}>{t(house.specText)}</span>
                                </div>

                            </div>
                            {/* Блок цены со встроенным всплывающим окном */}
                            <div className={"price_div"}>
                                <span className={"price_div_green"}> ~ </span>
                                <span className={"price_div_green"}> {house.price.toLocaleString('ru-RU')} </span>
                                <span className={"price_div_green"}> ₽</span>

                                {/* Белое окошко (tooltip_popup) обязательно вставляем ВНУТРЬ дива exclamation */}
                                <div className={"exclamation"}>
                                    <i className="fa-solid fa-exclamation"></i>

                                    <div className={"tooltip_popup"}>
                                        {t(house.tooltip)}
                                    </div>
                                </div>
                            </div>

                            {/* Блок с кнопкой "Подробнее" (идёт сразу под ценой) */}
                            <div className={"detail_inform"}>
                                <div className={"detail_btn"}>
                                    {t(house.moredetails)}
                                </div>
                            </div>

                        </div>

                    ))}
                </div>
                <div className={"escrow_part4_choose_div"}>
                    <Link style={{textDecoration:"none"}} to={'/Project'}>
                    <div className={"escrow_part4_choose"}>Выбрать проект <i className="fa-solid fa-arrow-right"></i>
                    </div></Link>
                </div>
            </div>
            <Letapply/>
            <Footer/>
        </div>
    );
}

export default Escrow;