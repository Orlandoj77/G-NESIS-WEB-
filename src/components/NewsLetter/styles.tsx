import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 100px;
  margin-top: 80px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 10px 40px;

    img {
      display: none;
    }
  }

  h2 {
    font-family: "Audiowide", "cursive";
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 65px;
    color: #09093c;

    @media screen and (max-width: 767px) {
      font-size: 30px;
      line-height: 40px;
    }
  }

  @media screen and (min-width: 767px) and (max-width: 1040px) {
    padding: 20px 70px;

    h2 {
      font-size: 36px;
      line-height: 40px;
    }

    img {
      width: 40%;
    }
  }

  div {
    @media screen and (max-width: 767px) {
      width: 100%;

      form {
        width: 100%;
        height: 40px;
      }
    }

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
