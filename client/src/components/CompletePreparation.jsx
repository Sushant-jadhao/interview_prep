import React, { useState } from "react";
import MCQ from "./MCQ"; // Import the MCQ component

const CompletePreparation = () => {
  // Define state for current phase and test index
  const [currentPhase, setCurrentPhase] = useState("mcq"); // mcq, programming, interview
  const [currentTestIndex, setCurrentTestIndex] = useState(0);

  // Example data for each phase
  const programmingTests = [
    "Write a function to check if a number is prime.",
    "Implement a function to reverse a linked list.",
    "Write a program to find the maximum sum of a subarray.",
    "Create a React component to display a list of items.",
  ];

  const interviewQuestions = [
    "Explain the difference between state and props in React.",
    "How does React handle state updates?",
    "What are React hooks, and why are they used?",
    "Explain how React optimizes rendering performance.",
  ];

  // Phase-specific tests array
  const getTests = () => {
    switch (currentPhase) {
      case "programming":
        return programmingTests;
      case "interview":
        return interviewQuestions;
      default:
        return [];
    }
  };

  // Function to handle moving to the next test or phase
  const handleNext = () => {
    const tests = getTests();

    // If not at the end of the current phase's tests, move to the next test
    if (currentTestIndex < tests.length - 1) {
      setCurrentTestIndex(currentTestIndex + 1);
    } else {
      // Move to the next phase
      if (currentPhase === "mcq") {
        setCurrentPhase("programming");
        setCurrentTestIndex(0);
      } else if (currentPhase === "programming") {
        setCurrentPhase("interview");
        setCurrentTestIndex(0);
      } else {
        alert("Congratulations! You have completed all phases!");
      }
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {currentPhase === "mcq" ? (
        // Render the MCQ component for the MCQ phase
        <MCQ />
      ) : (
        <div>
          <h1>Test Preparation</h1>
          <h2>
            Current Phase:{" "}
            {currentPhase.charAt(0).toUpperCase() + currentPhase.slice(1)}
          </h2>
          <h3>{getTests()[currentTestIndex]}</h3>
          <button onClick={handleNext}>Submit and Move to Next</button>
        </div>
      )}
    </div>
  );
};

export default CompletePreparation;
