import { Field, reduxForm } from "redux-form";
import {
  createField,
  Input,
} from "../components/common/FormsControll/FormsControll";
import { required } from "../utils/validators/validatirs";
import { connect } from "react-redux";
import { login } from "../redux/authReducer";
import { Navigate } from "react-router-dom";
import s from "./../components/common/FormsControll/FormsControll.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", Input, [required])}
      {createField("Password", "password", Input, [required], {
        type: "password",
      })}
      {createField(
        null,
        "rememberMe",
        Input,
        [],
        {
          type: "checkbox",
        },
        "Remember Me",
        s.rememberMe,
      )}

      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to="/profile/" />;
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
