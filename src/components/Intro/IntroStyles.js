import styled, { keyframes } from 'styled-components';

export const I = styled.div`
  display: flex;
`;

export const ILeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const IRight = styled.div`
  flex: 1;
  position: relative;
`;

export const ILeftWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const IIntro = styled.h2`
  font-size: 30px;
  font-weight: 300;
`;

export const IName = styled.h1`
  font-size: 60px;
`;

export const ITitle = styled.div`
  height: 50px;
  overflow: hidden;
  margin-bottom: 50px;
`;

export const ITitleWrapper = styled.div`
  height: 100%;
  animation: move 10s ease-in-out infinite alternate;
  @keyframes move {
    16% {
      transform: translateY(-50px);
    }
    32% {
      transform: translateY(-100px);
    }
    48% {
      transform: translateY(-150px);
    }
    64% {
      transform: translateY(-200px);
    }
    80% {
      transform: translateY(-250px);
    }
    96% {
      transform: translateY(-300px);
    }
  }
`;

export const ITitleItem = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: #59b256;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: auto;
  height: auto;
  object-fit: cover;
  overflow: hidden;

  position: absolute;
`;

export const IBg = styled.div`
  clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
  background-color: #59b256;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;
