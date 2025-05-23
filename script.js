function daysOfAYear(year) {
    // Leap year logic:
    // 1. Divisible by 4 → maybe leap year
    // 2. But if divisible by 100 → not a leap year
    // 3. Unless also divisible by 400 → then it IS a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366;
    } else {
        return 365;
    }
}
console.log(daysOfAYear(2022)); // 365
console.log(daysOfAYear(2024)); // 366
console.log(daysOfAYear(1900)); // 365
console.log(daysOfAYear(2000)); // 366


