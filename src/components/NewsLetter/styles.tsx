import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 100px;
  margin-top: 80px;

  h2 {
    font-family: "Audiowide", "cursive";
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 65px;
    color: #09093c;
  }

  div {
    form {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 50px;
      box-sizing: border-box;

      input {
        height: 100%;
        width: 260px;
        border-radius: 0px;
        border: 2px solid #ff5950;
        padding: 10px 12px 10px 25px;
        box-sizing: border-box;

        font-size: 14px;
        color: #000000;
        font-weight: 700;
        font-family: "Roboto", sans-serif;
      }

      button {
        height: 100%;
        width: 70px;
        border-radius: 0px;
        border: 2px solid #ff5950;
        background: #ff5950;
        box-sizing: border-box;

        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
  }
`;
