import bcrypt from "bcrypt";
const saltRounds = 10;
export const HashPassword = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};

export const VerifyPassword = async (enteredPassword, userPassword) => {
  return bcrypt.compare(enteredPassword, userPassword);
};
