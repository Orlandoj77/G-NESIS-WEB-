import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container, MainFooter, MinFooter } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <MinFooter>
        <a>Privacidade</a>
        <a>Termos e Condições</a>
      </MinFooter>

      <MainFooter>
        <div>
          <h3>Siga-nos</h3>
          <ul>
            <li>
              <a href="https://www.meta.com">
                <FaWhatsapp color={"#ffffff"} size={40} />
              </a>
            </li>
            <li>
              <a href="https://www.meta.com">
                <FaInstagram color={"#ffffff"} size={40} />
              </a>
            </li>
            <li>
              <a href="https://www.meta.com">
                <FaFacebookF color={"#ffffff"} size={40} />
              </a>
            </li>
          </ul>
          <hr color={"#ffffff"} />
          <p>
            © 2020 G&apos;NESIS e colaboradores individuais. As funcionalidades
            estarão disponíveis brevemente
          </p>
        </div>
        <ul>
          <li>
            <Link to="/">
              <span>Passageiros</span>
              <FaArrowRight size={10} color={"#ffffff"} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>G'NESIS</span>
              <FaArrowRight size={10} color={"#09093c"} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Motoristas</span>
              <FaArrowRight size={10} color={"#ffffff"} />
            </Link>
          </li>
        </ul>
      </MainFooter>
    </Container>
  );
};

export default Footer;
