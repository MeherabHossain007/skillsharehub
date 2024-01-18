// pages/api/api.js
// use server

export default function ApiEndpoint(req, res) {
  const data = {
    name: "Hello world",
  };

  res.status(200).json(data);
}
