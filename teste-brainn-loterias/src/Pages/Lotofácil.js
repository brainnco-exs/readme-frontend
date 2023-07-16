// import React, { useState } from "react";
// import { lotofacil } from "../Data";
// import { useNavigate } from "react-router-dom";

// const Lotofacil = () => {
//   const navigate = useNavigate();
//   const [selectedOption, setSelectedOption] = useState("lotofacil");

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//     navigate(`/${event.target.value}`);
//   };
//   return (
//     <div className="container">
//       <div className="left lotofacil">
//         <div>
//           <select
//             id="options-loterias"
//             className="options"
//             value={selectedOption}
//             onChange={handleSelectChange}
//           >
//             <option value="/">MEGA-SENA</option>
//             <option value="quina">QUINA</option>
//             <option value="lotofacil">LOTOFÁCIL</option>
//             <option value="lotomania">LOTOMANIA</option>
//             <option value="timemania">TIMEMANIA</option>
//             <option value="diaDeSorte">DIA DE SORTE</option>
//           </select>
//         </div>
//         <div className="logo-name">
//           <img src="assets/logo-loterias.png" alt="logo"></img>
//           <p className="name">LOTOFÁCIL</p>
//         </div>
//         <div className="date">
//           <p className="concurso">CONCURSO</p>
//           <p className="NConcurso">
//             {lotofacil && lotofacil.numero_concurso} -{" "}
//             {lotofacil && lotofacil.data_concurso}
//           </p>
//         </div>
//       </div>

//       <div className="right">
//         <p></p>
//         <div className="numbers loto-number">
//           {lotofacil &&
//             lotofacil.dezenas.map((nums, i) => <p key={i}>{nums}</p>)}
//         </div>
//         <p className="notice">
//           Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
//           a CAIXA.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Lotofacil;
