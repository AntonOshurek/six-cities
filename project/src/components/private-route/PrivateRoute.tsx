import { Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../consts/consts';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children, authorizationStatus} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.LOGIN} />
  );
}

export default PrivateRoute;
