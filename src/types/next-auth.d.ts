import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

interface CustomUser {
  phoneNumber?: string
}
interface CustomJWT {
  id?: string,
  phoneNumber?: string,
  name?: string
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      email: string;
      role: string;
      [key: string]: string;
    };
  }
  interface User extends CustomUser {
    id?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends CustomJWT {}
}
