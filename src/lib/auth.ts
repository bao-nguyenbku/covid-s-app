import { AuthOptions } from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        phoneNumber: { type: 'text' },
        password: { label: 'password' },
      },
      async authorize(credentials) {
        //credentials:  {
        //   redirect: 'false',
        //   phoneNumber: 'baonguyen@gmail.com',
        //   password: '12345678',
        //   csrfToken: 'f58cc79da7c50efb12cf57444275518e9fe90f74d90284e7a676d9937ce5eb3e',
        //   callbackUrl: 'http://localhost:3000/signin',
        //   json: 'true'
        // }
        if (!credentials) 
          return null;
        const user = {
          id: Math.random().toString(),
          name: 'Bảo Nguyễn',
          phoneNumber: '0934858354',
          image:
            'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
        }
        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user && user.id && user.phoneNumber) {
        token.id = user.id
        token.phoneNumber = user.phoneNumber
      }
      return token
    },
    async session({ session, token }) {
      if (token && token.id) {
        session.user.id = token.id
        session.user.phoneNumber = token.phoneNumber as string
      }
      return session
    },
  },
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: 'jwt',
  },
}
