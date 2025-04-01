import React from "react";
import Style from "./CardEvento.module.css"

function CardEvento({nome, local, data, imagem, descricao}){
    return (
        <div className={Style.Evento}>
            <img src={imagem} alt ={nome} />
            <div className={Style.EventoInfo}>
                <h2>{nome}</h2>
                <p>{descricao}</p>
                <p>{local}</p>
                <p>{data}</p>
            </div>
        </div>
    )
}

export default CardEvento;