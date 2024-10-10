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

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
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

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&
        createField("symbols from image", "captcha", Input, [required], {})}

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
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha,
    );
  };

  if (props.isAuth) {
    return <Navigate to="/profile/" />;
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
