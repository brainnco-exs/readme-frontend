// import React, { useState } from "react";
// import { lotomania } from "../Data";
// import { useNavigate } from "react-router-dom";

// const Lotomania = () => {
//   const navigate = useNavigate();
//   const [selectedOption, setSelectedOption] = useState("lotomania");

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//     navigate(`/${event.target.value}`);
//   };

//   return (
//     <div className="container">
//       <div className="left lotomania">
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
//           <p className="megasena-name">LOTOMANIA</p>
//         </div>
//         <div className="date">
//           <p className="concurso">CONCURSO</p>
//           <p className="NConcurso">
//             {lotomania && lotomania.numero_concurso} -{" "}
//             {lotomania && lotomania.data_concurso}
//           </p>
//         </div>
//       </div>

//       <div className="right">
//         <p></p>
//         <div className="numbers">
//           {lotomania &&
//             lotomania.dezenas.map((nums, i) => <p key={i}>{nums}</p>)}
//         </div>
//         <p className="notice">
//           Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
//           a CAIXA.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Lotomania;
