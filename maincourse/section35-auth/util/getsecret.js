export const GetSecret = async (email, db) => {
  try {
    const result = await db.query("SELECT secret FROM users WHERE email = $1", [
      email,
    ]);

    if (result.rows.length > 0) {
      return result.rows[0];
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(
      "There's something error retrieving secret: " + error.message
    );
  }
};
