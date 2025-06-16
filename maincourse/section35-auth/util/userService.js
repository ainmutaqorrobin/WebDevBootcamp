import db from "../db.js"; // or "./db.js", depending on your folder structure

export const CreateUser = async (email, password) => {
  try {
    const result = await db.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, password]
    );
    return result.rows[0];
  } catch (error) {
    if (error.code === "23505") {
      throw new Error("Email already in use");
    }
    throw new Error("Error creating user: " + error.message);
  }
};

export const CheckUser = async (email) => {
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    return result.rows.length > 0 ? result.rows[0] : false;
  } catch (error) {
    throw new Error("Error checking user: " + error.message);
  }
};

export const AddSecret = async (secret, email) => {
  try {
    const result = await db.query(
      "UPDATE users SET secret = $1 WHERE email = $2 RETURNING *",
      [secret, email]
    );
    if (result.rows.length > 0) {
      return result.rows[0];
    }
    throw new Error("User not found or secret not updated.");
  } catch (error) {
    throw new Error("Error updating secret: " + error.message);
  }
};

export const GetSecret = async (email) => {
  try {
    const result = await db.query("SELECT secret FROM users WHERE email = $1", [
      email,
    ]);
    return result.rows.length > 0 ? result.rows[0] : null;
  } catch (error) {
    throw new Error("Error retrieving secret: " + error.message);
  }
};
