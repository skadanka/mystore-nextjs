import { APP_DESCRIPTION, APP_NAME, APP_URL } from "@/lib/constants";
import "./globals.css";

export const metadata = {
  title: {
   template: `%s | ${APP_NAME}`,
   default: 'MyStore'
  },
  description: {APP_DESCRIPTION},
  metadataBase: new URL(APP_URL)
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen'>{children}</body>
    </html>
  )
}
