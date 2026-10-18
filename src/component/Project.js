import '../css/Project.css';
import '../css/Menue1.css';
import amData from '../data/am.json';
import ruData from '../data/ru.json';
import enData from '../data/en.json';
import initialProjects from '../data/project.json';
import Menue1 from './Menue1';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from "./Footer";
import Select from 'react-select';
import React, { useState, useMemo } from 'react';
import Choose from "./Chooseproect";
import { useModalStore } from '../useModalStore';
const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderColor: state.isFocused ? '#BCBCBB' : '#BCBCBB',
        boxShadow: state.isFocused ? '0 0 0 1px #28a745' : 'none',
        padding: '2px',
        width: '280px',
        minHeight: '45px',
        borderRadius: '12px',
        fontFamily: '"outfit", "Inter", sans-serif',
        fontSize: '14.5px',
        fontWeight: '550',
        transition: '0.3s ease',
        cursor: 'pointer',
        '&:hover': {
            borderColor: state.isFocused ? '#7E8B65' : '#7E8B65',
            backgroundColor: state.isFocused ? ' #F6F9F0' : '#F6F9F0',
        }
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? 'white' : state.isFocused ? '#F4F6F1' : 'white',
        color: state.isSelected ? 'black' : '#333',
        cursor: 'pointer',
        fontFamily: "'Outfit', 'Inter', sans-serif",
        fontSize: '14px',
        WebkitTapHighlightColor: 'transparent', // убирает синюю вспышку на смартфонах

        // Переписываем поведение при клике (зажатии мышки), чтобы цвет оставался как при фокусе
        ':active': {
            backgroundColor: state.isSelected ? 'white' : '#F4F6F1',
        }
    })
};

function Project(props) {
    const setChoose = useModalStore((state) => state.setChoose);

    const [isSelected, setIsSelected] = useState('all');
    const [area, setArea] = useState('all');
    const [floors, setFloors] = useState('all');
    const [bedrooms, setBedrooms] = useState('all');

    // 2. Массивы данных для react-select
    const areaOptions = [
        { value: 'all', label: 'Любая площадь' },
        { value: '100', label: 'До 100 м²' },
        { value: '200', label: '100 - 200 м²' },
        { value: 'more', label: 'Более 200 м²' }
    ];

    const floorOptions = [
        { value: 'all', label: 'Любая' },
        { value: '1', label: '1 этаж' },
        { value: '2', label: '2 этажа / мансарда' }
    ];

    const bedroomOptions = [
        { value: 'all', label: 'Любое кол-во' },
        { value: '1', label: '1-2 спальни' },
        { value: '2', label: '2 спальни' },
        { value: '3', label: '4 и более' }
    ];

    const langPack = ruData.catalog;

    // 3. Оптимизированная фильтрация проектов по всем параметрам с использованием useMemo
    // 3. Оптимизированная фильтрация проектов по всем параметрам с использованием useMemo
    const filteredProjects = useMemo(() => {
        return initialProjects.filter(house => {
            // 1. Умный фильтр по главным вкладкам (Все, Дома, Бани, Глэмпинг, Гаражи)
            if (isSelected !== 'all') {
                // Եթե սեղմել ենք «Глэмпинг» բաժնի վրա
                if (isSelected === 'glamping') {
                    // Ցույց տալ միայն նրանց, ում մոտ "isGlamping"-ը true է
                    if (!house.isGlamping) return false;
                }
                // Եթե սեղմել ենք «Дома» բաժնի վրա
                else if (isSelected === 'houses') {
                    // Ցույց տալ սովորական տները, բայց թաքցնել գլեմպինգները, որ չկրկնվեն
                    if (house.isGlamping) return false;
                    if (house.category !== 'houses') return false;
                }
                // Մնացած բոլոր բաժինների համար (Бани, Гаражи) թողնում ենք ստանդարտ ստուգումը
                else if (house.category !== isSelected) {
                    return false;
                }
            }

            // 2. Фильтр по площади
            if (area !== 'all') {
                const houseArea = parseFloat(house.area);
                if (area === '100' && houseArea > 100) return false;
                if (area === '200' && (houseArea < 100 || houseArea > 200)) return false;
                if (area === 'more' && houseArea <= 200) return false;
            }

            // 3. Фильтр по этажности (игнорируется для гаражей)
            if (isSelected !== 'garages' && floors !== 'all') {
                if (house.floors !== Number(floors)) return false;
            }

            // 4. Фильтр по спальням (игнорируется для гаражей и бань)
            if (isSelected !== 'garages' && isSelected !== 'baths' && bedrooms !== 'all') {
                if (house.bedrooms !== Number(bedrooms)) return false;
            }

            return true;
        });
    }, [isSelected, area, floors, bedrooms]); // Запускается только при изменении этих стейтов

    // Функция переключения вкладок со сбросом внутренних селектов
    const toggleParp = (val) => {
        setIsSelected(val);
        setArea('all');
        setFloors('all');
        setBedrooms('all');
    };

    return (
        <div>
            <Choose/>
           <Menue1/>
            <div className={"Part1_project"}>Каталог</div>
            <div className={"Part2_project"}>Проекты домов и бань</div>
            <div className={"Part3_project"}>Готовые проекты из норвежского лафета 200×300 мм. Любой можно адаптировать под ваши требования.</div>
            <div className={"Part4_project"}>
                <div className={"Part4_project_inner"}>
                    <div className={"Part4_project_inner1"}>
                        <span className={"Part4_project_inner1_bold"}>Не знаете, какой проект выбрать?</span>
                        <span className={"Part4_project_inner1_light" }>Ответьте на 9 вопросов — подберём идеальный вариант.</span>
                    </div>
                    <div className={"Part4_project_inner2" }>
                        <div className="Part4_project_inner2_green" onClick={() => setChoose(true)}> Подобрать проект</div>
                    </div>
                </div>
            </div>
            <div className={"Part6_project"}>
                <div className={"selecter_Part6_project"}>
                    <div className={"selecter_Part6_project_inner1"}>
                        <div
                            className={isSelected === 'all' || isSelected === false ? 'selecter_Part6_project_inner1_all_active' : 'selecter_Part6_project_inner1_all'}
                            onClick={() => toggleParp('all')}
                        >
                            <i className="fa-solid fa-border-all mug"></i>
                            <span className={"part6_inner_bold"}>Bсе</span>
                            <span className={"qount_select"}>98</span>
                        </div>
                        <div
                            className={isSelected === 'houses' ? 'selecter_Part6_project_inner1_all_active' : 'selecter_Part6_project_inner1_all'}
                            onClick={() => toggleParp('houses')}
                        >
                            <i className="fa-solid fa-house mug"></i>
                            <span className={"part6_inner_bold"}> Дома</span>
                            <span className={"qount_select"}>62</span>
                        </div>
                        <div
                            className={isSelected === 'baths' ? 'selecter_Part6_project_inner1_all_active' : 'selecter_Part6_project_inner1_all'}
                            onClick={() => toggleParp('baths')}
                        >
                            <i className="fa-solid fa-bath mug"></i>
                            <span className={"part6_inner_bold"}> Бани </span>
                            <span className={"qount_select"}>34</span>
                        </div>
                        <div
                            className={isSelected === 'glamping' ? 'selecter_Part6_project_inner1_all_active' : 'selecter_Part6_project_inner1_all'}
                            onClick={() => toggleParp('glamping')}
                        >
                            <i className="fa-regular fa-gem mug"></i>
                            <span className={"part6_inner_bold"}>Глэмпинг</span>
                            <span className={"qount_select"}>21</span>
                        </div>
                        <div
                            className={isSelected === 'garages' ? 'selecter_Part6_project_inner1_all_active' : 'selecter_Part6_project_inner1_all'}
                            onClick={() => toggleParp('garages')}
                        >
                            <i className="fa-solid fa-warehouse mug"></i>
                            <span className={"part6_inner_bold"}>Беседки/Гаражи</span>
                            <span className={"qount_select"}>6</span>
                        </div>
                        <div className={"selecter_Part6_project_inner1_homes"}>
                        </div>
                    </div>

                    <div className={"selecter_Part6_project_inner2"}>
                        {/* Մակերեսը երևում է միշտ */}
                        <div className={"area_project"}>
                            <label className={"area_project_bold"}>ПЛОЩАДЬ</label>
                            <Select
                                key={`area-${isSelected}`}
                                options={areaOptions}
                                defaultValue={areaOptions}
                                onChange={(selected) => setArea(selected.value)}
                                styles={customStyles}
                                isSearchable={false}
                            />
                        </div>

                        {/* Հարկերը թաքնվում են, եթե ընտրված է Гаражи բաժինը */}
                        {isSelected !== 'garages' && (
                            <div className={"Number_of_floors"}>
                                <label className={"area_project_bold"}>Этажность</label>
                                <Select
                                    key={`floors-${isSelected}`}
                                    options={floorOptions}
                                    defaultValue={floorOptions}
                                    onChange={(selected) => setFloors(selected.value)}
                                    styles={customStyles}
                                    isSearchable={false}
                                />
                            </div>
                        )}

                        {/* Ննջասենյակները թաքնվում են, եթե ընտրված է Гаражи կամ Бани բաժինը */}
                        {isSelected !== 'garages' && isSelected !== 'baths' && (
                            <div className={"bedrooms"}>
                                <label className={"area_project_bold"}>Спальни</label>
                                <Select
                                    key={`bedrooms-${isSelected}`}
                                    options={bedroomOptions}
                                    defaultValue={bedroomOptions}
                                    onChange={(selected) => setBedrooms(selected.value)}
                                    styles={customStyles}
                                    isSearchable={false}
                                />
                            </div>
                        )}
                    </div>

                    <div className={"selecter_Part6_project_inner3"}>
                        <div className={"selecter_Part6_project_inner3_1"}>
                            <span className={"part6_inner_bold"}>Найдено: </span>
                            <span className={"part6_inner_green"}>{filteredProjects.length}</span>
                            <span className={"part6_inner_bold"}> проекта</span>
                        </div>

                        {/* Кнопка сброса с гарантированным изменением цвета через style */}
                        <div
                            className={"selecter_Part6_project_inner3_2"}
                            onClick={() => toggleParp('all')}
                            style={{
                                color: (isSelected !== 'all' || area !== 'all' || floors !== 'all' || bedrooms !== 'all') ? '#000000' : '#CCCCCC',
                                opacity: 1, // сбрасываем прозрачность из старого CSS, если она там была
                                cursor: (isSelected !== 'all' || area !== 'all' || floors !== 'all' || bedrooms !== 'all') ? 'pointer' : 'default',
                                pointerEvents: (isSelected !== 'all' || area !== 'all' || floors !== 'all' || bedrooms !== 'all') ? 'auto' : 'none'
                            }}
                        >
                            <span><i style={{"fontSize":"13px"}} className="fa-solid fa-rotate-left"></i></span>
                            <span>  Сбросить</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className={"Part5_project"}>
                {filteredProjects.map((house) => {
                    const projectText = langPack.projects[house.id] || { name: house.id, intro: "" };
                    return (
                        <div key={house.id} className={"products"}>
                            {/* 1. Блок картинки */}
                            <div className={"product_image_div"}>
                                <img className={"house_img"} src={house.image} alt={projectText.name} />
                            </div>

                            {/* 2. Блок названия */}
                            <div className={"names_div"}>
                                <span className={"house_name"}>{projectText.name}</span>
                            </div>

                            {/* 3. Блок описания */}
                            <div className={"intr_div"}>
                                <span className={"house_intr"}>{projectText.intro}</span>
                            </div>

                            {/* 4. Блок технических параметров */}
                            <div className={"inform_div"}>
                                <div className={"square_metr"}>
                                    <i style={{"color":"#9A938D","fontSize":"14px",}} className="fa-solid fa-ruler-combined"></i>
                                    <span className={"area"}>{house.area}</span>
                                    <span className={"metr_sqrt"}> {langPack.common.meters}</span>
                                </div>

                                <div className={"floor_qount"}>
                                    <i className="fa-solid fa-house"></i>
                                    <span className={"floors_count"}>{house.floors}</span>
                                    <span className={"floorstext"}> {langPack.common.floor}</span>
                                </div>

                                <div className={"rooms_qount"}>
                                    <i className={house.category === 'baths' ? 'fa-solid fa-hot-tub-person' : 'fa-solid fa-bed'}></i>
                                    <span className={"bedrooms_count"}>
                                        {house.category === 'baths'
                                            ? 'Баня'
                                            : `${house.bedrooms} ${langPack.common.bedrooms}`
                                        }
                                    </span>
                                </div>
                            </div>

                            {/* 5. Блок цены */}
                            <div className={"price_div"}>
                                <span className={"price_div_green"}> ~ </span>
                                <span className={"price_div_green"}> {house.price ? house.price.toLocaleString('ru-RU') : '0'} </span>
                                <span className={"price_div_green"}> {langPack.common.currency}</span>

                                <div className={"exclamation"}>
                                    <i className="fa-solid fa-exclamation"></i>
                                    <div className={"tooltip_popup"}>
                                        {langPack.common.tooltip}
                                    </div>
                                </div>
                            </div>

                            {/* 6. Блок кнопки */}
                            <div className={"detail_inform"}>
                                <div className={"detail_btn"}>
                                    {langPack.common.moredetails}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
<div className={"Part7_project"}>
    <div className={"Part7_project_inner"}>
        <span className={"do_you_have_own_projects"}>Есть свой проект?</span>
        <span className={"Send_your_plans"}>Присылайте планировку — рассчитаем стоимость и предложим варианты оптимизации.</span>

       <Link style={{"textDecoration":"none"}} to={"/Contacts"}>
           <div className={"send_btn_project"}> Отправить проект на расчёт</div>
       </Link>
    </div>
</div>

            <Footer/>
        </div>
    );
}

export default Project;