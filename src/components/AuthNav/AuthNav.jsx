import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

export const AuthNav = () => {

  const buildLinkClass = ({ isActive }) =>
    clsx(css.navLink, { [css.active]: isActive, });
  
  return (
    <div>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
