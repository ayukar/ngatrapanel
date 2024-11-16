"use client"
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  domain: string;
};

const DomainSelection: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1); // Step management
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Domain Data:", data);
    alert(`Selected Domain: ${data.domain}`);
    // Implement further functionality (e.g., API call to save domain)
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        {/* Step 1: Select Domain Type */}
        {step === 1 && (
          <div>
            <button
              onClick={() => alert("Go back")} // Adjust back functionality if needed
              className="mb-4 text-blue-500 hover:underline"
            >
              Back
            </button>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  {/* Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m-6-8h6m2-4H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-lg font-bold text-gray-800">Select domain type</h2>
              <p className="mt-2 text-sm text-gray-500">
                {`If you don't have a domain, you can register one at name.com.`}
              </p>
            </div>
            <div className="mt-6 space-y-4">
              <button
                onClick={() => setStep(2)}
                className="flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left text-gray-800 hover:bg-gray-50"
              >
                <span>I want to use my domain</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => setStep(2)}
                className="flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left text-gray-800 hover:bg-gray-50"
              >
                <span>Use subdomain on .socpanel.com</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Attach or Type Domain */}
        {step === 2 && (
          <div>
            <button
              onClick={() => setStep(1)}
              className="mb-4 text-blue-500 hover:underline"
            >
              Back
            </button>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  {/* Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m-6-8h6m2-4H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-lg font-bold text-gray-800">Attach your domain</h2>
              <p className="mt-2 text-sm text-gray-500">
                {`If you don’t have a domain, you can register it at`} <a href="https://name.com" className="text-blue-500 hover:underline">name.com</a>
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Type your domain"
                  className={`w-full rounded-lg border px-4 py-3 ${errors.domain ? "border-red-500" : "border-gray-300"
                    }`}
                  {...register("domain", { required: "Domain is required" })}
                />
                {errors.domain && (
                  <p className="mt-1 text-sm text-red-500">{errors.domain.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700"
              >
                Next
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainSelection;
