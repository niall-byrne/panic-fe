import styled from "styled-components";

export const CenterBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: ${(props) => props.height};
  .kindly-hang-in-there {
    transform: scale(${(props) => props.scale});
  }
`;
