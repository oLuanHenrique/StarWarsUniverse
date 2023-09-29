import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  const location = useLocation();
  const filme = location.state;
  const navigate = useNavigate();

  const handleBack = () => {
    // Use navigate para voltar para a página da loja com o ID correto
    navigate(`/`);
  };
  console.log(filme);
  return (
    <div id="detalhes">
      <h2> Informação do filme </h2>
      <p> Ordem: {filme.id} ª</p>
      <p> Nome: {filme.title}</p>
      <p> Ano: {filme.ano}</p>
      <p> Sinopse: {filme.sinopse}</p>
      <img src={filme.url} />
      <button onClick={handleBack}>Voltar</button>
    </div>
  );
};

export default MovieDetails;
