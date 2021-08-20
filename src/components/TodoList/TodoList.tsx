import styles from './styles.module.css';
import { ITodo } from '../../types/types';
import { TodoItem } from '../TodoItem/TodoItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const TodoList: React.FC = () => {
  const tasks: ITodo[] = useTypedSelector((state) => state.tasks);

  return (
    <ul className={styles.list}>
      {tasks.map((task: ITodo) => (
        <li key={task.id}>
          <TodoItem key={task.id} {...task} />
        </li>
      ))}
    </ul>
  );
};

export { TodoList };
