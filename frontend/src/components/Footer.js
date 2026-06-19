'use client'

import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const pageLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about-us' },
    { name: 'Programmes', url: '/programmes' },
    { name: 'Schools', url: '/schools' },
    { name: 'Contact', url: '/contact-us' },
    { name: 'Donate', url: '/donate' },
  ]

  return (
    <>
      <footer style={{ backgroundColor: '#0f2a52', color: 'white', padding: '60px 0 30px' }}>
        <Container>
          <Row>
            {/* Logo and Contact Info */}
            <Col lg={4} md={6} className="mb-4">
              <div className="d-flex align-items-center gap-2 mb-3">
              <Image
                src="/images/logo1.jpg"
                alt="TAED Logo"
                width={40}
                height={40}
                style={{ objectFit: 'contain', borderRadius: '50%' }}
              />

                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  TAED
                </span>
              </div>
              <p className="text-white-50 mb-4" style={{ lineHeight: '1.6' }}>
                A non-profit civil society organisation building people and creating impact through
                education, empowerment, and sustainable development.
              </p>
              
              {/* Contact Info */}
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">📞</span>
                  <span>+233 24 495 7163</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">✉️</span>
                  <span>info@taed.org.gh</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-2">📍</span>
                  <span>Buobai, Kumasi, Ghana</span>
                </div>
              </div>

              {/* Social Media */}
              {/*<div className="d-flex gap-2 mt-3">
                <a href="#" style={{ color: '#4267B2', fontSize: '1.5rem' }}>📘</a>
                <a href="#" style={{ color: '#FF0000', fontSize: '1.5rem' }}>📺</a>
                <a href="#" style={{ color: '#000000', fontSize: '1.5rem' }}>🎵</a>
                <a href="#" style={{ color: '#0A66C2', fontSize: '1.5rem' }}>💼</a>
              </div>*/}
            </Col>

            <Col lg={1}></Col> {/* Spacer */}

            {/* Page Links */}
            <Col lg={3} md={6} className="mb-4">
              <h5 className="mb-3 text-white">Page Links</h5>
              <div className="d-flex flex-column">
                {pageLinks.map((link, index) => (
                  <Link
                    key={index} 
                    href={link.url}
                    className="text-white-50 text-decoration-none mb-2 hover-link"
                    style={{ transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.color = 'white'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </Col>

            {/* Location & Map */}
            <Col lg={4} md={6} className="mb-4">
              <h5 className="mb-3 text-white">Location</h5>
              
              {/* Contact Details */}
              <div className="mb-3">
                <div className="d-flex align-items-start mb-2">
                  <span className="me-2 mt-1">📍</span>
                  <div>
                    <p className="mb-1 text-white">Buobai, Kumasi, Ghana</p>
                    <p className="text-white-50 small mb-0">Buobai Municipality</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">📞</span>
                  <span className="text-white-50">+233 24 495 7163</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-2">💬</span>
                  <span className="text-white-50">info@taed.org.gh</span>
                </div>
              </div>

              {/* Mini Map */}
              <div style={{ 
                height: '120px', 
                borderRadius: '8px', 
                overflow: 'hidden',
                border: '2px solid rgba(255,255,255,0.1)'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7925.217819152831!2d-1.5906571999999999!3d6.69526485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb942fa5751e05%3A0x9054a5ee6b0b9241!2sAdukrom%2C%20Kumasi%2C%20Ghana!5e0!3m2!1sen!2sus!4v1766511110962!5m2!1sen!2sus"
                  width="100%"
                  height="120"
                  style={{ border: 0, filter: 'grayscale(1) opacity(0.8)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Markazul Huda Location"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Copyright Section */}
      <section style={{ backgroundColor: '#000', color: 'white', padding: '20px 0', textAlign: 'center' }}>
        <Container>
          <Row className="align-items-center">
              <p className="mb-0 text-white-50">
                © 2025 TAED:  Taybah Association for Education &amp; Development. <br/> All rights reserved.
              </p>
              <p className="mb-0 text-white-50">
                Designed by:  <span style={{ color: 'white' }}>Kusuntu AI Lab</span>
              </p>
          </Row>
        </Container>
      </section>
    </>
  )
}