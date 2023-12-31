import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import LoginModal from '@/components/LoginModal'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
  
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem={true}
          disableTransitionOnChange
        >
            <LoginModal />
            <main className="min-h-screen bg-background flex flex-col items-center">
              {children}
            </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
