import {Field, reduxForm} from 'redux-form';
import {Input} from '../components/common/FormsControll/FormsControll';
import {required} from '../utils/validators/validatirs';
import {connect} from 'react-redux';
import {login} from '../redux/authReducer';
import {Navigate} from 'react-router-dom';
import s from './../components/common/FormsControll/FormsControll.module.css';

const LoginForm = props => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]} />
         </div>
         <div>
            <Field
               placeholder={'Password'}
               name={'password'}
               type={'password'}
               component={Input}
               validate={[required]}
            />
         </div>
         <div>
            <Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember me
         </div>
         {props.error && <div className={s.formSummaryError}>{props.error}</div>}
         <div>
            <button>Login</button>
         </div>
      </form>
   );
};

const LoginReduxForm = reduxForm({
   form: 'login'
})(LoginForm);

const Login = props => {
   const onSubmit = formData => {
      props.login(formData.email, formData.password, formData.rememberMe);
   };

   if (props.isAuth) {
      return <Navigate to='/profile/' />;
   }
   return (
      <div>
         <h1>LOGIN</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   );
};

const mapStateToProps = state => ({
   isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
