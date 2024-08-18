/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  Monday,
  Tuesday,
  Wednsdey,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(weekday: Weekday): boolean {
  return weekday > 4;
}

// but in this implementation we need to call func like that
console.log(isWeekend(Weekday.Friday));  //false

//or we can implement the other way

enum Weekday_2 {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend_2(weekday: string): boolean {
  return weekday === Weekday_2.Saturday || weekday === Weekday_2.Sunday;
}

console.log(isWeekend_2("Tuesday"));
