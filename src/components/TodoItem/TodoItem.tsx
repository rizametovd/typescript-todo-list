import styles from './styles.module.css';
import { ITodo } from '../../types/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { removeTaskAction, toggleTaskStatus } from '../../store/actionCreators';

const TodoItem: React.FC<ITodo> = ({ id, task, complete }) => {
  const tasks: ITodo[] = useTypedSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const deleteTask = (id: string): void => {
    const removeTask = tasks.filter((task) => task.id !== id);
    dispatch(removeTaskAction(removeTask));
  };

  const toggleTask = (id: string): void => {
    const taskStatus = tasks.map((task) =>
      task.id !== id ? task : { ...task, complete: !task.complete }
    );
    dispatch(toggleTaskStatus(taskStatus));
  };

  return (
    <div className={styles.item}>
      <label className={styles.itemLabel}>
      <input
        type='checkbox'
        checked={complete}
        className={styles.checkbox}
        onChange={() => toggleTask(id)}
      />
      <p className={styles.text}>{task}</p>
      </label>
      
      <button className={styles.deleteButton} onClick={() => deleteTask(id)} type='button' />
    </div>
  );
};

export { TodoItem };
