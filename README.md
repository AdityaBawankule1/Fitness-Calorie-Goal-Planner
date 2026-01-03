# Fitness Calorie Goal Planner

**Fitness Calorie Goal Planner** is a modern, responsive React application that helps users calculate their daily calorie needs and estimate the time required to achieve their fitness goals. Users can input personal data such as age, height, weight, activity level, and fitness goal, and receive a **customized calorie report** for fat loss, muscle gain, or maintenance.

---

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [How It Works](#how-it-works)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Future Enhancements](#future-enhancements)  
- [License](#license)  
- [Author](#author)  

---

## Demo

*Optional: Include a screenshot or GIF of the app here.*

---

## Features

- 🧍‍♂️ Input personal details: age, height, weight, gender  
- 🏃‍♀️ Select daily activity level: Sedentary, Lightly Active, Moderately Active, Very Active  
- 🎯 Set fitness goal: Fat Loss, Muscle Gain, or Maintain  
- 📊 View calculated results:
  - BMR (Basal Metabolic Rate)  
  - Maintenance Calories  
  - Recommended Daily Calories  
  - Estimated time to reach goal  
- 🔹 Modern teal-to-blue gradient UI theme  
- 💻 Responsive and mobile-friendly design  
- ⚡ Controlled report generation with **“Show Report” button**  

---

## How It Works

1. **User Input**  
   Users fill out a form with personal data: age, height, weight, gender, activity level, and target weight change.  

2. **Calculation Logic**  
   The app uses the **Mifflin-St Jeor formula** to calculate BMR:  

Maintenance calories = BMR × activity factor:  
- Sedentary: 1.2  
- Lightly Active: 1.375  
- Moderately Active: 1.55  
- Very Active: 1.725  

Daily calories are adjusted based on fitness goal:  
- Fat Loss: −500 kcal/day  
- Muscle Gain: +300 kcal/day  
- Maintain: 0 kcal/day  

Estimated time to reach target weight is calculated based on weekly weight change.

3. **Show Report**  
Users click the **“Show Report” button** to generate a visually appealing results card displaying all relevant numbers.

---

## Tech Stack

- **React** – Frontend library  
- **Tailwind CSS** – Styling framework  
- **Vite** – Fast development and build tool  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/fitness-calorie-planner.git
cd fitness-calorie-planner


