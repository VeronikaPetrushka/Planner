import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { TaskCounter } from '../TaskCounter/TaskCounter';
import { StatusFilter } from '../StatusFilter/StatusFilter';
import { useSelector } from 'react-redux';
import { AuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? 
        <div>
          <UserMenu />
          <section>
            <TaskCounter />
          </section>
          <section className={css.section}>
            <h2 className={css.title}>Filter by status</h2>
            <StatusFilter />
          </section>
        </div>
        : <AuthNav />
      }
    </header>
  );
};
