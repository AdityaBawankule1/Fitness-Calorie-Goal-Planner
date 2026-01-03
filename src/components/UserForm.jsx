import FormInput from "./FormInput";
import SelectInput from "./SelectInput";

export default function UserForm({ form, setForm }) {
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
      <FormInput
        label="Age"
        name="age"
        value={form.age}
        onChange={handleChange}
      />

      <FormInput
        label="Height (cm)"
        name="height"
        value={form.height}
        onChange={handleChange}
      />

      <FormInput
        label="Weight (kg)"
        name="weight"
        value={form.weight}
        onChange={handleChange}
      />

      <SelectInput
        label="Gender"
        name="gender"
        value={form.gender}
        onChange={handleChange}
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
      />

      <SelectInput
        label="Activity Level"
        name="activity"
        value={form.activity}
        onChange={handleChange}
        options={[
          { label: "Sedentary", value: 1.2 },
          { label: "Lightly Active", value: 1.375 },
          { label: "Moderately Active", value: 1.55 },
          { label: "Very Active", value: 1.725 },
        ]}
      />

      <SelectInput
        label="Goal"
        name="goal"
        value={form.goal}
        onChange={handleChange}
        options={[
          { label: "Fat Loss", value: "loss" },
          { label: "Muscle Gain", value: "gain" },
          { label: "Maintain", value: "maintain" },
        ]}
      />

      <div className="sm:col-span-2">
        <FormInput
          label="Target Weight Change (kg)"
          name="targetKg"
          value={form.targetKg}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
