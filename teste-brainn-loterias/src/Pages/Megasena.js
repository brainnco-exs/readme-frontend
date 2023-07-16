// import React, { useState } from "react";
// import { megasena } from "../Data";
// import { useNavigate } from "react-router-dom";

// const MegaSena = () => {
//   const navigate = useNavigate();
//   const [selectedOption, setSelectedOption] = useState("/");

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//     navigate(`/${event.target.value}`);
//   };

//   return (
//     <div className="container">
//       <div className="left">
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
//           <p className="megasena-name">MEGA-SENA</p>
//         </div>
//         <div className="date">
//           <p className="concurso">CONCURSO</p>
//           <p className="NConcurso">
//             {megasena && megasena.numero_concurso} -{" "}
//             {megasena && megasena.data_concurso}
//           </p>
//         </div>
//       </div>

//       <div className="right">
//         <p></p>
//         <div className="numbers">
//           {megasena && megasena.dezenas.map((nums, i) => <p key={i}>{nums}</p>)}
//         </div>
//         <p className="notice">
//           Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
//           a CAIXA.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MegaSena;
