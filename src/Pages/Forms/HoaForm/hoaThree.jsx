import React from "react";
import FormFields from "../../../components/FormFields";
import Button from "../../../components/Button";
import "./hoaform.scss";

const hoaThree = (props) => {
  const { progress, back,arrowR ,arrowL } = props;
  return (
    <>
      <FormFields label="Planting Restrictions" />
      <FormFields label="Trash Restrictions" />
      <FormFields label="Parking Restrictions" />
      <FormFields label="Behavorial Restrictions" />
      <FormFields label="Other Restrictions" />
      <FormFields label="Violations fee" />
      <div className="formButton">
        <div onClick={back}>
          <Button link="" title="Prev" iconColor="#fff" icon={arrowL} />
        </div>
        <div onClick={progress}>
          <Button link="" title="Next" iconColor="#fff" icon={arrowR} />
        </div>
      </div>
    </>
  );
};

export default hoaThree;
