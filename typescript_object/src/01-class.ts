const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date();
date2.getHours();
date2.getHours();
date2.toISOString();

console.log(date);
console.log(date2);


export class MyDate {
  year: number;
  month: number;
  day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2021, 3, 13)
console.log(myDate);
