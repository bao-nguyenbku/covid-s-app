import NextAuth, { AuthOptions } from 'next-auth'
import CredentailProvider from 'next-auth/providers/credentials'
import { authOptions } from '@/lib/auth'

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
