import React from "react";
import ResumoItem from "../ResumoItem";
import * as C from "./style";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resumo = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumoItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <ResumoItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumoItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Resumo;
