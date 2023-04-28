import React, { useEffect, useState } from "react";
import { megasena } from "../Data";
import { useNavigate } from "react-router-dom";

const MegaSena = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="left">
        <div>
          <select id="options-loterias" className="options">
            <option value="megasena" selected onClick={() => navigate("/")}>
              MEGA-SENA
            </option>
            <option value="quina" onClick={() => navigate("/quina")}>
              QUINA
            </option>
            <option value="lotofacil" onClick={() => navigate("/lotofacil")}>
              LOTOFÁCIL
            </option>
            <option value="lotomania" onClick={() => navigate("/lotomania")}>
              LOTOMANIA
            </option>
            <option value="timemania" onClick={() => navigate("/timemania")}>
              TIMEMANIA
            </option>
            <option value="diaDeSorte" onClick={() => navigate("/diaDeSorte")}>
              DIA DE SORTE
            </option>
          </select>
        </div>
      </div>

      {megasena.map((result) => {
        return (
          <>
            <div className="logo-name">
              <img src="./" alt="logo"></img>
              <h3>MEGA-SENA</h3>
            </div>
            <div className="date">
              <p>CONCURSO</p>
              <p>${result.numero_consurso}</p>
            </div>
            <div className="right">
              <span className="numbers">{result.dezenas}</span>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MegaSena;
