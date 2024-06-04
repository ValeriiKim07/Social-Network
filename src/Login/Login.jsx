import {Field, reduxForm} from 'redux-form';
import {Input} from '../components/common/FormsControll/FormsControll';
import {required} from '../utils/validators/validatirs';

const LoginForm = props => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={'Login'} name={'login'} component={Input} validate={[required]} />
         </div>
         <div>
            <Field
               placeholder={'Password'}
               name={'password'}
               component={Input}
               validate={[required]}
            />
         </div>
         <div>
            <Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember me
         </div>
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
      console.log(formData);
   };
   return (
      <div>
         <h1>LOGIN</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   );
};

export default Login;