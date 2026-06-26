import React from "react";

const StatsCardDetails = [
  { Heading: "Total Task", value: 245 },
  { Heading: "Completed", value: 245 },
  { Heading: "In Progress", value: 245 },
  { Heading: "Pending", value: 245 },
];

const StatValueColors = {
  "Total Task": "text-white",
  Completed: "text-green-400",
  "In Progress": "text-yellow-400",
  Pending: "text-red-400",
};

const StatsCard = () => {
    return (
      <>
        {StatsCardDetails.map((statsData, index) => (
          <div
            key={index}
            className="glass border border-white/10 p-6 rounded-3xl hover:bg-linear-to-r from-violet-600 to-indigo-600"
          >
            <p className="text-slate-400 hover: opacity-80">
              {statsData.Heading}
            </p>
            <h2
              className={`text-4xl font-bold mt-2 ${StatValueColors[statsData.Heading]}`}
            >
              {statsData.value}
            </h2>
          </div>
        ))}
      </>
    );
};

export default StatsCard;
