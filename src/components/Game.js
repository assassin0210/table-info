import styled from "styled-components";
import { motion } from "framer-motion";

import { loadDetail } from "../actions/detailAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Game = ({ game }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(game.id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${game.id}`}>
        <h3>{game.name}</h3>
        <p>{game.released}</p>
        <img src={game.background_image} alt="" />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-right: 1rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;