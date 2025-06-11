export const CreateUser = async (email, password, db) => {
  try {
    const result = await db.query(
      "INSERT INTO users (email,password) VALUES ($1,$2) RETURNING *",
      [email, password]
    );

    if (result) return result.rows[0];
  } catch (error) {
    if (error.code === "23505") {
      throw new Error("Email already in use");
    }
    throw new Error("There's something error creating user: " + error.message);
  }
};
