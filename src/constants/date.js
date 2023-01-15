import moment from "moment/moment";

// export const DONATE_CREATION_DATE = new Date();

export const DONATE_CREATION_DATE = (date) => {
  return moment(date).format("MMMM Do YYYY, h:mm:ss a");
};
