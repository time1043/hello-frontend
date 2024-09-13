import moment from "moment";

export const convertTimestampToDateTime = (timestamp) => {
  return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
};
