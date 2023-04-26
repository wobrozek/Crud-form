import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import PersonBox from "./PersonBox";

const PersonGrid = () => {
  const text = useSelector((state: RootState) => state.languages.text);
  const people = useSelector((state: RootState) => state.form.people);

  return (
    <>
      <div className="view__grid">
        {people &&
          people.map((element, index) => {
            return (
              <PersonBox key={index} name={element.name}>
                <ul>
                  <li>
                    {text.formAge} : {element.age}
                  </li>
                  <li>
                    {text.formBirthday} : {element.birthDate}
                  </li>
                  <li>
                    {text.formAbout} : {element.about}
                  </li>
                </ul>
              </PersonBox>
            );
          })}
      </div>

      {people.length === 0 && <div className="error">{text.emptyPage}</div>}
    </>
  );
};

export default PersonGrid;
