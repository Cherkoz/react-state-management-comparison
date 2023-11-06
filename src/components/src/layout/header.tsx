import { Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';

export function Header() {
  return (
    <header className={'header'}>
      <Navbar>
        <Navbar.Collapse>
          <Navbar.Link>
            <Link to={'/'}>Main page</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to={'/react-context'}>React Context</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to={'/redux'}>Redux</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to={'/effector'}>Effector</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
