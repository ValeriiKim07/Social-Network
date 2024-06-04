import s from './FormsControll.module.css';

const FormsControll =
   Element =>
   ({input, meta, ...props}) => {
      const hasError = meta.error && meta.touched;

      return (
         <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
               <Element {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
         </div>
      );
   };

export const Textarea = FormsControll('textarea');

export const Input = FormsControll('input');
