import styled from 'styled-components';

import image1 from '../assets/1.png';

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--cCardBg);
  position: relative;
  width: 286px;
  height: 373px;

  background: #fffaec;
  border: 10px dashed #242424;
  border-radius: 60px;
`;

const Image = styled.img`
  height: 100%;
  width: auto;

  pointer-events: none;
`;

export const Card = () => (
  <CardWrapper>
    <Image src={image1}></Image>
  </CardWrapper>
);
