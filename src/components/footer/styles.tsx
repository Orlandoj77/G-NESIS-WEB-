import styled from "styled-components";

export const Container = styled.div`
  /* padding: 15px 30px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
`;

export const MinFooter = styled.div`
  width: 100%;
  background: #f6f0f0;
  height: 50px;
  padding-left: 100px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 767px) {
    height: 30px;
    padding-left: 30px;

    a {
      font-size: 13px;
    }
  }

  a {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: justify;

    color: #09093c;
    margin: 1px 5px;
  }
`;

export const MainFooter = styled.div`
  background: #f95b54;
  height: 324px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
  box-sizing: border-box;

  @media screen and (max-width: 1020px) {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
    padding: 10px 30px;

    > ul {
      flex-direction: row;
    }
  }

  div {
    @media screen and (max-width: 767px) {
      width: 100%;
    }

    h3 {
      font-family: "Audiowide", cursive;
      font-style: normal;
      font-weight: 400;
      font-size: 45px;
      line-height: 50px;

      color: #ffffff;
    }

    > ul {
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      li {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    hr {
      opacity: 0.7;
      margin-bottom: 25px;
      margin-top: 20px;
    }

    p {
      font-family: "Ubuntu";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 21px;
      text-align: justify;

      color: #ffffff;
    }
  }

  > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (min-width: 481px) and (max-width: 1020px) {
      width: 100%;
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 0;

      li {
        margin: 3px 15px;
      }
    }

    @media screen and (max-width: 480px) {
      li {
        width: 100%;
      }
    }

    li {
      display: flex;

      :nth-child(2) {
        a {
          background: #09093c;
          color: #ffffff;

          svg {
            background: #ffffff;
          }
        }
      }

      a {
        height: 40px;
        width: 235px;
        border-radius: 13px;

        font-family: "Abhaya Libre", cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 36px;
        text-transform: uppercase;

        text-align: center;
        letter-spacing: 0.055em;

        color: #09093c;
        margin: 7px auto;
        background: #ffffff;

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3px 25px;
        box-sizing: border-box;

        svg {
          background: #09093c;
          padding: 3px;
          border-radius: 50%;
        }
      }
    }
  }
`;
