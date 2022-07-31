import React from "react";


const Contact = ({ firstName, lastName, phone, avatar }) => {
  const backgroundStyle = {
    backgroundImage: `url(${avatar})`,
  };

  return (
    <div className="contact">
      <div className="contact-avatar">
        <div className="avatar" style={backgroundStyle}></div>
      </div>
      <div className="contact-data">
        <span>
          {firstName} {lastName}
        </span>
        <span>{phone}</span>
      </div>
    </div>
  );
};

export default Contact;
