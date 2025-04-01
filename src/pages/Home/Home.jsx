import React from "react";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import CardEvento from "../../components/cardEvento/CardEvento"
import date from "../../data/database"


function Home(){
    return(
        <>
        <Header/>
        {
                    date.map((evento, index)=> (
                        <section>
                            <CardEvento key={index}  {...evento} />
                        </section>
                    ))
                }
        <Footer/>
        </>
    )
}

export default Home;