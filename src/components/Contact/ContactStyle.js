import styled from 'styled-components';

export const C = styled.div`
  height: 100%;
  position: relative;
`;

export const CBg = styled.div`
  width: 20px;
  height: 100%;
  background-color: #59b256;
  position: absolute;
`;

export const CWrapper = styled.div`
  padding: 50px;
  display: flex;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    padding-top: 0px;
  }
`;

export const CLeft = styled.div`
  flex: 1;
`;

export const CRight = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  font-weight: 300;
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

export const Input = styled.input`
  width: 70%;
  height: 50px;
  border: none;
  border-bottom: 2px solid black;
  margin: 10px 0;
  font-size: 14px;
  padding-left: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin: 10px 0;
  font-size: 14px;
  padding-left: 10px;
  padding-top: 10px;
`;

export const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: #59b256;
  color: white;
  font-weight: 500;
  cursor: pointer;
  margin: 0 15px 15px 0;
`;
