// app/layout.tsx
import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gruas Torres Web",
  description: "Professional roadside assistance and towing service led by Armando Torres, TC Cuatromil competitor. 24/7 support and quick response times.",
  keywords: "roadside assistance, towing service, TC Cuatromil, Armando Torres, emergency towing",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="pt-20"> {/* este padding compensa el header fijo */}
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
