import React from 'react'
import "./companycard.css"
import { Link } from 'react-router-dom';

const CompanyCard = ({ logo, name }) => {
  return (
    <Link
      to={`/company-details/${encodeURIComponent(name)}`}
      className="company-card-link"
    >
      <div className="company-card">
        <img src={logo} alt={name} />
        <h3>{name}</h3>
      </div>
    </Link>
  );
};


export default CompanyCard
