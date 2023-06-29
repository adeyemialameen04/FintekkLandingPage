import React from 'react';
import ReadMoreBtn from "./ReadMoreBtn";

const Service = ({ title, info, img }) => {
  return (
    <article className="service">
      <h1 className="mini-blue-header">{title}</h1>
      <p className="p-gray">{info}</p>
      <ReadMoreBtn />
      <img src={img} alt={img} />
    </article>
  );
};

export default Service;