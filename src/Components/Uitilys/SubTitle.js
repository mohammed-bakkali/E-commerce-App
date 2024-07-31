import React from "react";
import "../../styles/SubTitle.css"

const SubTitle = ({ title, btntitle }) => {
  return (
    <div className="between-flex pt-15 pb-15">
      <div className="sub-title">{title}</div>
      {btntitle ? <div className="shopping-now">{btntitle}</div> : null}
    </div>
  );
};

export default SubTitle;
