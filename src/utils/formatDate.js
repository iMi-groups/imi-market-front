import { format } from "date-fns";

function formatDate(date) {
  return format(date, "yyyy/mm/dd");
}

export { formatDate };
