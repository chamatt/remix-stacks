import { Outlet } from '@remix-run/react';

export default () => {
  return (
    <div>
      {' '}
      Layout <Outlet />
    </div>
  );
};
