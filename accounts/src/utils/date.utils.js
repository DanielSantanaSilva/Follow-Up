import { format } from "date-fns";

export class DateTime {
  static getCurrentDateFormatted(formatString) {
    return format(new Date(), formatString);
  }
}
