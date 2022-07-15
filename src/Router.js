import React from "react";
import App from './App';
import SkillsPage from "./Components/SkillsPage";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import NftsPage from "./Components/Nfts";
import { Route, Routes, BrowserRouter } from 'react-router-dom';



function Router() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/portfolio" element={<App />} />
                    <Route exact path="/portfolio/education" element={<Education />} />
                    <Route exact path="/portfolio/skills" element={<SkillsPage />} />
                    <Route exact path="/portfolio/contact-me" element={<Contact />} />
                    <Route exact path="/portfolio/projects" element={<Projects />} />
                    <Route exact path="/portfolio/nft-collections" element={<NftsPage />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}


export default Router;