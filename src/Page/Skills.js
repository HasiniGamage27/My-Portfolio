import { useEffect, useState } from "react";

const skillsData = [
  { name: "HTML", percentage: 90 },
  { name: "Problem Solving", percentage: 85 },
  { name: "JavaScript", percentage: 80 },
  { name: "Communication Skills", percentage: 75 },
  { name: "Tailwind CSS", percentage: 85 },
  { name: "Project Coordination", percentage: 70 },
  { name: "CSS", percentage: 85 },
  { name: "Team Work", percentage: 75 },
  { name: "React", percentage: 70 },
  { name: "Leadership and Management", percentage: 90 },
];

const Skills = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(skillsData.map((skill) => skill.percentage));
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="max-w-5xl p-6 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center text-green-600">My Skills</h2>

      <div className="flex flex-wrap gap-8 p-4 bg-green-800 rounded-xl">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] border border-gray-300 rounded-xl p-4 shadow-sm bg-white"
          >
            <div className="flex justify-between">
              <span className="text-lg font-semibold">{skill.name}</span>
              <span className="text-lg font-semibold">{progress[index] || 0}%</span>
            </div>
            <div className="w-full h-4 mt-2 overflow-hidden bg-gray-200 rounded-full">
              <div
                className="h-full transition-all duration-1000 ease-in-out bg-green-700 rounded-full"
                style={{ width: `${progress[index] || 0}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
