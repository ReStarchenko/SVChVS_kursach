import React from "react";
import "./Main.css";

export default function Main() {
    return (
        <main className="Main">
            <section className="SectionInputs">
               <a>Make your tree!</a>
                <div className="group">
                    <input type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Relative's name</label>
                </div>
                <div class="group">
                    <input type="text" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Years of life</label>
                </div>
                <div class="group">
                    <input type="text" required/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Who is he/she</label>
                </div>
                <div class="group">
                    <input type="text" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Descendant's name</label>
                </div>
                <button className="btnFind">Submit</button>
            </section>
        </main>
        
        
    )
}