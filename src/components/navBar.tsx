"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      {/* Main Navbar */}
      <header className=" top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center gap-4 px-4 md:px-6">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={close}>
            <Image
              src="/icons/check.svg"
              alt="Logo"
              className="h-5 w-5 brightness-0 scale-150"
              width={20}
              height={20}
              priority
            />
          </Link>

          {/* Middle: Desktop nav */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={`text-muted-foreground hover:text-primary py-1.5 px-3 text-sm font-medium rounded-md transition-colors ${
                          isLinkActive(link.href)
                            ? "bg-accent text-accent-foreground"
                            : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right: CTA + Mobile trigger */}
          <div className="flex items-center gap-2 ml-auto">
            <Button asChild size="sm" className="hidden md:inline-flex text-sm">
              <Link href="/signin">Get Started</Link>
            </Button>

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              className="h-9 w-9 px-0 md:hidden"
              size="sm"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6H20" />
                  <path d="M4 12H20" />
                  <path d="M4 18H20" />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Backdrop overlay (independent, does not shift layout) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar Drawer (isolated, does not manipulate DOM layout) */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 max-w-[85vw] z-50 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Header inside drawer */}
        <div className="flex h-16 items-center justify-between border-b px-6">
          <Link href="/" className="flex items-center gap-2" onClick={close}>
            <Image
              src="/icons/check.svg"
              alt="Logo"
              className="h-6 w-6 brightness-0"
              width={24}
              height={24}
            />
          </Link>

          <Button
            variant="ghost"
            size="sm"
            className="h-9 w-9 px-0"
            aria-label="Close menu"
            onClick={close}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </Button>
        </div>

        {/* Links */}
        <div className="flex flex-col h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex-1 px-6 py-6">
            <div className="space-y-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isLinkActive(link.href)
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Bottom CTA */}
          <div className="border-t p-6 space-y-3 flex-shrink-0">
            <Button asChild className="w-full h-11">
              <Link href="/signin" onClick={close}>
                Get Started
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full h-11">
              <Link href="/demo" onClick={close}>
                Try Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
