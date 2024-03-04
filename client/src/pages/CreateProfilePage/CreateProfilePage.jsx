import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { Step4 } from "./components/Step4";
import { FinalStep } from "./components/FinalStep";
import { TokenContext } from "../../App";

import fetchHelper from "../../utils/fetchHelper";

export const CreateProfilePage = () => {
  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(step + 1);
  };

  const handleConfirm = async () => {
    try {
      const response = await fetchHelper("/user", "put", formData);

      const data = await response.json();
      if (response.ok) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div className="createprofile-container">
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} onPrev={handlePrev} />}
      {step === 3 && <Step3 onNext={handleNext} onPrev={handlePrev} />}
      {step === 4 && <Step4 onNext={handleNext} onPrev={handlePrev} />}
      {step === 5 && (
        <FinalStep
          formData={formData}
          onConfirm={handleConfirm}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};
