import '../css/Producing.css';
import '../css/Menue1.css';
import Menue1 from './Menue1';
import { Routes, Route,Link } from 'react-router-dom'; // Импортируем только Routes и Route
import React, { useState} from 'react';
import Footer from "./Footer";
import Choose from "./Chooseproect";
import { useModalStore } from '../useModalStore';
function Producing(props) {
    const producing = [
        {
            title:"20",
            intr:"лет опыт в строительстве",
        },
        {
            title:"100+",
            intr:"домов",
        },
        {
            title:"ЧПУ",
            intr:"станки с числовым управлением",
        },
        {
            title:"50+",
            intr:"специалистов",
        }
    ]
    return (
        <div>
            <Choose/>
            <Menue1/>
            <div className={"Producing_part1"}>
                <div className={"production_div"}>Производство</div>
                <div className={"quality_Norvegia"}>Качество, признанное в Норвегии</div>
                <div className={"innderdiv_producing"}>
                    <div className={"innderdiv1_producing"}>
                        <span className={"producing_grey_text"}>Мы строим дома из норвежского лафета, качество которого высоко оценили на родине этой технологии, в Норвегии.</span>
                        <span className={"producing_grey_text"}>Наше предприятие начинало с производства и экспорта домокомплектов в страны Скандинавии и на зарубежные рынки. Первые дома нашего производства отправились именно в Норвегию, где местный технадзор отметил точность рубки. Этот опыт, высокие стандарты производства и отработанная логистика помогают нам строить дома по всей России, от Москвы до Хабаровска.</span>

                    </div>
                    <div className={"innderdiv2_producing"}>

                            <video autoPlay={true} className={"producing_video_div"} src="/productionfirstvideo.mp4"></video>
                    </div>
                </div>
            </div>
            <div className={"Producing_part2"}>
                {
                    producing.map((item,index)=>
                    <div className={"producing_cards"} key={index}>
                           <div className={"producing_cards_half1"}>{item.title}</div>
                        <div className={"producing_cards_half2"}>{item.intr}</div>

                    </div>
                    )
                }
            </div>
             <div className={"Producing_part3"}>
                 <div className={"Producing_part3_div1"}>
                     Понятный результат и меньше лишних затрат
                 </div>
                 <div className={"Producing_part3_div2"}>
                     <span className={"producing_grey_text"}>
                     Ровные стены снаружи и внутри сразу дают аккуратный, законченный вид, поэтому вам не придётся вкладывать деньги в сложную отделку. Вы получаете интерьер с натуральной фактурой дерева, который выглядит естественно и сразу создаёт уют.
                     </span>
                    <span className={"producing_grey_text"}>
                     Со временем древесина теряет влагу и даёт усадку, а норвежский замок становится плотнее с каждым годом. За счёт этого в соединениях остаётся меньше путей для поступления холода, поэтому дом лучше держит тепло и сохраняет комфортный микроклимат даже в мороз.
                    </span>
                 </div>
                 <div className={"Producing_part3_div3"}>Этапы нашего производства</div>

             </div>
            <div className={"produc_part4"}>
                <div className={"produc_part4_half1"}>
                    <img className={"warm-seam_img_produc"} src="/winter-forest.jpg" alt=""/>
                </div>

                <div className={"produc_part4_half2"}>
                    <div className={"part4_half2_div1_produc"}>
                        <div className={"number_one_div_produc"}>01</div>
                        <div className={"Norjevskih_200_produc"}>
                            Отборный зимний лес</div>
                        <div className={"Lafet_it_is_produc"}>
                            Мы заготавливаем древесину исключительно зимой. В этот период естественная влажность дерева минимальна. Что это даёт вам? Сруб из зимнего леса даёт более предсказуемую и равномерную усадку, брёвна значительно меньше подвержены деформации и глубоким трещинам при высыхании. Кроме того, «спящее» сухое дерево обладает природной стойкостью к грибку и синеве.
                        </div>
                        <div className={"lastdiv_produc4"}>
                            <div className={"politerm_div_produc"}>
                                <span className={"green_produc"}>Ноябрь – Март</span>
                                <span className={"grey_produc"}>Период остановки</span>
                                <span className={"grey_produc"}>сокодвижения</span>

                            </div>
                            <div className={"politerm_div_produc"}>
                                <span className={"green_produc"}>Ø от 32 см</span>
                                <span className={"grey_produc"}>Диаметр бревна</span>

                            </div>
                        </div>
                    </div>
                    <div className={"part4_half2_div2_produc"}>
                        <div className={"Norjevskih_2001_produc"}>Северная сосна</div>
                        <div className={"checked_div_produc"}>
                            <span className={"produc_span"}><i className="fa-solid fa-check check_produc"></i><span className={"produc_text"}>Отборная сосна северных регионов</span></span>
                            <span className={"produc_span"}><i className="fa-solid fa-check check_produc"></i><span className={"produc_text"}>Высокая плотность — минимальная деформация</span></span>
                            <span className={"produc_span"}><i className="fa-solid fa-check check_produc"></i><span className={"produc_text"}>Тонкие годовые кольца — равномерная усадка</span></span>
                            <span className={"produc_span"}><i className="fa-solid fa-check check_produc"></i><span className={"produc_text"}>Природная стойкость к биопоражениям</span></span>

                        </div>

                    </div>
                </div>

            </div>

            <div className={"produc_part5"}>

                <div className={"produc_part4_half2"}>
                    <div className={"part4_half2_div1_produc"}>
                        <div className={"number_one_div_produc"}>02</div>
                        <div className={"Norjevskih_200_produc5"}>
                            Бережная  термодинамическая  сушка</div>
                        <div className={"Lafet_it_is_produc"}>
                            Мы отказались от агрессивных конвективных камер, которые пересушивают и «рвут» массивный брус. Наш лафет проходит щадящую сушку в термодинамических сушильных камерах — они равномерно прогревают древесину изнутри, мягко выводя влагу и снимая внутреннее напряжение. Финальный этап остывания в закрытой камере («эффект термоса») снижает внутренние напряжения и повышает стабильность геометрии.
                        </div>
                        <div className={"lastdiv_produc4"}>
                            <div className={"politerm_div_produc"}>
                                <span className={"green_produc"}>7–12% / 20–25%</span>
                                <span className={"grey_produc"}>Идеальный баланс влажности</span>

                            </div>
                            <div className={"politerm_div_produc"}>
                                <span className={"green_produc"}>7–10 дней</span>
                                <span className={"grey_produc"}>Щадящий 3-этапный цикл</span>

                            </div>
                        </div>
                    </div>
                    <div className={"part4_half2_div2_produc"}>
                        <div className={"Norjevskih_2001_produc5"}>Что это даёт вашему дому</div>
                        <div className={"checked_div_produc"}>
                            <span className={"produc_span"}><i className="fa-solid fa-check check_produc"></i><span className={"produc_text"}>Идеальная геометрия — брус не скрутит «винтом», усадка минимальна</span></span>
                            <span className={"produc_span"}><i className="fa-solid fa-check check_produc"></i><span className={"produc_text"}>Эстетика без разрывов — нет глубоких сквозных трещин</span></span>
                            <span className={"produc_span"}><i className="fa-solid fa-check check_produc"></i><span className={"produc_text"}>Натуральная биозащита — сухая поверхность препятствует появлению грибка и плесени</span></span>

                        </div>

                    </div>
                </div>
                <div className={"produc_part4_half1"}>
                    <img className={"warm-seam_img_produc"} src="/kiln-drying.jpg" alt=""/>
                </div>


            </div>
            <div className={"produc_part4"}>
                <div className={"produc_part4_half1"}>
                    <img className={"warm-seam_img_produc"} src="/precision-processing.jpg" alt=""/>
                </div>

                <div className={"produc_part4_half2"}>
                    <div className={"part4_half2_div1_produc"}>
                        <div className={"number_one_div_produc"}>03</div>
                        <div className={"Norjevskih_200_produc5"}>
                            Ювелирная точность</div>
                        <div className={"Lafet_it_is_produc"}>
                            Клиновидный «норвежский замок» — одно из самых сложных соединений в деревянном домостроении. Для его идеальной работы важен каждый миллиметр. Поэтому все профили и соединительные чаши мы вырезаем на высокоточных станках с ЧПУ. Это гарантирует безупречную геометрию каждой детали — венцы смыкаются плотно, а замок при усадке заклинивается намертво, не оставляя ни единой щели.
                        </div>
                        <div className={"lastdiv_produc4"}>
                            <div className={"politerm_div_produc"}>
                                <span className={"green_produc"}>0.1 мм</span>
                                <span className={"grey_produc"}>Точность выпила чаши</span>

                            </div>
                            <div className={"politerm_div_produc"}>
                                <span className={"green_produc"}>ЧПУ</span>
                                <span className={"grey_produc"}>Высокая точность обработки</span>

                            </div>
                        </div>
                    </div>
                    <div className={"part4_half2_div2_produc"}>
                        <div className={"Norjevskih_2001_produc5"}>Преимущества ЧПУ</div>
                        <div className={"checked_div_produc"}>
                            <span className={"produc_span"}><i className="fa-solid fa-check check_produc"></i><span className={"produc_text"}>Минимизирует риск производственных ошибок — машина не устаёт и не ошибается</span></span>
                            <span className={"produc_span"}><i className="fa-solid fa-check check_produc"></i><span className={"produc_text"}>Сборка как Lego — без ручной подгонки кувалдой
</span></span>
                            <span className={"produc_span"}><i className="fa-solid fa-check check_produc"></i><span className={"produc_text"}>Замок клинится при усадке и самоуплотняется</span></span>

                        </div>

                    </div>
                </div>

            </div>

            <div className={"produc_part5"}>

                <div className={"produc_part4_half2"}>
                    <div className={"part4_half2_div1_produc"}>
                        <div className={"number_one_div_produc"}>04</div>
                        <div className={"Norjevskih_200_produc5"}>

                            Контрольная сборка</div>
                        <div className={"Lafet_it_is_produc"}>
                            Перед отправкой каждый дом полностью собирается в цеху. Мы проверяем геометрию, плотность соединений, маркируем каждый элемент. Риск ошибок на участке исключён.
                        </div>
                        <div className={"lastdiv_produc4"}>
                            <div className={"politerm_div_produc"}>
                                <span className={"green_produc"}>100%</span>
                                <span className={"grey_produc"}>Контроль качества</span>

                            </div>
                            <div className={"politerm_div_produc"}>
                                <span className={"green_produc"}>Каждый дом</span>
                                <span className={"grey_produc"}>Собираем до отправки</span>

                            </div>
                        </div>
                    </div>
                    <div className={"part4_half2_div2_produc"}>
                        <div className={"Norjevskih_2001_produc5"}>Что проверяем</div>
                        <div className={"checked_div_produc"}>
                            <span className={"produc_span"}><i className="fa-solid fa-check check_produc"></i><span className={"produc_text"}>Проверка всех узлов и соединений</span></span>
                            <span className={"produc_span"}><i className="fa-solid fa-check check_produc"></i><span className={"produc_text"}>Маркировка каждого элемента</span></span>
                            <span className={"produc_span"}><i className="fa-solid fa-check check_produc"></i><span className={"produc_text"}>Детальный фотоотчёт</span></span>
                            <span className={"produc_span"}><i className="fa-solid fa-check check_produc"></i><span className={"produc_text"}>Документируем каждый шаг в
                                <Link to={"/Passport"} className={"passport_link"}>Паспорт дома</Link></span></span>


                        </div>

                    </div>
                </div>
                <div className={"produc_part4_half1"}>
                    <img className={"warm-seam_img_produc"} src="/control-assembly.jpg" alt=""/>
                </div>


            </div>
            <Link className={"linktoa"} to="/Contacts" >
                <div className={"texno_part5"}>
                    <div className={"texno_part5_inner"}>
                        <span className={"inner_title"}>Приезжайте на строящиеся объекты</span>
                        <span className={"inner_intr"}>Убедитесь в качестве лично. Покажем организацию работ, культуру сборки и готовые узлы перед сдачей.</span>
                        <div className={"zapisatca"}>Записаться на экскурсию</div>
                    </div>

                </div>
            </Link>
            <Footer/>
        </div>
    );
}

export default Producing;