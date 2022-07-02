import type { ActionFunction, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = ({ params }) => {
  console.log(params);

  return {};
};

export const action: ActionFunction = ({ params }) => {
  console.log(params);

  return {};
};

// export default () => <div></div>;
