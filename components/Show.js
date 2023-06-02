import React from "react";
import { useLocation } from "react-router-dom";
import { sanitizeHTML } from "../helpers";

export const Show = ({ data }) => {
  const location = useLocation();
  const { name, summary, image } = location.state.data;

  return (
    <div className="wrapper">
      <h1 className="inner-name">{name}</h1>
      <div className='details'>
        <img className="inner_image-name" src={image?.original || "/placeholder-image.png"} alt={name} />
        <div className="image-description" dangerouslySetInnerHTML={{ __html: sanitizeHTML(summary) }} />
      </div>
    </div>
  );
};
