export const get = ({ request }) => {
  return {
    body: JSON.stringify({
      message: "This was a GET!",
    }),
  };
};

export const post = ({ request }) => {
  return {
    body: JSON.stringify({
      message: "This was a POST!",
    }),
  };
};
