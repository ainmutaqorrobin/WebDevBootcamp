import bcrypt from "bcrypt";
const saltRounds = 10;
export const HashPassword = (password) => {
  return bcrypt.hash(password, saltRounds);
};

export const VerifyPassword = (enteredPassword, userPassword) => {
  return bcrypt.compare(enteredPassword, userPassword);
};
