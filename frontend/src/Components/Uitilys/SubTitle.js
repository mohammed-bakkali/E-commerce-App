import React from "react";
import "../../styles/SubTitle.css";
import { Link } from "react-router-dom";

const SubTitle = ({ title, btntitle, pathText }) => {
  return (
    <div className="between-flex pt-15 pb-15">
      <div className="sub-title">{title}</div>
      {btntitle ? (
        <Link to={`${pathText}`} style={{ textDecoration: "none" }}>
          <div className="shopping-now">{btntitle}</div>
        </Link>
      ) : null}
    </div>
  );
};

export default SubTitle;
