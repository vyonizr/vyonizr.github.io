import moment from "moment"

const localTime = (date, dateFormat = "MMMM DD, YYYY") => {
  return moment(date).local().format(dateFormat)
}

export default localTime
