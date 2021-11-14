import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Game } from "../components/Game";

export const Home = () => {
  const { popular, newGames, upcoming } = useSelector((state) => state.gameReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {popular.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;

  h2 {
    padding: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;
