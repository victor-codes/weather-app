import { format, formatRelative } from "date-fns";

export function formatDate(dateStr) {
  const dateFormat = "ccc, dd LLL";
  const formatedDate = format(new Date(dateStr), dateFormat);

  return formatedDate;
}
