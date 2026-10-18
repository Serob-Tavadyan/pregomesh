import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Импортируем только Routes и Route
import Menue from "./component/Menue";
import Home from "./component/Home";
import Slider1 from "./component/Slider1";
import Contacts from "./component/Contacts";
import Project from "./component/Project";
import Texnologia from "./component/Texnologia";
import Producing from "./component/Producing";
import Escrow from "./component/Escrow";
import Blog from "./component/Blog";
import TreshchinyVLafete from "./component/TreshchinyVlafete";
import SushkaDrevisini from "./component/SushkaDrevisini";
import PochemuStroitelstvoIzLafetaSchitaetsya from "./component/PochemuStroitelstvoIzLafetaSchitaetsya";
import Faq from "./component/Faq";
import Passport from "./component/Passport";
function App(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/Texnologia" element={<Texnologia />} />
                <Route path="/Producing" element={<Producing />} />
                <Route path="/Escrow" element={<Escrow />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Faq" element={<Faq />} />
                <Route path="/Contacts" element={<Contacts />} />
                <Route path="/TreshchinyVLafete" element={<TreshchinyVLafete />} />
                <Route path="/SushkaDrevisini" element={<SushkaDrevisini/>} />
                <Route path="/Passport" element={<Passport/>}/>
                <Route path="/PochemuStroitelstvoIzLafetaSchitaetsya" element={<PochemuStroitelstvoIzLafetaSchitaetsya/>} />
            </Routes>
        </div>
    );
}

export default App;
