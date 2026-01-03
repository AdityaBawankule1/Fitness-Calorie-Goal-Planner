export default function FormInput({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Enter value"
        className="
          w-full rounded-xl border border-gray-300 p-2.5
          bg-white text-gray-800 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent
          transition
        "
      />
    </div>
  );
}
