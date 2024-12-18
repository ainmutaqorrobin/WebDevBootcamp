import { getSession } from "next-auth/react";

export default async function handler(request, response) {
  if (request.method !== "PATCH") {
    return response
      .status(405)
      .json({ message: "This endpoint only accept PUT request" });
  }

  const session = await getSession();
  if (!session) {
    return response.status(401).json({ message: "Unauthorized request" });
  }
}
