// import React, { useState } from "react";
// import { timemania } from "../Data";
// import { useNavigate } from "react-router-dom";

// const Timemania = () => {
//   const navigate = useNavigate();
//   const [selectedOption, setSelectedOption] = useState("quina");

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//     navigate(`/${event.target.value}`);
//   };
//   return (
//     <div className="container">
//       <div className="left timemania">
//         <div>
//           <select
//             id="options-loterias"
//             className="options"
//             value={selectedOption}
//             onChange={handleSelectChange}
//           >
//             <option value="megasena">MEGA-SENA</option>
//             <option value="quina">QUINA</option>
//             <option value="lotofacil">LOTOFÁCIL</option>
//             <option value="lotomania">LOTOMANIA</option>
//             <option value="timemania">TIMEMANIA</option>
//             <option value="diaDeSorte">DIA DE SORTE</option>
//           </select>
//         </div>
//         <div className="logo-name">
//           <img src="assets/logo-loterias.png" alt="logo"></img>
//           <p className="megasena-name">TIMEMANIA</p>
//         </div>
//         <div className="date">
//           <p className="concurso">CONCURSO</p>
//           <p className="NConcurso">
//             {timemania && timemania.numero_concurso} -{" "}
//             {timemania && timemania.data_concurso}
//           </p>
//         </div>
//       </div>

//       <div className="right">
//         <div className="time-info">
//           <p>Time do coração:</p>
//           <p className="time">{timemania && timemania.time}</p>
//         </div>
//         <div className="numbers">
//           {timemania &&
//             timemania.dezenas.map((nums, i) => <p key={i}>{nums}</p>)}
//         </div>
//         <p className="notice">
//           Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
//           a CAIXA.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Timemania;
