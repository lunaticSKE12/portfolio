import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
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
