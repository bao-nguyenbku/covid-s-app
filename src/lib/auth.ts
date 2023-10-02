import { NEXTAUTH_SECRET } from '@/constants'
import { AuthOptions } from 'next-auth'
import { getToken } from 'next-auth/jwt'
import CredentialProvider from 'next-auth/providers/credentials'
import { NextRequest } from 'next/server'
import prisma from './prisma-client'

export const authOptions: AuthOptions = {
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        phoneNumber: { type: 'text' },
        password: { label: 'password' },
      },
      async authorize(credentials) {
        // credentials:  {
        //   redirect: 'false',
        //   phoneNumber: 'baonguyen@gmail.com',
        //   password: '12345678',
        //   csrfToken: 'f58cc79da7c50efb12cf57444275518e9fe90f74d90284e7a676d9937ce5eb3e',
        //   callbackUrl: 'http://localhost:3000/signin',
        //   json: 'true'
        // }
        if (!credentials) return null
        const { phoneNumber, password } = credentials
        const user = await prisma.user.findUnique({
          where: {
            phoneNumber,
            password,
          },
        })
        if (!user) {
          return null
        }

        return {
          id: user.id,
          name: user.fullname,
          image: user.image,
          phoneNumber: user.phoneNumber,
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

export const getUserInfo = async (req: NextRequest) => {
  return getToken({ req, secret: NEXTAUTH_SECRET })
}
