import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskCounter } from '../components/TaskCounter/TaskCounter';
import { StatusFilter } from '../components/StatusFilter/StatusFilter';
import { TaskList } from '../components/TaskList/TaskList';
import { TaskEditor } from '../components/TaskEditor/TaskEditor';
import { fetchTasks } from '../redux/tasks/operations';
import { selectLoading } from '../redux/tasks/selectors';

export default function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{margin: '30px auto', width: '200px'}}>Your tasks</h2>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <section>
            <TaskCounter />
        </section>
        <section>
            <h3>Filter by status</h3>
            <StatusFilter />
        </section>
      </div>
      <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
    </div>
  );
}
