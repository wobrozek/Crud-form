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
                    <span className="bold">{text.formAge}</span> : {element.age}
                  </li>
                  <li>
                    <span className="bold">{text.formBirthday}</span> :{" "}
                    {element.birthDate}
                  </li>
                  <li>
                    {element.about && (
                      <span>
                        <span className="bold">{text.formAbout}</span>
                        {" : "}
                        {element.about}
                      </span>
                    )}
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
