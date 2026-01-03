import { useState } from "react";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import ResultCard from "./components/ResultCard";
import { calculateCalories } from "./utils/calorieCalculator";

export default function App() {
  const [form, setForm] = useState({
    age: "",
    height: "",
    weight: "",
    gender: "male",
    activity: 1.375,
    goal: "loss",
    targetKg: 5,
  });

  const [showReport, setShowReport] = useState(false);
  const [result, setResult] = useState(null);

  const handleShowReport = () => {
    const calculated = calculateCalories({
      ...form,
      age: Number(form.age),
      height: Number(form.height),
      weight: Number(form.weight),
      activity: Number(form.activity),
      targetKg: Number(form.targetKg),
    });
    setResult(calculated);
    setShowReport(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="bg-white max-w-xl w-full p-6 rounded-2xl shadow-xl">
        <Header />

        <UserForm form={form} setForm={setForm} />

        <div className="mt-6 text-center">
          <button
            onClick={handleShowReport}
            className="
              px-6 py-2 rounded-xl text-white font-semibold
              bg-gradient-to-r from-teal-500 to-blue-600
              hover:from-teal-600 hover:to-blue-700
              transition
            "
          >
            Show Report
          </button>
        </div>

        {showReport && <ResultCard result={result} />}
      </div>
    </div>
  );
}
