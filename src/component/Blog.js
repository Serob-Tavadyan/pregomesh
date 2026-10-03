import React, { useState } from 'react';
import '../css/Blog.css';
import Menue1 from "./Menue1";
import TreshchinyVLafete from "./TreshchinyVlafete";
import Footer from "./Footer";
import {Link} from "react-router-dom";
function Blog(props) {
    const [menue, setMenue] = useState([
        {
            id: 1,
            img:"/blog1.webp",
            date:"18 июля 2026 г.",
            title:"Трещины в лафете: естественная особенность дерева или строительный дефект?",
            description:"Трещины в лафете: норма или дефект | WoodHouse",
            hxum:"/TreshchinyVLafete"
        },
        {
            id: 2,
            img:"/blog2.webp",
            date:"11 марта 2026 г.",
            title:"Почему камерная сушка древесины критически важна при производстве лафета (норвежского бруса)",
            description:"Щадящая термодинамическая сушка в несколько этапов",
        },
        {
            id: 3,
            img:"/blog3.webp",
            date:"18 марта 2026 г.",
            title:"Почему строительство из лафета считается одним из самых эффективных",
        }

    ]);
    return (
        <div>
            <div className={"first_parts"}>
                <Menue1/>
                <div className={"first_parts1"}>
                    <span className={"title"}>Блог WoodHouse</span>
                    <span className={"intr"}>Статьи о строительстве домов из лафета, технологиях и полезные советы</span>
                </div>
            </div>
            <div className={"secondd_part"}>
                {
                    menue.map((item, i) => (

                        <div key={i} className={"blog_card"}>
                            <Link to={item.hxum}  className={"link"}>

                        <div className={"part1"}>
                            <img className={"img"} src={item.img} alt=""/>
                        </div>
                            <div className={"date_div"}>
                                {item.date}
                            </div>
                         <div className={"title_div"}>
                             {item.title}
                         </div>
                            <div className={"description_div"}>
                                {item.description}
                            </div> </Link>
                        </div>

                    ))
                }
            </div>
            <Footer/>
        </div>
    );
}

export default Blog;