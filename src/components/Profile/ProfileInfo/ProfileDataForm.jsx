import React from "react";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControll/FormsControll";
import { reduxForm } from "redux-form";
import s from "../../common/FormsControll/FormsControll.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
        {error && <div className={s.formSummaryError}>{error}</div>}
      </div>
      <div>
        <b>Full Name:</b>
        {createField("Full name", "fullName", Input, [])}
      </div>
      <div>
        <b>Looking for a job:</b>{" "}
        {createField("", "lookingForAJob", Input, [], { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills:</b>{" "}
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          Textarea,
          [],
        )}
      </div>
      <div>
        <b>About me:</b> {createField("About me", "aboutMe", Textarea, [])}
      </div>
      <div>
        <b>Contacts:</b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              <b>
                {key}: {createField(key, "contacts." + key, Input, [])}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({
  form: "edit-profile",
  enableReinitialize: true,
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
