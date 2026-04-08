import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./SemesterSelection.css";

function SemesterSelection() {
  const semesters = [
    {
      type: "Odd Semester",
      description: "First half of the academic year with foundational subjects.",
      month: "February",
      highlightDate: 14,
    },
    {
      type: "Even Semester",
      description: "Second half of the academic year with advanced topics.",
      month: "December",
      highlightDate: 27,
      link: "/courses", // Add a link property for the Even Semester
    },
  ];

  return (
    <div className="semester-container">
      <h1 className="semester-header">Select Semester</h1>

      {/* Semester Blocks */}
      {semesters.map((semester, index) => (
        <div className="semester-section" key={index}>
          {/* Left: Calendar Grid */}
          <div className="calendar-grid">
            <h3 className="calendar-title">Exam Date: {semester.highlightDate}</h3>
            <div className="calendar-wrapper">
              {Array.from({ length: semester.month === "December" ? 31 : 28 }, (_, i) => i + 1).map((date) => (
                <div
                  key={date}
                  className={`calendar-date ${
                    date === semester.highlightDate ? "highlight-date" : ""
                  }`}
                >
                  {date}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Semester Details */}
          <div className="semester-details">
            {semester.link ? (
              <Link to={semester.link} className="semester-link">
                <div className="semester-card">
                  <h3 className="semester-title">{semester.type}</h3>
                  <p className="semester-description">{semester.description}</p>
                </div>
              </Link>
            ) : (
              <div className="semester-card">
                <h3 className="semester-title">{semester.type}</h3>
                <p className="semester-description">{semester.description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SemesterSelection;
