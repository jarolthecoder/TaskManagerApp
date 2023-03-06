
export const useDate = () => {

  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const getWeekDays = (date) =>  weekDays[date.getDay()];
  const todayDate = `${getWeekDays(date)}, ${monthName[month].slice(0, 3)} ${day.toString().padStart(2, "0")} ${year}`;
  const dateTimeFormat = `${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}-${year}`;

  return {
    todayDate,
    dateTimeFormat
  }
}
