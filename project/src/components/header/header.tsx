import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';

function Header(): JSX.Element {
  return(
    <header className="page-header film-card__head">
      <Logo />
      <UserBlock />
    </header>
  );
}

export default Header;
