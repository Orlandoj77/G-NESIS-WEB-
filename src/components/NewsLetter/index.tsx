import React, { FormEvent, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import girlSocial from "../../assets/newsletter-socialgirl.svg";
import { Container } from "./styles";

const NewsLetter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Email Sent");
    setEmail("");
  };

  return (
    <Container>
      <div>
        <h2>
          Subscreva para receber <br /> todas as actualizações!
        </h2>
        <p>Só lhe enviaremos as melhores coisas.!</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Email"}
          />
          <button>
            <FaArrowRight size={26} color={"#ffffff"} />
          </button>
        </form>
      </div>
      <img src={girlSocial} />
    </Container>
  );
};

export default NewsLetter;
