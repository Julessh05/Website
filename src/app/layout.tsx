import Navbar from './components/navbar/navbar'
import './globals.css'

export const metadata = {
  title: 'Julian Schumacher - Home',
  description: 'My Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
        <footer>
          <p> © Julian Schumacher 2023 </p>
          <p> All rights reserved </p>
        </footer>
      </body>
    </html>
  )
}
