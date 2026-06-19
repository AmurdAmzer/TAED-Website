// components/Header.js
'use client'

import { Container, Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'
import SearchBar from './SearchBar'

export default function Header() {
  const pathname = usePathname()
  console.log('Current pathname:', pathname)
  const [expanded, setExpanded] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about-us' },
    { label: 'Programmes', href: '/programmes' },
    { label: 'Schools', href: '/schools' },
    { label: 'Contact', href: '/contact-us' },
  ]

  return (
    <Navbar
    variant="dark" 
    expand="lg" 
    className="py-3 shadow-sm" 
    sticky="top"
    expanded={expanded}
    onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className="d-flex align-items-center gap-2">
        <Image
          src="/images/logo1.jpg"
          alt='TAED Logo'
          width={40}
          height={40}
          style={{ objectFit: 'contain', borderRadius: '50%' }}
        />

            <span style={{ color: 'white', fontWeight: 'bold' }}>
          TAED </span>
        </Navbar.Brand>
        
        {/* Mobile menu toggle - hidden when search is focused on obile only */}
        {!isSearchFocused && (
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
        )}
        
        <Navbar.Collapse id='basic-navbar-nav'>
          {/* Nav items - hidden when search is focused on mobile */}
            <Nav className="ms-auto">
              {navItems.map((item) => (
                <Nav.Link
                key={item.label}
                as={Link}
                href={item.href}
                className={`nav-link-responsive ${pathname === item.href ? 'active-link' : ''} ${isSearchFocused ? 'd-none d-lg-block' : ''}`}
                onClick={() => setExpanded(false)}
              >
                {item.label}
              </Nav.Link>
              ))}

            <Nav.Link
              as={Link}
              href="/donate"
              onClick={() => setExpanded(false)}
              className="ms-lg-2 mt-2 mt-lg-0 px-3 py-1 rounded text-white text-center"
              style={{ backgroundColor: '#2e8c5e', fontWeight: 600 }}
            >
              Donate
            </Nav.Link>
            </Nav>

          {/* Search Bar - Always visible */}
          <div className={isSearchFocused ? "ms-auto w-100 w-lg-auto ms-lg-3" : "ms-3"}>
            <SearchBar 
            onSearchFocus={setIsSearchFocused}
            onNavigate={() => setExpanded(false)} 
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}