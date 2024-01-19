import React, { useState } from "react";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { FinalStep } from "./components/FinalStep";

export const ProfilePage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const handleNext = (data) => {
        setFormData({ ...formData, ...data });
        setStep(step + 1);
    };

    const handleConfirm = () => {
        console.log("Profile successfully created, data:", formData)
    }

    const handlePrev = () => {
        setStep(step - 1);
    }

    return (
        <div className="profile-container">
            {step === 1 && <Step1 onNext={handleNext} />}
            {step === 2 && <Step2 onNext={handleNext} onPrev={handlePrev} />}
            {step === 3 && <Step3 onNext={handleNext} onPrev={handlePrev} />}
            {step === 4 && <FinalStep formData={formData} onConfirm={handleConfirm} onPrev={handlePrev} />}
        </div>
    )
}