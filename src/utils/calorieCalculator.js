export function calculateCalories(data) {
const { age, height, weight, gender, activity, goal, targetKg } = data;

const bmr =
gender === "male"
? 10 * weight + 6.25 * height - 5 * age + 5
: 10 * weight + 6.25 * height - 5 * age - 161;

const maintenance = bmr * activity;

let dailyCalories = maintenance;
let weeklyChange = 0;

if (goal === "loss") {
dailyCalories -= 500;
weeklyChange = 0.5;
} else if (goal === "gain") {
dailyCalories += 300;
weeklyChange = 0.25;
}

const weeks = weeklyChange ? targetKg / weeklyChange : 0;

return {
bmr: Math.round(bmr),
maintenance: Math.round(maintenance),
dailyCalories: Math.round(dailyCalories),
weeks: Math.round(weeks),
};
}