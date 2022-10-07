import {
  Select,
  BoxLeft,
  Title,
  Bola,
  BoxRigth,
  Container,
} from "../Style/Style";
import axios from "axios";
import { useEffect, useState } from "react";

const colors = {
  "mega-sena": "#6BEFA3",
  quina: "#8666EF",
  lotofácil: "#DD7AC6",
  lotomania: "#FFAB64",
  timemania: "#5AAD7D",
  "dia de sorte": "#BFAF83",
};
export const Home = () => {
  const [loteria, setLoteria] = useState();
  const [selectedLoteria, setSelectedLoteria] = useState();
  const [listaConcurso, setListaConcurso] = useState();
  const [numbers, setNumbers] = useState();

  const selectedLoteName = loteria?.find(
    (loteria) => selectedLoteria == loteria.id
  )?.nome;
  const concursoId = listaConcurso?.find(
    (concurso) => selectedLoteria == concurso.loteriaId
  )?.concursoId;

  const getNumber = (id) => {
    axios
      .get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${id}`)
      .then((res) => {
        setNumbers(res.data.numeros);
      });
  };
  const getTitle = () => {
    axios
      .get(`https://brainn-api-loterias.herokuapp.com/api/v1/loterias`)
      .then((res) => {
        setLoteria(res.data);
        setSelectedLoteria(res.data[0].id);
      });
  };

  const getConcursoId = () => {
    axios
      .get(
        `https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos`
      )
      .then((res) => {
        setListaConcurso(res.data);
      });
  };
  const changeLoto = (event) => {
    setSelectedLoteria(event.target.value);
  };

  useEffect(() => {
    getTitle();
    getConcursoId();
  }, []);

  useEffect(() => {
    getNumber(concursoId);
  }, [concursoId]);
  console.log(concursoId);
  console.log(numbers);
  console.log(loteria);
  //   //   console.log(loteria);
  //   console.log(selectedLoteName);
  //   console.log(selectedLoteria);
  const renderLoto = () => {
    return <Title>{selectedLoteName}</Title>;
  };

  const renderNumbers = () => {
    return numbers?.map((number) => <Bola>{number}</Bola>);
  };
  console.log(renderNumbers());
  return (
    <Container>
      <BoxLeft color={colors[selectedLoteName]}>
        <Select value={selectedLoteria} onChange={changeLoto}>
          {loteria?.map((nome) => {
            return (
              <option value={nome.id} key={nome.id}>
                {nome.nome}
              </option>
            );
          })}
        </Select>
        {renderLoto()}
      </BoxLeft>
      <BoxRigth>{renderNumbers()}</BoxRigth>
    </Container>
  );
};
export default Home;
