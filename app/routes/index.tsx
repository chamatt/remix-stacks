import { LoaderFunction, redirect } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

export const loader: LoaderFunction = ({ request }) => {
  throw redirect('/stacks');
};
