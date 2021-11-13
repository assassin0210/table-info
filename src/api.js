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


const popular_games = `games?key=${process.env.REACT_APP_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const new_games = `games?key=${process.env.REACT_APP_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesUrl = () => `${baseUrl}${popular_games}`
export const upcomingGames = () => `${baseUrl}${upcoming_games}`
export const newGames = () => `${baseUrl}${new_games}`