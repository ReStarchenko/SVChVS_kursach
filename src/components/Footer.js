import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="Footer">
            
            <nav className="NavIcons">
            <a href="https://vk.com/feed"><img src={require("../assets/vk.png")} className="Icons" alt="Icons" /></a>
            <a href="https://t.me/ReStarchenko"><img src={require("../assets/telegram.jpg")} className="Icons" alt="Icons" /></a>
            <a href="https://t.me/ReStarchenko"><img src={require("../assets/png-transparent-tiktok-icon-hd-logo.png")} className="Icons" alt="Icons" /></a>
            
            
            
            </nav>
            <a className="Author">2022-2023 © Restarchenko</a>
        </footer>
    )
}