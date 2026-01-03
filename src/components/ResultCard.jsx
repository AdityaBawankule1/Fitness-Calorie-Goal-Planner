export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="mt-8 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 p-6 border border-teal-100 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Your Fitness Summary
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-gray-500">BMR</p>
          <p className="text-lg font-bold text-teal-600">
            {result.bmr} kcal/day
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-gray-500">Maintenance</p>
          <p className="text-lg font-bold text-blue-600">
            {result.maintenance} kcal/day
          </p>
        </div>
      </div>

      <div className="mt-5 bg-white rounded-xl p-4 shadow-sm text-center">
        <p className="text-gray-500 text-sm">Recommended Daily Calories</p>
        <p className="text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
          {result.dailyCalories} kcal
        </p>
      </div>

      <p className="mt-4 text-center text-sm text-gray-600">
        Estimated time to reach your goal:
        <span className="font-semibold text-gray-800"> {result.weeks} weeks</span>
      </p>
    </div>
  );
}
