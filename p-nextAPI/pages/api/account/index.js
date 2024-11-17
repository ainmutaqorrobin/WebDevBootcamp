export default function handler(request, response) {
  if (request.method === "POST") {
    const email = request.body.email;

    if (!email || !email.includes("@")) {
      return response.status(400).json({
        message: "Invalid email address.",
        email: email,
      });
    }
    const data = email;
    return response.status(201).json({
      message: "Successfull",
      data,
    });
  }
}
