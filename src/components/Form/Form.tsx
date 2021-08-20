import styles from './styles.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskAction, checkValidity, removeError, setErrors } from '../../store/actionCreators';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IErrors } from '../../types/types';

const Form: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const validation: IErrors = useTypedSelector((state) => state.validationErrors);
  const dispatch = useDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const name = e.target.name;

    if (name === 'input') {
      e.target.value.length < 2 ? dispatch(setErrors()) : dispatch(removeError());
    }
    setValue(e.target.value);
    dispatch(checkValidity(e.target.checkValidity()));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    dispatch(addTaskAction(value));
    setValue('');
    dispatch(checkValidity(false));
  };

  return (
    <div>
      <form name='form' onSubmit={handleSubmit} className={styles.form} noValidate>
        <input
          value={value}
          onChange={handleChange}
          autoComplete='off'
          className={styles.input}
          minLength={2}
          required
          name='input'
        />
        <button
          type='submit'
          className={`${styles.button} ${
            validation.isValid ? styles.buttonActive : styles.buttonDisabled
          }`}
          disabled={!validation.isValid}
        >
          Добавить
        </button>
      </form>
      <span className={styles.error}>{validation.input || ''}</span>
    </div>
  );
};

export { Form };
