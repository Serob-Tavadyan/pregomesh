import '../css/Contacts.css';
import '../css/Menue1.css';
import '../css/Home.css';
import Menue1 from './Menue1';
import Letapply from "./Letapply";
import Choose from "./Chooseproect";
import { useModalStore } from '../useModalStore';
import React, { useState} from 'react';
import Menue from "./Menue";
import Footer from "./Footer";
function Contacts(props) {

const [contacts, setContacts] = useState([
    {
        id: 1,
        icon:"fa-solid fa-phone",
        title:"Телефон",
        contact:"8 800 550-90-88",
        lasttext: "Бесплатно по России",
    },
    {
        id: 2,
        icon:"fa-regular fa-envelope",
        title:"Email",
        contact:"info@woodhouse.ltd",
        lasttext: "Для заявок и вопросо Ответим в течение 24 часов",
    },
]);
    return (
        <div>
            <Choose/>
            <div className={"about_company_part2"}>
                <Menue1/>

                <span className={"catalog_proects"}>Контакты</span>
                <span className={"choose_proects_house"}>Свяжитесь с нами</span>
                <span className={"catalog_from_100"}>Ответим на вопросы, рассчитаем стоимость и поможем <br/> подобрать проект.</span>

            </div>
         <div className={"third_part"}>
             {
                 contacts.map((item, index) => (
                     <div key={index} className={"contact_card"}>
                        <div className={"contact_card1"}>
                            <div className={"green_circle"}><i className={item.icon}></i></div>
                        </div>
                         <div className={"contact_card2"}>
                             <span className={"title"}>{item.title}</span>
                             <span className={"contact_card2_text2"}>{item.contact}</span>
                             <span className={"contact_card2_text3"}>{item.lasttext}</span>
                         </div>
                     </div>
                 ))
             }
             <div  className={"contact_card"}>
                 <div className={"contact_card1"}>
                     <div className={"green_circle"}><i className="fa-regular fa-message"></i></div>
                 </div>
                 <div className={"contact_card2"}>
                     <span className={"title"}>Мессенджеры</span>
                     <div className={"a_div"}>
                         <a
                             href="https://vk.ru/woodhouse_ltd"
                             target="_blank"
                             rel="noopener noreferrer"
                             className={"vk"}>
                             <i className="fa-brands fa-vk"></i>
                             <span>VK</span>
                         </a>
                         <a
                             href="https://max.ru/u/f9LHodD0cOJYQyxumrLYZ__xJ6q6FAkKxToRrVPz_36y1SnIlaDSx2WQazU"
                             target="_blank"
                             rel="noopener noreferrer"
                             className={"vk"}>
                             <i className="fa-solid fa-phone"></i>
                             <span>MAX</span>
                         </a>
                     </div>

                 </div>
             </div>
         </div>
           <Letapply/>
            <div className={"fourteen_part"}>
                <div className={"fourteen_part_half"}>
                    <div className={"top_of_the_fourteen"}>Реквизиты</div>
                    <div className={"midlle_of_the_fourteen"}>ИП Шумилов Алексей Николаевич</div>
                    <div className={"bottom_of_the_fourteen"}>
                        <span>ИНН: 352703669991</span>
                        <span> ОГРН: 317352500009591</span>
                        <span>Адрес: г. Москва, ул. Столетова, 9</span>
                    </div>
                </div>
                <div className={"fourteen_part_half"}>
                    <div className={"top_of_the_fourteen"}>Режим работы</div>
                    <div className={"bottom_of_the_fourteen2"}>
                        <span>Пн–Пт: 9:00–19:00</span>
                        <span> Сб–Вс: по договорённости</span>
                    </div>

            </div>
            </div>
            <Footer/>

        </div>
    );
}

export default Contacts;