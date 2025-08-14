"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="w-full border-b bg-gray-950">
      <div className="w-full flex items-center justify-around h-16">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
            <img src="/logo.png" alt="Logo" className="w-11 h-11" />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex gap-5 ">
          <Link
            href="/"
            className="px-3 py-2 text-xl transition-all text-foreground hover:text-primary font-semibold text-white hover:text-blue-600 ease-in"
          >
            Home
          </Link>
          <Link
            href="/duvidas"
            className="px-3 py-2 text-xl transition-all text-muted-foreground hover:text-primary font-semibold text-white hover:text-blue-600 ease-in "
          >
            Dúvidas
          </Link>
          <Link
            href="/delivery"
            className="px-3 py-2 text-xl transition-all text-muted-foreground hover:text-primary font-semibold text-white hover:text-blue-600 ease-in "
          >
            Delivery
          </Link>
          <Link
            href="/sobre"
            className="px-3 py-2 text-xl transition-all text-muted-foreground hover:text-primary font-semibold text-white hover:text-blue-600 ease-in "
          >
            Sobre
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/login">
            <span className="bg-blue-400 text-xl rounded-2xl px-3 py-1 hover:bg-blue-500 hover:text-white transition-all ease-in font-semibold">
              Login
            </span>
          </Link>
          <Link href="/cadastro">
            <span className="bg-blue-600 text-xl rounded-2xl px-4 py-1 hover:bg-blue-700 hover:text-white transition-all ease-in font-semibold">
              Cadastro
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Abrir menu"
            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileOpen && (
        <div className="border-t md:hidden bg-background">
          <div className="px-4 pt-4 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/duvidas-frequentes"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Dúvidas Frequentes
            </Link>
            <Link
              href="/delivery"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Delivery
            </Link>
            <Link
              href="/sobre"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Sobre
            </Link>
            <div className="flex flex-col pt-4 space-y-2">
              <Link
                href="/login"
                className="inline-flex items-center justify-start h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/cadastro"
                className="inline-flex items-center justify-start h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setMobileOpen(false)}
              >
                Cadastro
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}