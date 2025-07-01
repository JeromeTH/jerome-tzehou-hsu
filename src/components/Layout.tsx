import Sidebar from './Sidebar'
import type { ReactNode } from 'react'
import './Layout.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <main className="main">{children}</main>
    </div>
  )
}
