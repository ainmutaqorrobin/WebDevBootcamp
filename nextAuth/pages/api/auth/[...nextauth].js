import NextAuth from "next-auth";
import { Providers } from "next-auth/providers";
import { connectDatabase } from "../../../util/db";
import { verifyPassword } from "../../../util/auth";
export default NextAuth({
  //   session: { jwt: true },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectDatabase();

        const usersCollection = client.db("next-auth").collection("users");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          throw new Error("No user found!");
        }
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!isValid) {
            throw new Error("Wrong password!");
        }
        client.close();

        return { email: user.email };
      },
    }),
  ],
});
