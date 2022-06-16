export const getRemixStackRepos = async () => {
  const response = await fetch(
    'https://api.github.com/search/repositories?q=topic:remix-stacks'
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return response;
};
