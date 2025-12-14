import React from 'react';
import './ValueProp.css';

const ValueProp = ({ icon, title, description }) => {
  return (
    <div className="value-prop-card">
      <div className="prop-icon">{icon}</div>
      <h4 className="prop-title">{title}</h4>
      <p className="prop-description">{description}</p>
    </div>
  );
};

// Primer upotrebe unutar WhyUpworkPage.js
/*
const WhyUpworkPage = () => {
    return (
        <div className="prop-grid-container">
            <ValueProp 
                icon="💡" 
                title="Brzo Pronađite Talenat" 
                description="Filtrirajte milione profila i povežite se sa idealnim kandidatima za samo nekoliko minuta." 
            />
            <ValueProp 
                icon="🔒" 
                title="Sigurnost i Transparentnost" 
                description="Plaćajte samo za rad koji je odobren. Naši sistemi štite vaše transakcije." 
            />
            // ...još dve ili tri kartice
        </div>
    );
};
*/

export default ValueProp;