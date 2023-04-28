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
</div>;
