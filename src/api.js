const baseUrl = "https://api.rawg.io/api/"

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};




const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const gemaAndKye = `games?key=${process.env.REACT_APP_KEY}`


const popular_games = `${gemaAndKye}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `${gemaAndKye}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const new_games = `${gemaAndKye}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesUrl = () => `${baseUrl}${popular_games}`
export const upcomingGames = () => `${baseUrl}${upcoming_games}`
export const newGames = () => `${baseUrl}${new_games}`

export const gameDetailsUrl =(id)=>`${baseUrl}games/${id}?key=${process.env.REACT_APP_KEY}`
export const gameScreenshotURL = (id)=>`${baseUrl}games/${id}/screenshots?key=${process.env.REACT_APP_KEY}`