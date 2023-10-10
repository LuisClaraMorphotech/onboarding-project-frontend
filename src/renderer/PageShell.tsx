import React from 'react'

import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import './css/index.css'
import Footer from "../layouts/Footer"
import Navbar from "../layouts/Navbar"

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Navbar />

          <Content>{children}</Content>

          <Footer />

        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col max-w-full m-auto'>
      {children}
    </div>
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container" className='p-5 pb-12 border-l-[2px_solid_#eee] min-h-screen'>
      {children}
    </div>
  )
}


