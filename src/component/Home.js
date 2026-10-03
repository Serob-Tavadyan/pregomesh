import '../css/Home.css';
import Menue from './Menue';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";
import Slider1 from "./Slider1";
import Footer from "./Footer";
import Dekor from './Dekor';
import WarmShell from './Warm_shell';
import Fundament from "./Fundament";
import Letapply from "./Letapply";
import { PatternFormat } from 'react-number-format';
function Home(props) {
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const [openId, setOpenId] = React.useState(null);
    const togglePart = (id) => {
        setOpenId(openId === id ? null : id);
    };
    const questions = [
        { id: 1, title: 'Дерево гниёт — как защищаете от гниения?', text1: 'Понимаем ваше беспокойство —',text2:'это один из главных вопросов при выборе деревянного дома.',text3:'Как делаем:',text4:'Мы снимаем заболонь — мягкий наружный слой древесины, который подвержен гниению. Остаётся ядровая древесина (сердцевина), которая от природы устойчива к биопоражениям благодаря высокому содержанию смол.',text5:'Дополнительная защита: ',text6:'Обрабатываем транспортной пропиткой Неомид 440. При правильном проекте (свесы кровли, высокий цоколь) и грамотном монтаже дом служит 100+ лет.', },
        { id: 2, title: 'Достаточно ли 200 мм толщины стены?', text1: 'Да, для большинства регионов России.',text2:'Массив дерева работает как теплоаккумулятор: накапливает тепло и медленно его отдаёт, сглаживая перепады температур.',text3:'Основные теплопотери в любом доме идут через крышу и окна, а не через стены. Поэтому мы рекомендуем хорошее утепление кровли (250–300 мм).',},
        { id: 3, title:'Сроки строительства?', text1: 'Производство домокомплекта: ',text2:' в среднем ≈ 1 месяц. Благодаря запасам готового лафета, дом быстро поступает в производство.',text3:'Монтаж на участке:',text4:' в среднем ≈ 1 месяц (включая сборку стен, кровлю с утеплением).',text5:'Итого тёплый контур готов примерно за 2 месяца. Сроки зависят от проекта и сезона — финально фиксируются после согласования. ',},
        { id: 4, title:'Почему лафет дороже бруса?', text1: 'Сравнивать нужно стоимость ',text2:' готового дома,',text3:'а не только стен.',text4:' Лафет — это финишная стена. Ему не нужна отделка (гипсокартон, обои, сайдинг) и дополнительное утепление. В итоге цена «под ключ» сопоставима с качественным каркасником или клееным брусом, но вы получаете настоящий массив дерева.',},
    ];
    const [nine,setNine] = React.useState([
        {
            id: 1,
            icon:"fa-solid fa-industry",
            title:"Собственное производство",
            intr:"Полный контроль качества на каждом этапе",
        },
        {
            id: 2,
            icon:"fa-regular fa-sun",
            title:"Лафет камерной сушки",
            intr:"Минимум усадки и деформации",
        },
        {
            id: 3,
            icon:"fa-solid fa-warehouse",
            title:"Материал в наличии",
            intr:"Складские остатки — быстрый старт",
        },
        {
            id: 4,
            icon:"fa-solid fa-font-awesome",
            title:"100+ проектов",
            intr:"Готовые решения под любую задачу",
        },
        {
            id: 5,
            icon:"fa-solid fa-shield",
            title:"Гарантия 20 лет",
            intr:"Паспорт дома + регламент обслуживания",
        },
        {
            id: 6,
            icon:"fa-regular fa-clock",
            title:"2 месяца от проекта до дома",
            intr:"Производство + монтаж",
        }
    ]);

    const [coment,Setcoment] = React.useState([
        {
            id: 1,
            intr:"«Прожили первую зиму — дом держит тепло невероятно. При -30 за окном внутри комфортные +24 без перетопа.»",
            author:"Алексей К.",
            city:"Московская область,",
            area:"110 м²",

        },
        {
            id: 2,
            intr:"«Смотрели много вариантов, выбрали WoodHouse за честность. Чётко объяснили, что в цене, что опционально.»",
            author:"Алексей К.",
            city:"Казань,",
            area:"150 м²",

        },
        {
            id: 3,
            intr:"«Качество — топ. Видно, что люди знают своё дело. Дом изготовили чуть за месяц, поставили за 20 дней, все быстро и по договору.»",
            author:"Алексей К.",
            city:"Санкт-Петербург,",
            area:"90 м²",


        },
    ]);
    const [catalog, setCatalog] = useState([
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
        {
            id: 4,
            img: "/fitjar.webp",
            category: "house",
            area: 84,
            floors: 1,
            price: 7815000,
            name: "catalog.fitjar.name",
            intro: "catalog.fitjar.intro",
            tooltip: "catalog.common.tooltip",
            moredetails: "catalog.common.moredetails",
            specText: "catalog.spec.bedroom1",
            rulerIcon: "fa-solid fa-ruler-horizontal",
            houseIcon: "fa-solid fa-house",
            specIcon: "fa-solid fa-bed"
        },
        {
            id: 5,
            img: "/surnadal.webp",
            category: "bath",
            area: 90,
            floors: 1,
            price: 7870000,
            name: "catalog.surnadal.name",
            intro: "catalog.surnadal.intro",
            tooltip: "catalog.common.tooltip",
            moredetails: "catalog.common.moredetails",
            specText: "catalog.spec.banya",
            rulerIcon: "fa-solid fa-ruler-horizontal",
            houseIcon: "fa-solid fa-house",
            specIcon: "fa-solid fa-bath"
        },
        {
            id: 6,
            img: "/granvin.webp",
            category: "house",
            area: 140,
            floors: 1,
            price: 10600000,
            name: "catalog.granvin.name",
            intro: "catalog.granvin.intro",
            tooltip: "catalog.common.tooltip",
            moredetails: "catalog.common.moredetails",
            specText: "catalog.spec.bedrooms3",
            rulerIcon: "fa-solid fa-ruler-horizontal",
            houseIcon: "fa-solid fa-house",
            specIcon: "fa-solid fa-bed"
        }
    ]);

    const [portfolio, setPortfolio] = useState([
        {
            id: 1,
            img: "/portfolio1.webp",
            name: "Рощино, ЛО, Жилой дом ",
            moredetails: "Смотреть объект",
        },

        {
            id: 2,
            img: "/portfolio2.webp",
            name: "Чехов, МО, Жилой дом",
            moredetails: "Смотреть объект",
        },

        {
            id: 3,
            img: "/portfolio3.webp",
            name: "Чехов, МО, Жилой дом",
            moredetails: "Смотреть объект",
        },

        {
            id: 4,
            img: "/portfolio4.webp",
            name: "Вязьма, Жилой дом.",
            moredetails: "Смотреть объект",
        },

        {
            id: 5,
            img: "/portfolio5.webp",
            name: "Кисловодск, Жилой дом",
            moredetails: "Смотреть объект",
        },


             ]);
    return (
        <div>
            <div className={"home_first_part"}>
            <div className={"private_producing_div"}>
                <Menue/>
                <div className={"private_producing"}>
                    <i className="fa-solid fa-industry"></i>
                    СОБСТВЕННОЕ ПРОИЗВОДСТВО
                </div>
            </div>

            <div className={"home_lafet_div"}>
                <span className={"home_lafet"}>Дома из лафета</span>
            </div>

                <div className={"with_factory_div"}>
                    <span className={"with_factory"}>с заводской точностью</span>
                </div>

                <div className={"with_lafet_small_div"}>
                    <span className={"with_lafet_small"}>Лафет камерной сушки. Тёплый контур с доставкой и <br/> монтажом.</span>
                </div>


                <div className={"btn_div"}>
                    <div className={"choose_project"}>
                        <span className={"choose"}>Подобрать проект</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className={"calculate_price"}>
                        <span className={"calculate"}>Рассчитать стоимость</span>
                    </div>
                </div>

                <div className={"bottom_div"}>
                    <div className={"bottom_div1"}>
                        <i className="fa-regular fa-flag"></i>
                        <span>100+ проектов</span>
                    </div>
                    <div className={"bottom_div2"}>
                        <i className="fa-solid fa-warehouse"></i>
                        <span>Лафет в наличии</span>
                    </div>
                    <div className={"bottom_div3"}>
                        <i className="fa-solid fa-industry industry"></i>
                        <span>Собственное производство</span>
                    </div>
                    <div className={"bottom_div4"}>
                        <i className="fa-solid fa-shield"></i>
                        <span>Гарантия 20 лет</span>

                    </div>
                    <div className={"bottom_div5"}>
                        <div className={"private_producing2"}>
                            <i className="fa-solid fa-shield"></i>
                            <span> Безопасная сделка</span>

                        </div>
                    </div>

                </div>
            </div>

           <div className={"home_second_part"}>
               <div className={"about_company_part"}>
                   <div className={"about_company_part_div"}>
                       <div className={"about_top_div"}>
                           <span className={"qounts"}>100</span>
                           <span className={"about_green_text"}>+</span>

                       </div>
                       <div className={"about_bottom_div"}>
                           <span className={"about_grey_text"}>Проектов в каталоге</span>

                       </div>
                   </div>
                   <div className={"about_company_part_div"}>
                       <div className={"about_top_div"}>
                           <span className={"qounts"}>2</span>
                       </div>
                       <div className={"about_bottom_div"}>
                           <span className={"about_grey_text"}>месяца от проекта до дома</span>

                       </div>
                   </div>
                   <div className={"about_company_part_div"}>
                       <div className={"about_top_div"}>
                           <span className={"qounts"}>20</span>
                           <span className={"about_green_text"}>лет</span>
                       </div>
                       <div className={"about_bottom_div"}>
                           <span className={"about_grey_text"}>опыт в строительстве</span>

                       </div>
                   </div>
                   <div className={"about_company_part_div"}>
                       <div className={"about_top_div"}>
                           <span className={"qounts"}>100</span>
                           <span className={"about_green_text"}>+</span>
                       </div>
                       <div className={"about_bottom_div"}>
                           <span className={"about_grey_text"}>Домов построено</span>
                       </div>
                   </div>

               </div>
               <div className={"about_company_part2"}>
                   <span className={"catalog_proects"}>Каталог проектов</span>
                   <span className={"choose_proects_house"}>Выберите проект дома или бани из лафета</span>
                   <span className={"catalog_from_100"}>Каталог из 100+ проектов. Можно взять готовый проект или <br/> адаптировать под вашу задачу.</span>

               </div>
           </div>
            <div className={"home_third_part"}>
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
                <div className={"forth_part"}>
                    <div className={"open_catalog_btn"}>
                        {/* Оставляем только чистый Link, без li */}
                        <Link to="/Project" className={"my-navbar_project_a"}>
                            Открыть каталог
                        </Link>
                    </div>

                    <div className={"pass_kviz"}>
                        Пройти квиз и получить подбор
                    </div>
                </div>

                <div className={"five_parth"}>
                    <div className={"job_format"}>
                        <span className={"job_format_text"}>Формат работы</span>
                    </div>
                    <div className={"avaiable_process"}>
                        <span className={"avaiable_process_text"}>Понятный процесс. Предсказуемые сроки</span>
                    </div>

                    <div className={"one_two_tree1"}>
                        <div className={"numberr"}>1</div>
                        <div className={"line1"}></div>
                        <div className={"numberr"}>2</div>
                        <div className={"line1"}></div>
                        <div className={"numberr"}>3</div>
                    </div>

                    <div className={"names_of_numbers"}>
                        <div className={"proect_etc_div"}>
                            <div className={"proect_div"}>Проект</div>
                            <div className={"producing_div"}>Производство</div>
                            <div className={"delivery_div"}>Доставка и монтаж</div>
                        </div>

                        <div className={"proect_etc_intr_div"}>
                            <div className={"proect_intr_div"}>Выбираем готовый проект из каталога или адаптируем под ваши задачи и участок.т</div>
                            <div className={"producing_intr_div"}>Изготовление домокомплекта на собственных мощностях — в среднем ≈ 1 месяц.</div>
                            <div className={"delivery_intr_div"}>Доставка и монтаж тёплого контура на вашем участке — в среднем ≈ 1 месяц.</div>
                        </div>

                        <div className={"srok_div"}>
                            <span>Сроки зависят от проекта и сезона — финально фиксируются после согласования.</span>
                        </div>



                    </div>

                </div>

            <div className={"six_parth"}>
                <div className={"six_parth_half1"}>
                  <div className={"images_div_container"}  onClick={() => setOpen(true)} >
                      <div className={"photo_and_video"}>
                          <i className="fa-solid fa-image"></i>
                          <span className={"phot_and_video_text"}>Фото и видео</span>
                          <span className={"eight_number"}>8</span>
                      </div>
                  </div>
                </div>





                <div className={"six_parth_half"}>
                    <div className={"standart_complectation"}>
                        <span className={"standart_complectation_text"}>Стандартная комплектация</span>
                    </div>

                    <div className={"warm_shell_div"}>
                        <span className={"warm_shell_text"}>Тёплый контур</span>
                    </div>

                    <div className={"we_do_format_div"}>
                        <span className={"we_do_format_text"}>Мы делаем формат, с которого удобно начинать: дом собран, защищён и готов к следующим этапам.</span>
                    </div>

                    <div className={"constructiv_div"}>
                        <div className={"construct_sign"}>
                            <i className="fa-solid fa-house construct_icon"></i>
                        </div>
                        <div className={"about_construct"}>
                        <div className={"title_constructs"}>
                            <span className={"title_text"}>Домокомплект из лафета камерной сушки</span>
                        </div>
                            <div className={"intr_constructs"}>
                                <span className={"intr_constructs_text"}>Все элементы изготовлены с точной геометрией</span>
                            </div>
                        </div>
                    </div>

                    <div className={"constructiv_div"}>
                        <div className={"construct_sign"}>
                            <i className="fa-solid fa-gavel construct_icon"></i>
                        </div>
                        <div className={"about_construct"}>
                            <div className={"title_constructs"}>
                                <span className={"title_text"}>Монтаж домокомплекта</span>
                            </div>
                            <div className={"intr_constructs"}>
                                <span className={"intr_constructs_text"}>Сборка нашей бригадой на вашем участке</span>
                            </div>
                        </div>
                    </div>

                    <div className={"constructiv_div"}>
                        <div className={"construct_sign"}>
                            <i className="fa-solid fa-temperature-high construct_icon"></i>
                        </div>
                        <div className={"about_construct"}>
                            <div className={"title_constructs"}>
                                <span className={"title_text"}>Кровля с утеплением</span>
                            </div>
                            <div className={"intr_constructs"}>
                                <span className={"intr_constructs_text"}>Металлочерепица, стропильная система, утепление</span>
                            </div>
                        </div>
                    </div>

                    <div className={"constructiv_div"}>
                        <div className={"construct_sign"}>
                            <i className="fa-solid fa-truck-fast construct_icon"></i>
                        </div>
                        <div className={"about_construct"}>
                            <div className={"title_constructs"}>
                                <span className={"title_text"}>Доставка входит в стоимость</span>
                            </div>
                            <div className={"intr_constructs"}>
                                <span className={"intr_constructs_text"}>Привозим пронумерованный домокомплект</span>
                            </div>
                        </div>

                    </div>
                    <div className={"take_calculating"}>
                        <div className={"take_calculating_text"}>
                            Получить расчёт тёплого контура
                        </div>
                    </div>

                </div>


            </div>
                {open && (
           <div className={"slider_div"} onClose={() => setOpen(false)} >
               <div className={"slider_div_part1"}>
                   <div className={"space_div"}></div>

                   <div className={"right_x"} onClick={() => setOpen(false)} >
                       <i className="fa-solid fa-x"></i>
                   </div>
               </div>

               <div className={"slider_div_part2"}>
                 <Slider1/>
               </div>

           </div>
                    )}

            </div>

            <div className={"seven_part"}>
                <div className={"seven_part1"}>
                    <span className={"standart_complectation_text"}>Дополнительные услуги</span>
                </div>

                <div className={"seven_part2"}>
                    <span className={"warm_contur_text"}>Комплексный подход</span>
                </div>

                <div className={"seven_part3"}>
                    <span className={"without_housecomplect"}>Помимо домокомплекта и тёплого контура, мы выполняем дополнительные работы, которые могут понадобиться на разных этапах строительства. От подбора фундамента до герметизации и декоративных элементов — подберём оптимальное решение под ваш проект.</span>
                </div>

                <div className={"seven_part4"}>
                    <div className={"seven_dives"}>
                        <Link to="/Fundament" className={"my-navbar_project_a"}>
                        <div className={"seven_dives1"}>
                            <div className={"circle"}>
                                <i className="fa-solid fa-arrows-up-to-line"></i>
                            </div>
                        </div>
                        <div className={"seven_dives2"}>
                            <span className={"fundament"}>Фундамент</span>
                         <span className={"fundament_intr"}>Свайный или монолитный (УШП). Подбираем тип  после геологии участка и расчёта нагрузок . </span>
                            <span className={"detail"}>Подробнее <i className="fa-solid fa-arrow-right detail_right"></i></span>
                        </div>
                        </Link>
                    </div>
                    <div className={"seven_dives"}>
                        <Link to="/WarmShell" className={"my-navbar_project_a"}>
                        <div className={"seven_dives1"}>
                            <div className={"circle"}>
                                <i className="fa-solid fa-house-fire"></i>
                            </div>
                        </div>
                        <div className={"seven_dives2"}>
                            <span className={"fundament"}>Тёплый шов</span>
                            <span className={"fundament_intr"}>Дополнительная герметизация стыков лафета для повышения энергоэффективности дома. </span>
                            <span className={"detail"}>Подробнее <i className="fa-solid fa-arrow-right detail_right"></i></span>
                        </div>
                        </Link>
                    </div>
                     <div className={"seven_dives"}>
                         <Link to="/Decor" className={"my-navbar_project_a"}>
                    <div className={"seven_dives1"}>
                        <div className={"circle"}>
                            <i className="fa-solid fa-hammer"></i>
                        </div>
                    </div>
                         <div className={"seven_dives2"}>
                        <span className={"fundament"}>Индивидуальный декор</span>
                        <span className={"fundament_intr"}>Резные  колонны,  ограждения террас и элементы крыши скандинавскv стиле.  </span>
                        <span className={"detail"}>Подробнее <i className="fa-solid fa-arrow-right detail_right"></i></span>
                    </div>
                         </Link>

                </div>

                </div>
            </div>

           <div className={"eight_part"}>
               <div className={"eight_part1"}>
                   <div className={"eight_part1_1"}>
                       <span className={"standart_complectation_text"}>Производство</span>
                   </div>
                   <div className={"eight_part1_2"}>
                       <span className={"warm_contur_text"}>Собственное <br/> производство и точная <br/> геометрия деталей</span>
                   </div>
                   <div className={"eight_part1_3"}>
                       <span className={"eight_part1_3_text"}>Мы производим домокомплекты на собственных мощностях. Станки с ЧПУ обеспечивают стабильную геометрию каждого элемента.</span>

                   </div>
                   <div className={"eight_part1_4"}>
                       <div className={"part4one"}>
                           <div className={"green_icon"}>
                               <i className="fa-solid fa-check"></i>
                           </div>
                           <span className={"check_text"}>Точная подгонка</span>

                       </div>
                       <div className={"part4one"}>
                           <div className={"green_icon"}>
                               <i className="fa-regular fa-clock"></i>
                           </div>
                           <span className={"check_text"}>Быстрее монтаж</span>
                       </div>
                       <div className={"part4one"}>
                           <div className={"green_icon"}>
                               <i className="fa-solid fa-house-chimney-window"></i>
                           </div>
                           <span className={"check_text"}>Аккуратный вид</span>
                       </div>
                       <div className={"part4one"}>
                           <div className={"green_icon"}>
                               <i className="fa-solid fa-layer-group"></i>
                           </div>
                           <span className={"check_text"}>Повторяемое качество</span>
                       </div>

                   </div>
                   <div className={"eight_part1_5"}>
                       <Link to="/Producing" className={"my-navbar_project_a"}>
                       <span className={"detail"}>Подробное о компании и опыте <i className="fa-solid fa-arrow-right detail_right"></i></span>
                       </Link>
                   </div>
               </div>


               <div className="eight_part2">
                   <div className="video_div">
                       {/* Убрали /public из src */}
                       <video
                           className="video"
                           src="/proizvodstvo_iz_lafeta_woodhouse.mp4"
                           controls
                           muted
                           playsInline
                       />
                   </div>
               </div>

           </div>

            <div className={"nine_part"}>
                <div className={"nine_part1"}>
                    <span className={"standart_complectation_text"}>Преимущества</span>
                </div>

                <div className={"nine_part2"}>
                    <span className={"warm_contur_text"}>Почему выбирают WoodHouse</span>
                </div>

                <div className={"nine_part3"}>
                    {
                        nine.map((item, i) => (
                            <div key={i} className={"nine_cart"}>
                                <div className={"circle_nine_parth"}>
                                    <i className={item.icon}></i>

                                </div>
                                <span className={"title_for_nine"}>{item.title}</span>
                                <span className={"nine_intr"}>{item.intr}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={"ten_part"}>
                <div className={"portfolio_part"}>
                    <span className={"standart_complectation_text"}>Портфолио</span>
                </div>
                <div className={"construct_homes_div"}>
                    <span className={"warm_contur_text"}>
                      Построенные дома
                    </span>
                </div>
                <div className={"porfolio"}>
                    {portfolio.slice(0,3).map((house) => (
                        <div className={"portfoli_houses"}>
                            <div className={"images_portfoolio"}>
                                <img className={"img_portfolio"} src={house.img} alt=""/>
                            </div>
                            <div className={"portfolio_intr"}>
                                <span className={"house_name"}>{house.name}</span>
                                <span className={"see_objects"}>{house.moredetails}
                                    <i className="fa-solid fa-arrow-right portfolio_right"></i>
                                </span>

                            </div>
                        </div>
                        ))}
                </div>
                <div className={"all_objects_div"}>
                    <span className={"all_objects_text"}>Все объекты
                        <i className="fa-solid fa-arrow-right portfolio_right"></i>
                    </span>
                </div>
            </div>

            <div className={"eleven_part"}>
                <div className={"background_green"}>
                    <div className={"green1"}>
                        <div className={"green1_part1"}>
                            <div className={"financial_emergy"}>
                                <i className="fa-solid fa-shield"></i>
                                <span> Финансовая безопасность</span>
                            </div>
                        </div>
                        <div className={"green1_part2"}>
                            <span>Работаем через эскроу-счёт — ваши деньги под защитой банка</span>
                        </div>
                        <div className={"green1_part3"}>
                            <span>Мы получаем оплату только после изготовления домокомплекта. Никаких авансов, никаких рисков. Производим за свой счёт благодаря собственному производству.</span>
                        </div>
                        <div className={"green1_part4"}>
                            <div className={"safe_100"}>
                                <div className={"circle_icon"}>
                                    <i className="fa-solid fa-shield ic"></i>
                                </div>
                                <span className={"ic_text"}>100% защита банка</span>
                            </div>
                            <div className={"safe_100"}>
                                <div className={"circle_icon"}>
                                    <i className="fa-solid fa-industry ic"></i>
                                </div>
                                <span className={"ic_text"}>Своё производство</span>
                            </div>
                            <div className={"safe_100"}>
                                <div className={"circle_icon"}>
                                    <i className="fa-regular fa-clock ic"></i>
                                </div>
                                <span className={"ic_text"}>2 месяца до дома</span>
                            </div>

                        </div>




                    </div>

                    <div className={"green2"}>
                        <div className={"choose_project"}>
                            <span className={"choose"}>Узнать подробнее</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                        <span className={"non_dangerous"}>Безопасная сделка</span>
                    </div>

                </div>
            </div>

            <div className={"tvelwe_part"}>
                <div className={"twelve_part1"}>
                    <span className={"standart_complectation_text"}>Паспорт дома</span>
                </div>
                <div className={"twelve_part2"}>
                    <span className={"warm_contur_text"}>
                      Каждый дом — с документацией и регламентом
                    </span>
                </div>
                <div className={"twelve_part3"}>
                    <span className={"eight_part1_3_text"}>
                    Паспорт дома WoodHouse — комплект документов и регламент обслуживания, который выдаётся с каждым домом.
                    </span>
                </div>
                <div className={"passport_wood"}>
                    <div className={"passport_wood_part1"}>
                        <div className={"passport_wood_part1_1"}>
                            <span className={"eight_part1_3_text"}>
                            Внутри: инструкция по эксплуатации дома из норвежского лафета, календарь регламентных работ (осмотры, регулировки, обновление защитных покрытий, «тёплый шов» по необходимости) и сервисная история с отметками выполненных работ и рекомендациями. При соблюдении регламента — возможность расширенной гарантии и приоритетного сервиса.
                            </span>
                        </div>
                        <div className={"passport_wood_part1_2"}>
                            <i className="fa-solid fa-check green_icons"></i>
                            <span className={"text_specific"}>Понятный план: что и когда делать, чтобы дом служил десятилетиями</span>
                        </div>
                        <div className={"passport_wood_part1_3"}>
                            <i className="fa-solid fa-shield green_icons"></i>
                            <span className={"text_specific"}>Меньше рисков: предупреждение проблем с влагой, узлами, покрытиями</span>
                        </div>
                        <div className={"passport_wood_part1_4"}>
                            <i className="fa-regular fa-clock green_icons"></i>
                            <span className={"text_specific"}>Предсказуемое обслуживание: контроль состояния по графику</span>

                        </div>
                        <div className={"passport_wood_part1_5"}>
                            <i className="fa-regular fa-file green_icons"></i>
                            <span className={"text_specific"}>Удобно при продаже/наследовании: сервисная история повышает ценность</span>

                        </div>
                        <div className={"passport_wood_part1_6"}>
                            <i className="fa-solid fa-shield green_icons"></i>
                            <span className={"text_specific"}>Расширенная гарантия при соблюдении регламента обслуживания</span>


                        </div>
                        <div className={"detailes"}>
                            <span >Подробнее</span>
                        </div>
                    </div>


                    <div className={"passport_wood_part2"}>
                        <div className={"passport_wood_part2_1"}>
                            <div className={"passport_wood_part2_1_1"}>
                                <div className={"green_documents"}>
                                    <i className="fa-regular fa-file-lines "></i>
                                </div>
                            </div>
                            <div className={"passport_wood_part2_1_2"}>
                                <span className={"bold_text"}>Паспорт дома WoodHouse</span>
                                <span className={"nine_intr"}>Выдаётся с каждым домом</span>
                            </div>
                           <div className={"checked_divs"}>
                               <div className={"checked_greys"}>
                                   <i className="fa-solid fa-check green_icons"></i>
                                   <span className={"text_specific"}>Инструкция по эксплуатации</span>
                               </div>
                               <div className={"checked_greys"}>
                                   <i className="fa-solid fa-check green_icons"></i>
                                   <span className={"text_specific"}>Календарь регламентных работ</span>
                               </div>
                               <div className={"checked_greys"}>
                                   <i className="fa-solid fa-check green_icons"></i>
                                   <span className={"text_specific"}>Сервисная история</span>
                               </div>
                               <div className={"checked_greys"}>
                                   <i className="fa-solid fa-check green_icons"></i>
                                   <span className={"text_specific"}>Рекомендации по обработке древесины</span>
                               </div>
                           </div>
                        </div>
                    </div>

                </div>
            </div>

           <div className={"thrteen_part"}>
               <div className={"thrteen_part1"}>
                   <span className={"standart_complectation_text"}>Отзывы</span>
               </div>
               <div className={"thrteen_part2"}>
                <span className={"warm_contur_text"}>
                      Что говорят владельцы наших домов
                    </span>
               </div>
               <div className={"thrteen_part3"}>
                   {coment.map((coment, index) => (
                    <div className={"coment_div"}>
                        <div className={"comment_div1"}>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className={"coment_div2"}>
                            <span className={"coment_intr"}>{coment.intr}</span>
                        </div>
                        <div className={"grey_div1"}></div>
                        <div className={"coment_div3"}>
                            <div className={"coment_div3_1"}>
                                <i className="fa-solid fa-user coment_user "></i>
                            </div>
                            <div className={"coment_div3_2"}>
                              <span className={"commentator"}>{coment.author}</span>
                                <span className={"region_and_size"}>{coment.city}{coment.area}</span>

                            </div>

                        </div>
                    </div>
                   ))}
               </div>
           </div>

            <div className={"fourtheen_part"}>
                <div className={"fourtheen_part1"}>
                    <span className={"standart_complectation_text"}>Частые вопросы</span>
                </div>
                <div className={"fourtheen_part2"}>
                    <span className={"warm_contur_text"}>
                      Остались вопросы?
                    </span>
                </div>
                <div className={"fourtheen_part3"}>
                 <span className={"answer_questions"}>
                     Отвечаем на самые популярные вопросы о домах из лафета
                 </span>
                </div>
                <div className="fourtheen_part4"  >
                {
                    questions.map((item, index) => (

                    <div className="fourtheen_part4_1" key={item.id}>
                        <div className="wood_damage" onClick={() => togglePart(item.id)} >
            <span className="wood">
                {item.title}
            </span>
                            <div className="down_icon_div">
                                <i className={`fa-solid ${openId === item.id ? 'fa-angle-up activees' : 'fa-angle-down'}`}></i>
                            </div>
                        </div>

                        <div >
                            {openId === item.id && (
                            <div className="open_part_content">
                                <span className={"gapped_span"}>
                                    <span className={"color_bold"}>{item.text1} </span>
                                    <span className={"color_wait"}>{item.text2}</span>
                                </span><br/><br/>
                                <span className={"gapped_span"}>
                                    <span className={"color_bold"}>{item.text3}</span>
                                    <span className={"color_wait"}>{item.text4}</span>
                                </span><br/><br/>
                                <span className={"gapped_span"}>
                                    <span className={"color_bold"}>{item.text5}</span>
                                    <span className={"color_wait"}>{item.text6}</span>
                                </span>
                            </div>)}
                        </div>
                    </div>
                    ))}

                </div>

            </div>
<div className={"more_answers"}>
    <div className={"btn_more_answrs"}>
        <span>Больше ответов на вопросы</span>
        <span><i className="fa-solid fa-arrow-right answeright"></i></span>
    </div>
</div>

            <Letapply/>


  <div className={"sixteen_part"}>
    <Footer/>
  </div>

                                    </div>

                                    );
                                }

                                    export default Home;