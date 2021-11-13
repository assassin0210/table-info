import axios from "axios";
import {newGames, popularGamesUrl, upcomingGames} from "../api";

export const loadGames = () => async (dispatch) => {

    const popularData = await axios.get(popularGamesUrl())
    const newGamesData = await axios.get(newGames())
    const upcomingData = await axios.get(upcomingGames())
    dispatch({
        type: "FETCH_GAMES",
        payload:{
            popular:popularData.data.results,
            newGames:newGamesData.data.results,
            upcoming:upcomingData.data.results,
        }
    })
}
