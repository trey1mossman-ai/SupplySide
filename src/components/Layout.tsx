import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import EstimateModal from './common/EstimateModal'

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet context={{ openModal: () => setIsModalOpen(true) }} />
      </main>
      <Footer onOpenModal={() => setIsModalOpen(true)} />
      <EstimateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}