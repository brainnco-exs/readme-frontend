import React from "react";
import { useParams } from "react-router-dom";
import { lotteryData } from "../Data";

const LotteryPage = () => {
  const { lotteryType } = useParams();
  const lottery = lotteryData[lotteryType.toLowerCase()];

  if (!lottery) {
    return <p>Lottery not found.</p>;
  }

  const { nome, numero_concurso, data_concurso, dezenas, time } = lottery;

  return (
    <div className="container">
      <div className={`left ${lotteryType}`}>
        <div>
          <select
            id="options-loterias"
            className="options custom-select"
            value={lotteryType}
            onChange={(event) => {
              const selectedLotteryType = event.target.value;
              window.location.href = `/${selectedLotteryType}`;
            }}
          >
            {Object.keys(lotteryData).map((key) => (
              <option key={key} value={key}>
                {lotteryData[key].nome}
              </option>
            ))}
          </select>
        </div>
        <div className="logo-name">
          <img src="assets/logo-loterias.png" alt="logo"></img>
          <p className={`${lotteryType}-name`}>{nome}</p>
        </div>
        <div className="date">
          <p className="concurso">CONCURSO</p>
          <p className="NConcurso">
            {numero_concurso} - {data_concurso}
          </p>
        </div>
      </div>

      <div className="right">
        <div className="time-info">
          <p className="time">{time}</p>
        </div>

        <div className="numbers">
          {dezenas.map((num, index) => (
            <p key={index}>{num}</p>
          ))}
        </div>

        <p className="notice">
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </p>
      </div>
    </div>
  );
};

export default LotteryPage;
