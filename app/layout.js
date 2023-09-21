import './globals.css'

export const metadata = {
  title: 'My Carhub',
  description: 'Discover new cars around you now!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
