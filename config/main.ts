export const END_POINT =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/user"
    : "https://vindaoapi.herokuapp.com/api/user";
