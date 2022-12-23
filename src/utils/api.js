const BASE_URL = "https://fake-social-api.vercel.app/";

const GET = async (path) => {
  const res = await fetch(BASE_URL + path);

  return await res.json();
};

const POST = async (path, body) => {
  const res = await fetch(BASE_URL + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};

const DELETE = async (path, id) => {
  const res = await fetch(`${BASE_URL}${path}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
};

const PATCH = async (path, postId, body) => {
  const res = await fetch(BASE_URL + path + postId, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};

export { GET, POST, DELETE, PATCH };
