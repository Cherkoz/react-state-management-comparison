import { Link } from 'react-router-dom';
import './header.css';

export function Header() {
  return (
    <header className={'header'}>
      <nav>
        <Link to={'/'}>Main page</Link>
        <Link to={'/react-context'}>React Context</Link>
        <Link to={'/redux'}>Redux</Link>
        <Link to={'/effector'}>Effector</Link>
      </nav>
    </header>
  );
}
