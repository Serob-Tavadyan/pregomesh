import '../css/Faq.css';
import '../css/Menue1.css';
import Menue1 from './Menue1';
import { Routes, Route,Link } from 'react-router-dom'; // Импортируем только Routes и Route
import React, { useState} from 'react';
import Footer from "./Footer";
import { useModalStore } from '../useModalStore';
import Choose from "./Chooseproect";

function Faq(props) {
    const faq = [
        { id: 1, title: 'Дерево гниёт — как защищаете от гниения?', text1: 'Понимаем ваше беспокойство —',text2:'это один из главных вопросов при выборе деревянного дома.',text3:'Как делаем:',text4:'Мы снимаем заболонь — мягкий наружный слой древесины, который подвержен гниению. Остаётся ядровая древесина (сердцевина), которая от природы устойчива к биопоражениям благодаря высокому содержанию смол.',text5:'Дополнительная защита: ',text6:'Обрабатываем транспортной пропиткой Неомид 440. При правильном проекте (свесы кровли, высокий цоколь) и грамотном монтаже дом служит 100+ лет.', },
        { id: 2, title: 'Миф о «защитном слое» — зачем снимаете заболонь?', text1: 'Распространённый миф:',text2:'заболонь якобы защищает древесину. На самом деле всё наоборот.',text3:'Факт:',text4:'Заболонь — молодой, рыхлый слой с низким содержанием смол. Именно он первым поражается грибком, синевой и насекомыми. Ядро — плотное, смолистое, естественно защищённое.' + 'Дом из ядровой древесины служит дольше и требует меньше химии.'},
        { id: 3, title:'Чем обрабатываете древесину? Нужно ли красить?', text1: 'Транспортная пропитка: ',text2:' Неомид 440 — защита на время хранения и транспортировки.',text3:'Финишная обработка:',text4:' Рекомендуем масло или лазурь для наружных работ (Biofa, Osmo, Tikkurila). Это защищает от УФ-выгорания и влаги.',text5:'Периодичность: ',text6:'Наружную обработку обновляют раз в 5–7 лет. Внутри дома — по желанию, можно оставить натуральное дерево. ',},
        { id: 4, title:'Норвежский замок — почему не дует в углах?', text1: 'Бриллиантовая чаша — ',text2:'это самозаклинивающийся замок. При усадке дома (естественном процессе для дерева) замок уплотняется под собственным весом венцов. Чем дольше стоит дом — тем плотнее углы.',text4:' В сочетании с межвенцовым утеплителем (Политерм) и финальным тёплым швом продувание исключено полностью.',},
        { id: 5, title: 'Достаточно ли 200 мм толщины стены?', text1: 'Да, для большинства регионов России.',text2:'Массив дерева работает как теплоаккумулятор: накапливает тепло и медленно его отдаёт, сглаживая перепады температур.',text4:'Основные теплопотери в любом доме идут через крышу и окна, а не через стены. Поэтому мы рекомендуем хорошее утепление кровли (250–300 мм).',},
        { id: 6, title:'Что такое тёплый шов?', text2: 'Герметизация межвенцовых швов эластичным акриловым герметиком.',text3:'• ',text4:'Защищает от продувания и влаги.',text5:'• ',text6:'Эстетично выглядит.',text7:'•',text8:'Эластичен — не трескается при движении дерева.',text9:'•    ',text10:'   Срок службы 20+ лет.'},
        { id: 7, title:'Трещины в брёвнах — это нормально?', text1: 'Да, это естественный процесс.',text2:'Древесина сохнет неравномерно, возникают напряжения, которые выходят через трещины.',text3:'Важно:',text4:'Камерная сушка минимизирует их количество и раскрытие, но не убирает полностью. Трещины в лафете не сквозные и не влияют на тепло. Если вас смущает эстетика, их легко скрывает герметик (тёплый шов).',},
        { id: 8, title: 'Почему лафет дороже бруса?', text1: 'Сравнивать нужно стоимость готового дома, а не только стен.',text2:'Лафет — это финишная стена. Ему не нужна отделка (гипсокартон, обои, сайдинг) и дополнительное утепление. В итоге цена «под ключ» сопоставима с качественным каркасником или клееным брусом, но вы получаете настоящий массив дерева.',},
        { id: 9, title:'Сроки строительства?', text1: 'Производство домокомплекта:',text2:' в среднем ≈ 1 месяц. Благодаря запасам готового лафета, дом быстро поступает в производство.',text3:'Монтаж на участке:',text4:'в среднем ≈ 1 месяц (включая сборку стен, кровлю с утеплением).',text6:'Итого тёплый контур готов примерно за 2 месяца. Сроки зависят от проекта и сезона — финально фиксируются после согласования.',},
        { id: 10, title:' Как посмотреть ваши дома вживую? Можно посетить стройку?', text2: 'Да, конечно. Мы регулярно проводим экскурсии на наши строящиеся объекты в Московской и Ленинградской областях, а также по всей России. Это лучший способ оценить качество сборки, пообщаться с прорабами и увидеть «внутрянку» процесса. Если вы далеко — можем организовать онлайн-экскурсию по видеосвязи. Запишитесь через форму или по телефону.'},



    ];
    const togglePart = (id) => {
        setOpenId(openId === id ? null : id);
    };
    const [openId, setOpenId] = React.useState(null);
    const setChoose = useModalStore((state) => state.setChoose);
    return (
        <div>
            <Choose/>
            <Menue1/>
            <div className={"part1_faq"}>
                <div className={"part1_div1"}>FAQ</div>
                <div className={"part1_div2"}>Вопросы и ответы</div>
                <div className={"part1_div3"}>Развеиваем мифы о деревянных домах и отвечаем на самые частые вопросы о строительстве из лафета.</div>
            </div>
            <div className={"part2_faq"}>
                <div className={"part2_div1"}>
                    <span className={"div1_number_one"}>01.</span>
                    <span className={"material_and_protect"}>Материал и защита</span>
                </div>
                <div className="part2_div2"  >
                    {
                        faq.slice(0, 3).map((item, index) => (

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
                <div className={"part2_div1"}>
                    <span className={"div1_number_one"}>02.</span>
                    <span className={"material_and_protect"}>Технология и тепло</span>
                </div>
                <div className="part2_div2"  >
                    {
                        faq.slice(3, 6).map((item, index) => (

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
                                </span><br/><br/>
                                            <span className={"gapped_span"}>
                                    <span className={"color_bold"}>{item.text7}</span>
                                    <span className={"color_wait"}>{item.text8}</span>
                                </span><br/><br/>
                                            <span className={"gapped_span"}>
                                    <span className={"color_bold"}>{item.text9}</span>
                                    <span className={"color_wait"}>{item.text10}</span>
                                </span><br/><br/>
                                        </div>)}
                                </div>
                            </div>
                        ))}
                </div>
                <div className={"part2_div1"}>
                    <span className={"div1_number_one"}>03.</span>
                    <span className={"material_and_protect"}>Опасения</span>
                </div>
                <div className="part2_div2"  >
                    {
                        faq.slice(6, 8).map((item, index) => (

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
                <div className={"part2_div1"}>
                    <span className={"div1_number_one"}>04.</span>
                    <span className={"material_and_protect"}>Опасения</span>
                </div>
                <div className="part2_div2"  >
                    {
                        faq.slice(8,10).map((item, index) => (

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
            <div className={"part3"}>
                <div className={"part3_div1"}>
                    <span className={"do_you_have_any_questions"}>Остались вопросы?</span>
                    <span className={"write_us"}>Напишите нам или закажите звонок. Инженер лично <br/> проконсультирует вас по проекту.</span>
                    <div className={"part3_last_div"}>
                        <div className={"give_question_btn"}>
                            {/* Оставляем только чистый Link, без li */}

                            <Link to="/Contacts" className={"my-navbar_project_aa"}>
                                Задать вопрос
                            </Link>
                        </div>

                        <div className={"take_choose_project"} onClick={() => setChoose(true)} >
                            Подобрать проект
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Faq;