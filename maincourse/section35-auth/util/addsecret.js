export const AddSecret = async (secret, email, db) => {
  try {
    const result = await db.query(
      "UPDATE users SET secret = $1 WHERE email = $2 RETURNING *",
      [secret, email]
    );

    if (result.rows.length > 0) {
      return result.rows[0];
    } else {
      throw new Error("User not found or secret not updated.");
    }
  } catch (error) {
    throw new Error(
      "There's something error creating secret: " + error.message
    );
  }
};
