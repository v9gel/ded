import React from 'react';
import styled from 'styled-components';

interface Props {
  deg: number;
  children: React.ReactNode;
}

const CardTextVariantWrapper = styled.div<Props>`
  position: absolute;
  display: flex;
  top: ${(props) => (Math.abs(props.deg) > 5 ? '-25px' : '-125px')};
  align-items: flex-end;

  width: 110%;
  height: 100px;
  padding: 0 30px 10px 30px;

  background-color: var(--cGreen);
  color: var(--cBlack);
  transform: rotate(${(props) => props.deg}deg);
  transition: top 0.5s ease-out;
`;

const CardTextText = styled.div<Props>`
  width: 100%;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;

  text-align: ${(props) => (props.deg > 0 ? 'right' : 'left')};
  color: var(--cBlack);
  transform: rotate(${(props) => props.deg * -2}deg);
`;

export const CardTextVariant: React.FC<Props> = ({ deg, children }) => {
  return (
    <CardTextVariantWrapper deg={deg}>
      <CardTextText deg={deg}>{children}</CardTextText>
    </CardTextVariantWrapper>
  );
};
