import s from "./FormsControll.module.css";
import { Field } from "redux-form";
import { required } from "../../../utils/validators/validatirs";

const FormsControll =
  (Element) =>
  ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;

    return (
      <div className={s.formControl + " " + (hasError ? s.error : "")}>
        <div>
          <Element {...input} {...props} />
        </div>
        {hasError && <span>{meta.error}</span>}
      </div>
    );
  };

export const Textarea = FormsControll("textarea");

export const Input = FormsControll("input");

export const createField = (
  placeholder,
  name,
  component,
  validators,
  props = {},
  text = "",
  className = "",
) => (
  <div className={className}>
    <Field
      placeholder={placeholder}
      name={name}
      component={component}
      validate={validators}
      {...props}
    />
    {text.length > 0 ? <span>{text}</span> : ""}
  </div>
);
