import React from "react";
import styled from "styled-components";

export const Select = styled.select`
  min-width: 200px;
  min-height: 50px;
  justify-self: flex-start;
  margin-top: 100px;
`;

export const Container = styled.div`
  display: flex;
`;

export const BoxLeft = styled.div`
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 30%;
`;

export const Title = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;

  color: #ffffff;
`;

export const Bola = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxRigth = styled.div`
  background-color: gray;
  display: flex;
  align-items: center;
  padding: 0 20%;
  gap: 1rem;
  height: 100vh;
  width: 70%;
`;
