import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieList.css";

const MovieList = () => {
  const navigate = useNavigate();
  const movies = [
    {
      id: 1,
      title: "Uma Nova Esperança",
      ano: 1977,
      sinopse:
        " O filme conta a história de Luke Skywalker, que se vê envolvido em uma guerra intergalática quando seu tio compra dois robôs e com eles encontra uma mensagem da princesa Leia Organa para o jedi Obi-Wan Kenobi sobre os planos da construção da Estrela da Morte2.",
      url:
        "https://th.bing.com/th/id/OIP.a11HD3528T_JBZUulFz4wQHaLH?pid=ImgDet&rs=1"
    },

    {
      id: 2,
      title: "O Império Contra-Ataca",
      ano: 1980,
      sinopse:
        " As forças imperais comandadas por Darth Vader lançam um ataque contra os membros da resistência, que são obrigados a fugir. Enquanto isso Luke Skywalker tenta encontrar o Mestre Yoda, que poderá ensiná-lo a dominar a Força e torná-lo um cavaleiro jedi. No entanto, Darth Vader planeja levá-lo para o lado negro da Força. ",
      url:
        " https://th.bing.com/th/id/OIP.xTcqk0HCEjmODin4rBHspgHaLH?pid=ImgDet&rs=1"
    },

    {
      id: 3,
      title: "O Retorno de Jedi",
      ano: 1983,
      sinopse:
        " O imperador está supervisionando a construção de uma nova Estrela da Morte. Enquanto isso Luke Skywalker liberta Han Solo e a Princesa Leia das mãos de Jaba. Luke só se tornará um cavaleiro jedi quando destruir Darth Vader, que ainda pretende atraí-lo para o lado sombrio da Força.",
      url:
        " https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vP4C3LhuWN3POb2MTRN5ic1eLva.jpg"
    },
    {
      id: 4,
      title: "A Ameaça Fantasma",
      ano: 1999,
      sinopse:
        " Quando a maquiavélica Federação Comercial planeja invadir o pacífico planeta Naboo, o guerreiro Jedi Qui-Gon Jinn e seu aprendiz Obi-Wan Kenobi embarcam em uma aventura para tentar salvar o planeta. Viajam com eles a jovem Rainha Amidala, que é visada pela Federação pois querem forçá-la a assinar um tratado político. Eles têm de viajar para os distantes planetas Tatooine e Coruscant em uma desesperada tentativa de salvar o mundo de Darth Sidious, o demoníaco líder da Federação que sempre surge em imagens tridimensionais (a ameaça fantasma). Durante a viagem, Qui-Gon Jinn conhece um garoto de nove anos que deseja treiná-lo para ser tornar um Jedi, pois o menino tem todas as qualidades para isto. Mas o tempo revelará que nem sempre as coisas são o que aparentam.",
      url:
        " https://1.bp.blogspot.com/-QFok1NU66eE/XnVTdSUa-HI/AAAAAAACXFU/FzTNB7vo0TMBAYlTO5u7RF6zjxL5RjVDACLcBGAsYHQ/s1600/Star%2BWars%2B-%2BEpis%25C3%25B3dio%2BI%2B-%2BA%2BAmea%25C3%25A7a%2BFantasma-CAPA_PhotoRedukto.jpg "
    },
    {
      id: 5,
      title: "Ataque dos Clones",
      ano: 2002,
      sinopse:
        " A galáxia está à beira de uma guerra civil. Liderados por um ex-Jedi chamado Conde Dooku, milhares de sistemas planetários ameaçam deixar a República Galáctica. Após a senadora Padmé Amidala escapar de uma tentativa de assassinato, Anakin Skywalker, um aprendiz Jedi, se torna seu protetor, enquanto seu mestre Obi-Wan Kenobi, investiga o atentado contra a vida dela. Logo Anakin, Padmé, e Obi-Wan testemunham o início de uma nova ameaça à galáxia, as Guerras Clônicas. ",
      url:
        " https://www.jamesjennison.net/wp-content/uploads/2020/05/oZNPzxqM2s5DyVWab09NTQScDQt.jpg"
    }
  ];

  const handleClick = (id) => {
    const filme = movies.find((movie) => movie.id === id);
    navigate(`/movie`, { state: filme });
  };

  return (
    <div id="fundos">
      <h2>Ordem de lançamento dos Filmes:</h2>
      <ol>
        {movies.map((movie) => (
          <li key={movie.id}>
            <a href="#" onClick={() => handleClick(movie.id)}>
              {movie.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MovieList;
