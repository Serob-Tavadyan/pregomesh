import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Импортируем только Routes и Route
import Menue from "./component/Menue";
import Home from "./component/Home";
import Slider1 from "./component/Slider1";
import Contacts from "./component/Contacts";
import Project from "./component/Project";
import Texnologia from "./component/Texnologia";
import Producing from "./component/Producing";
import Escroy from "./component/Escroy";
import Blog from "./component/Blog";
import Questions from "./component/Questions";
import TreshchinyVLafete from "./component/TreshchinyVlafete";

function App(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/Texnologia" element={<Texnologia />} />
                <Route path="/Producing" element={<Producing />} />
                <Route path="/Escroy" element={<Escroy />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Questions" element={<Questions />} />
                <Route path="/Contacts" element={<Contacts />} />
                <Route path="/TreshchinyVLafete" element={<TreshchinyVLafete/>} />
            </Routes>
        </div>
    );
}

export default App;
