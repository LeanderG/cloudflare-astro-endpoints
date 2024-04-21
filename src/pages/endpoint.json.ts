export const GET = ({}) => {
  return new Response(
    JSON.stringify({
      body: JSON.stringify({
        message: "This was a GET!",
      }),
    })
  );
};

export const POST = ({}) => {
  return new Response(
    JSON.stringify({
      body: JSON.stringify({
        message: "This was a POST!",
      }),
    })
  );
};
