export const CheckUser = async (email, db) => {
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (result.rows.length > 0) {
      return result.rows[0];
    }

    return false;
  } catch (error) {
    throw new Error("Error checking user existence!");
  }
};
