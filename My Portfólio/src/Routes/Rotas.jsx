import { Routes, Route } from "react-router-dom";
import "../pages/Header/Header"
import "../pages/About/About"
import "../pages/Projetos/Projetos"
import { Headeader } from "../pages/Header/Header";
import { About } from "../pages/About/About";
import { Projetos } from "../pages/Projetos/Projetos";

export const Rotas = () =>{
    return(
    <Routes>
        <Route path="/" element={<Headeader/>} />
        <Route path="/sobre" element={<About/>}/>
        <Route path="/projetos" element={<Projetos/>}/>
        <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
    )
}