import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `getServerSession`, `useSession`, etc.
   */
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }


}
