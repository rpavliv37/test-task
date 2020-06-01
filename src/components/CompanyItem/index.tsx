import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import companies from '../../data/data.json';
import { CompanyNews } from '../CompanyNews';
import './style.scss';

interface IMatchParams {
  companyName: string;
}

interface ICompany {
  name: string;
  logo: string;
  description: string;
}


export const CompanyItem: React.FC<RouteComponentProps<IMatchParams>> = ({ match }) => {
  const { companyName } = match.params;
  const company: ICompany | null = companies.find((company) => company.name === companyName) || null;
  return (
    company &&
    <div className="company">
      <img className="company__logo" src={company.logo} alt={company.name} />
      <div className="company__description">
        {company.description}
      </div>
      <CompanyNews />
    </div>
  )
}