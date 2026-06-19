// app/layout.js
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'TAED — Taybah Association for Education & Development',
  description: 'A non-profit civil society organisation based in Ghana, serving humanity through education, empowerment, and sustainable development.',
  icons: {
    icon: '/favicon.ico', // or .png/.svg
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}