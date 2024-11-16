export default function handler(request, response) {
  if (request.method === "POST") {
    const data = request.body.email;
    return response.status(201).json({
      message: "Successfull",
      data,
    });
  }
}
