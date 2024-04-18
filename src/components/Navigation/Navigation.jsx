import { NavLink } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';
import clsx from 'clsx';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildLinkClass = ({ isActive }) =>
  clsx(css.navLink, { [css.active] : isActive, });

  return (
    <nav>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/tasks">
          Tasks
        </NavLink>
      )}
    </nav>
  );
};
