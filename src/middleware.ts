import { withAuth } from 'next-auth/middleware'

export default withAuth(
  () => {
    return;
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return true
      },
    },
  },
)
// export function middleware(request: NextRequest) {
// return NextResponse.redirect(new URL('/new-page', request.url));
//   NextResponse.next();
// }
export const config = {
  matcher: ['/'],
}
