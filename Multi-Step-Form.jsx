import { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
  });

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData((prev) => ({...prev,[name]: value,}))
  }; 

  const handleSubmit = () => {
    console.log(formData);
    alert("Form Submitted");
  };

  return (
    <div>
      <h2>Step {step}</h2>

      {step === 1 && (
        <>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />

          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <br />

          <button onClick={nextStep}>Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />

          <br />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />

          <br />

          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </>
      )}

      {step === 3 && (
        <>
          <h3>Review Details</h3>

          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Age: {formData.age}</p>
          <p>City: {formData.city}</p>

          <button onClick={prevStep}>Previous</button>
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
}
