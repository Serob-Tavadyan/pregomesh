import '../css/Texnologia.css';
import '../css/Menue1.css';
import '../css/Home.css';
import Menue1 from './Menue1';
import Letapply from "./Letapply";
import { Routes, Route,Link } from 'react-router-dom'; // Импортируем только Routes и Route
import React, { useState} from 'react';
import Footer from "./Footer";
import Choose from "./Chooseproect";
import { useModalStore } from '../useModalStore';
function Texnologia(props) {
    return (
        <div>
            <Choose/>
            <div className={"texno_part1"}>
                <Menue1></Menue1>
                <div className={"texno_part1_first"}>
                    <div className={"texnologia_div"}>Технология</div>
                    <div className={"why_home_maded_div"}>
                        Почему дома из лафета —
                        это надёжно и тепло
                    </div>
                    <div className={"Norvejskih_div"}>Норвежский лафет — массивный профилированный брус с уникальным угловым соединением. Разбираем ключевые элементы технологии.</div>
                </div>
            </div>
           <div className={"texno_part2"}>
               <div className={"texno_part2_half1"}>
                   <img className={"blog3_texno"} src="/lafet-technology.jpg" alt=""/>
               </div>
               <div className={"texno_part2_half2"}>
                   <div className={"half2_div1"}>
                       <div className={"number_one_div"}>01</div>
                       <div className={"Norjevskih_200"}>Норвежский лафет 200×300 мм</div>
                       <div className={"Lafet_it_is"}>Лафет — это бревно, обтёсанное с двух сторон до прямоугольного сечения. Толщина стены 200 мм обеспечивает достаточную теплоизоляцию для круглогодичного проживания без дополнительного утепления.</div>
                       <div className={"checked_div_texno"}>
                           <span className={"texno_span"}><i className="fa-solid fa-check check_texno"></i><span className={"texno_text"}>Высокая теплоёмкость массива</span></span>
                           <span className={"texno_span"}><i className="fa-solid fa-check check_texno"></i><span className={"texno_text"}>Ровные стены изнутри и снаружи</span></span>
                           <span className={"texno_span"}><i className="fa-solid fa-check check_texno"></i><span className={"texno_text"}>Не требует отделки</span></span>
                           <span className={"texno_span"}><i className="fa-solid fa-check check_texno"></i><span className={"texno_text"}>Естественная регуляция влажности</span></span>
                       </div>
                   </div>
                   <div className={"half2_div2"}>
                       <span className={"vhy_sosna"}>Почему сосна?</span>
                       <span className={"texno_text1"}>Сосна — оптимальный баланс прочности, лёгкости и цены. Высокое содержание смол обеспечивает естественную защиту от влаги и насекомых. Мы используем северную сосну с плотной структурой волокон.</span>
                   </div>
               </div>
           </div>
            <div className={"texno_part3"}>
                <div className={"texno_part3_half1"}>
                    <div className={"half1_innerdiv"}>
                        <div className={"number_one_div"}>02</div>
                        <div className={"Norjevskih_200"}>Бриллиантовая чаша</div>
                        <div className={"Lafet_it_is"}>Уникальное угловое соединение с самозаклинивающимся эффектом. В отличие от традиционной «чаши» или «лапы», бриллиантовая чаша уплотняется при усадке дома.</div>
                        <div className={"part3_div4"}>
                            <span className={"green_texno"}>Как это работает?</span>
                            <span className={"grey_texno"}>Под весом венцов замок уплотняется — угловые соединения становятся плотнее со временем. Продувание в углах исключено конструктивно.</span>
                        </div>
                        <div className={"checked_div_texno"}>
                            <span className={"texno_span"}><i className="fa-solid fa-check check_texno"></i><span className={"texno_text"}>Самоуплотнение при усадке</span></span>
                            <span className={"texno_span"}><i className="fa-solid fa-check check_texno"></i><span className={"texno_text"}>Нет продувания в углах</span></span>
                            <span className={"texno_span"}><i className="fa-solid fa-check check_texno"></i><span className={"texno_text"}>Традиционная норвежская технология</span></span>
                        </div>
                    </div>
                    <div className={"half2_innerdiv2"}>
                        <span className={"vhy_sosna"}>Точность изготовления</span>
                        <span className={"grey_texno"}>Соединение вырезается на станках ЧПУ с точностью до 0.1 мм. Каждый венец идеально прилегает к предыдущему. Контрольная сборка на производстве гарантирует отсутствие ошибок.</span>
                    </div>
                </div>

                <div className={"texno_part3_half2"}>
                    <div className={"half2_inner2div"}>
                        <img className={"img_diamond-bowl"} src="/diamond-bowl.png" alt=""/>
                    </div>
                </div>

            </div>
             <div className={"texno_part4"}>
                 <div className={"texno_part4_half1"}>
                     <img className={"warm-seam_img"} src="/warm-seam.jpg" alt=""/>
                 </div>

                 <div className={"texno_part4_half2"}>
                     <div className={"part4_half2_div1"}>
                         <div className={"number_one_div"}>03</div>
                         <div className={"Norjevskih_200"}>Межвенцовый утеплитель</div>
                         <div className={"Lafet_it_is"}>Между венцами укладывается современный утеплитель Политерм Профи. В отличие от традиционных материалов (мох, джут), он не впитывает влагу, не слёживается и сохраняет свойства десятилетиями.</div>
                       <div className={"lastdiv_texno4"}>
                           <div className={"politerm_div"}>
                               <span className={"green_texno"}>Политерм Профи</span>
                               <span className={"grey_texno"}>Полиэфирное волокно. Не гниёт, не привлекает грызунов.</span>
                           </div>
                           <div className={"politerm_div"}>
                               <span className={"green_texno"}>Срок службы</span>
                               <span className={"grey_texno"}>Не теряет свойств 50+ лет. Не требует конопатки.</span>

                           </div>
                       </div>
                     </div>
                     <div className={"part4_half2_div2"}>
                         <div className={"number_one_div"}>04</div>
                         <div className={"Norjevskih_2001"}>Тёплый шов</div>
                         <div className={"grey_texnos"}>Финальная герметизация межвенцовых швов эластичным герметиком. Защищает от продувания, влаги и насекомых. Маскирует естественные трещины.</div>
                         <div className={"checked_div_texno"}>
                             <span className={"texno_span"}><i className="fa-solid fa-check check_texno"></i><span className={"texno_text"}>Самоуплотнение при усадке</span></span>
                             <span className={"texno_span"}><i className="fa-solid fa-check check_texno"></i><span className={"texno_text"}>Нет продувания в углах</span></span>
                             <span className={"texno_span"}><i className="fa-solid fa-check check_texno"></i><span className={"texno_text"}>Традиционная норвежская технология</span></span>
                         </div>

                     </div>
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

export default Texnologia;