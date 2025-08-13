"use client"

import Link from "next/link"

export default   function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="ml-2 text-xl font-bold text-foreground">Logo</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/duvidas-frequentes"
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Dúvidas Frequentes
              </Link>
              <Link
                href="/delivery"
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Delivery
              </Link>
              <Link
                href="/sobre"
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Sobre
              </Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Login
            </Link>
            <Link
              href="/cadastro"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Cadastro
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            <Link href="/" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link
              href="/duvidas-frequentes"
              className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium"
            >
              Dúvidas Frequentes
            </Link>
            <Link
              href="/delivery"
              className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium"
            >
              Delivery
            </Link>
            <Link
              href="/sobre"
              className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium"
            >
              Sobre
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Link
                href="/login"
                className="inline-flex items-center justify-start rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Login
              </Link>
              <Link
                href="/cadastro"
                className="inline-flex items-center justify-start rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Cadastro
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
