import React from 'react'
import "./categorycard.css";
import {FaCode, FaPaintBrush, FaBullhorn, FaChartLine, FaDatabase, FaBriefcase} from "react-icons/fa";

const CategoryCard = ({title,jobs}) => {
 const icons = {
    Development: <FaCode />,
    Design: <FaPaintBrush />,
    Marketing: <FaBullhorn />,
    Sales: <FaChartLine />,
    "Data Science": <FaDatabase />,
    Business: <FaBriefcase />
  };

  return (
    <div className="category-card">

      <div className="category-icon">
        {icons[title]}
      </div>

      <h3>{title}</h3>

      <p>{jobs} Jobs</p>

    </div>
  );
};
export default CategoryCard
