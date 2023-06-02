import React from "react";
import { useNavigate } from "react-router-dom";

export const ShowsList = ({ data }) => {
  const navigate = useNavigate();
  const { name, image, status, rating } = data;

  return (
    <div className="container-wrapper" style={{ border: "1px solid red", margin: 10, padding: 10 }}>
      <img
        className="movie-image"
        src={image?.medium ? image.medium : "/placeholder-image.png"}
        alt={name}
        onClick={() => {
          navigate("/movie", { state: { data } });
        }}
        style={{ width: 100}}
      />
      <h3 className="name">{name}</h3>
      <div>
        <p>Status: {status}</p>
        <p>Rating: {rating?.average || "N/A"}</p>
      </div>
    </div>
  );
};
