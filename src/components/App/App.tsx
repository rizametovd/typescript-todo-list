import '../../vendor/normalize.css';
import styles from './styles.module.css';
import { TodoList } from '../TodoList/TodoList';
import { Form } from '../Form/Form';
import { Provider } from 'react-redux';
import { store } from '../../store';

const App: React.FC = () => {
  return (
    <div className={styles.page}>
      <Provider store={store}>
        <Form />
        <TodoList />
      </Provider>
    </div>
  );
};

export { App };
