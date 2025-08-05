import { Outlet } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}