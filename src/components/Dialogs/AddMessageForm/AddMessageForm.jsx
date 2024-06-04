import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../../common/FormsControll/FormsControll';
import {maxLengthCreator, required} from '../../../utils/validators/validatirs';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = props => {
   return (
      <div>
         <form onSubmit={props.handleSubmit}>
            <Field
               component={Textarea}
               name='newMessageText'
               placeholder='Enter your message'
               validate={[required, maxLength50]}
            />
            <div>
               <button>Send</button>
            </div>
         </form>
      </div>
   );
};

export default reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm);
