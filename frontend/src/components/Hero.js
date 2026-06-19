// components/Hero.js
'use client'

import { useState } from 'react'
import { Container, Carousel } from 'react-bootstrap'
import Link from 'next/link'

// The 6 fields of work — order matters; slide.field maps into this array
export const FIELDS = [
  { icon: '🎓', label: 'Education & Training' },
  { icon: '👥', label: 'Youth & Women Empowerment' },
  { icon: '💧', label: 'Health, Water & Sanitation' },
  { icon: '❤️', label: 'Relief & Humanitarian Aid' },
  { icon: '🌱', label: 'Sustainable Development' },
  { icon: '🔬', label: 'Research & Partnerships' },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  const slides = [
    {
      title: 'Building people',
      titleHighlight: 'Creating impact',
      description:
        'A non-profit civil society organisation based in Ghana, serving humanity through education, empowerment, and sustainable development.',
      image: '/images/taed-building.jpg',
      field: null,
    },
    {
      title: 'Education & Training',
      titleHighlight: 'Quality for teachers & students',
      description:
        'We invest in schools, curricula, and educators to raise the standard of learning across our communities.',
      image: '/images/taed-education.jpg',
      field: 0,
    },
    {
      title: 'Youth & Women Empowerment',
      titleHighlight: 'Capacity through training',
      description:
        'Empowering the next generation with skills, confidence, and opportunities to lead meaningful lives.',
      image: '/images/taed-youth.jpg',
      field: 1,
    },
    {
      title: 'Health, Water & Sanitation',
      titleHighlight: 'Sustainable projects for communities',
      description:
        'Bringing clean water, healthcare access, and sanitation to communities that need it most.',
      image: '/images/taed-health.jpg',
      field: 2,
    },
    {
      title: 'Relief & Humanitarian Aid',
      titleHighlight: 'Delivering aid where it matters',
      description:
        'Food assistance, emergency supplies, and community support for families in crisis.',
      image: '/images/taed-relief.jpg',
      field: 3,
    },
    {
      title: 'Sustainable Development',
      titleHighlight: 'Agriculture, energy & livelihoods',
      description:
        'Long-term projects in solar energy, farming, and sustainable living that uplift entire communities.',
      image: '/images/taed-dev.jpg',
      field: 4,
    },
    {
      title: 'Research & Partnerships',
      titleHighlight: 'Linking innovation to community needs',
      description:
        'Building local and international partnerships to drive research and create lasting societal impact.',
      image: '/images/taed-research.jpg',
      field: 5,
    },
  ]

  const handleSelect = (selectedIndex) => setIndex(selectedIndex)

  const goToField = (fieldIdx) => {
    const slideIdx = slides.findIndex((s) => s.field === fieldIdx)
    if (slideIdx !== -1) setIndex(slideIdx)
  }

  const activeField = slides[index]?.field

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={5000}
        fade
        controls={true}
        indicators={true}
        className="hero-carousel"
      >
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <section
              className="hero-section text-white d-flex align-items-center position-relative"
              style={{
                minHeight: '85vh',
                padding: '0 1rem',
                background: `linear-gradient(rgba(15, 42, 82, 0.86), rgba(26, 58, 107, 0.72)), url(${slide.image}) center/cover no-repeat`,
                overflowX: 'hidden',
              }}
            >
              <div
                className="position-absolute w-100 h-100"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(58,170,114,0.10) 0%, transparent 70%)',
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              />
              <Container className="position-relative" style={{ zIndex: 3 }}>
                <div className="text-center">
                  <h3 className="display-4 mb-4 text-white" style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)' }}>
                    {slide.title}
                  </h3>
                  <h1
                    className="display-3 display-md-1 fw-bold mb-4 text-white"
                    style={{
                      fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
                      textAlign: 'center',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                    }}
                  >
                    {slide.titleHighlight}
                  </h1>
                  <p className="lead mb-5 text-white" style={{ fontSize: 'clamp(1rem, 3.5vw, 1.4rem)', lineHeight: '1.6' }}>
                    {slide.description}
                  </p>
                  <Link href="/programmes" style={{ textDecoration: 'none' }}>
                    <button
                      className="btn btn-lg px-5 py-3 position-relative"
                      style={{
                        backgroundColor: '#2e8c5e',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      Explore Our Programmes
                      <span style={{ position: 'absolute', top: '50%', right: '25px', transform: 'translateY(-50%)', fontSize: '1.4rem' }}>
                        →
                      </span>
                    </button>
                  </Link>
                </div>
              </Container>
            </section>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Fields-of-work quick-nav strip — synced with the carousel */}
      <div style={{ backgroundColor: '#0f2a52' }}>
        <Container>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
              gap: '10px',
              padding: '1.25rem 0',
            }}
          >
            {FIELDS.map((f, i) => {
              const highlighted = activeField === i
              return (
                <button
                  key={i}
                  onClick={() => goToField(i)}
                  aria-label={`Show ${f.label}`}
                  style={{
                    background: highlighted ? 'rgba(46,140,94,0.28)' : 'rgba(255,255,255,0.05)',
                    border: highlighted
                      ? '1px solid rgba(58,170,114,0.6)'
                      : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    padding: '12px 8px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>{f.icon}</div>
                  <span
                    style={{
                      fontSize: '12px',
                      lineHeight: 1.3,
                      display: 'block',
                      color: highlighted ? '#c0f0da' : '#9bbbdd',
                      fontWeight: highlighted ? 600 : 400,
                    }}
                  >
                    {f.label}
                  </span>
                </button>
              )
            })}
          </div>
        </Container>
      </div>
    </>
  )
}