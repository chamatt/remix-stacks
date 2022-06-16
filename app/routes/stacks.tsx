import { LoaderFunction } from '@remix-run/node';
import { getRemixStackRepos } from '~/api/getRemixStackRepos';

export const loader: LoaderFunction = async () => {
  const repos = await getRemixStackRepos();
  console.log(repos);
  // return
};

export default function Stacks() {
  return <div>Stack List</div>;
}
