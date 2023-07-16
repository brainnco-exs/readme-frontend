// import React, { useState } from "react";
// import { diaDeSorte } from "../Data";
// import { useNavigate } from "react-router-dom";

// const DiaDeSorte = () => {
//   const navigate = useNavigate();
//   const [selectedOption, setSelectedOption] = useState("diaDeSorte");

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//     navigate(`/${event.target.value}`);
//   };
//   return (
//     <div className="container">
//       <div className="left diaDeSorte">
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
//           <p className="megasena-name">DIA DE SORTE</p>
//         </div>
//         <div className="date">
//           <p className="concurso">CONCURSO</p>
//           <p className="NConcurso">
//             {diaDeSorte && diaDeSorte.numero_concurso} -{" "}
//             {diaDeSorte && diaDeSorte.data_concurso}
//           </p>
//         </div>
//       </div>
//       <div className="right">
//         <p></p>
//         <div className="numbers">
//           {diaDeSorte &&
//             diaDeSorte.dezenas.map((nums, i) => <p key={i}>{nums}</p>)}
//         </div>
//         <p className="notice">
//           Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
//           a CAIXA.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default DiaDeSorte;
