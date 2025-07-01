import Sidebar from './Sidebar'
import type { ReactNode } from 'react'
import './Layout.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">{children}</main>
    </div>
  )
}
