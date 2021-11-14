import styled from "styled-components";
import { motion } from "framer-motion";

import { loadDetail } from "../actions/detailAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

export const Game = ({ game }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    window.document.body.style.overflow = "hidden";
    dispatch(loadDetail(game.id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${game.id}`}>
        <h3>{game.name}</h3>
        <p>{game.released}</p>
        <img src={smallImage(game.background_image, 640)} alt="" />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;