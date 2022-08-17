import { Link } from 'react-router-dom';

import { AppRoute } from '../../../consts/consts';

function UserBlock(): JSX.Element {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link  to={AppRoute.MY_LIST}>
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </Link>
        </div>

      </li>
      <li className="user-block__item">
        <a className="user-block__link" href="link">Sign out</a>
      </li>
    </ul>
  );
}

export default UserBlock;
