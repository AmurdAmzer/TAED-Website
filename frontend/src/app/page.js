// app/page.js
/* eslint-disable react/no-unescaped-entities */
'use client'

import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap'
import ResponsiveCardGrid from '../components/ResponsiveCardGrid'
import Hero from '../components/Hero'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // Six fields of work (from TAED's profile)
  const fields = [
    { icon: '🎓', title: 'Education & Training', description: 'Improving education quality and enhancing the efficiency of teachers and students.' },
    { icon: '👥', title: 'Youth & Women Empowerment', description: 'Empowering youth and women through training, capacity building, and entrepreneurship.' },
    { icon: '💧', title: 'Health, Water & Sanitation', description: 'Sustainable projects in health, clean water access, and environmental sanitation.' },
    { icon: '❤️', title: 'Relief & Humanitarian Aid', description: 'Food assistance, supplies, and emergency relief for families in need.' },
    { icon: '🌱', title: 'Sustainable Development', description: 'Community projects in agriculture, solar energy, and sustainable livelihoods.' },
    { icon: '🔬', title: 'Research & Partnerships', description: 'Supporting scientific research and innovation and linking it to community needs.' },
  ]

  // The five main objectives (from TAED's profile)
  const objectives = [
    'Improve education quality and enhance the efficiency of teachers and students.',
    'Empower youth and women through training, capacity building, and entrepreneurship.',
    'Implement sustainable development projects in health, water, and relief.',
    'Support scientific research and innovation and link it to community needs.',
    'Build partnerships with local and international institutions to achieve sustainable development goals.',
  ]

  const newsArticles = [
    {
      id: 1,
      title: 'Community Aid Drive',
      description: 'TAED delivers humanitarian support to families across the region, providing food and essential supplies.',
      image: '/images/taed-relief.jpg',
    },
    {
      id: 2,
      title: 'Education Programme Launch',
      description: 'Investing in teachers and curricula to raise learning standards across our schools.',
      image: '/images/taed-education.jpg',
    },
    {
      id: 3,
      title: 'Clean Water Project',
      description: 'A sustainable water and sanitation initiative bringing clean water to underserved communities.',
      image: '/images/taed-health.jpg',
    },
  ]

  // TODO(content): replace names/photos with real TAED leadership
  const leadership = [
    { name: 'Name Placeholder', position: 'Chairperson', description: 'Add a short bio for this leader.', image: '/images/Placeholder.jpg' },
    { name: 'Name Placeholder', position: 'Executive Director', description: 'Add a short bio for this leader.', image: '/images/Placeholder.jpg' },
    { name: 'Name Placeholder', position: 'Programmes Lead', description: 'Add a short bio for this leader.', image: '/images/Placeholder.jpg' },
    { name: 'Name Placeholder', position: 'Finance & Operations', description: 'Add a short bio for this leader.', image: '/images/Placeholder.jpg' },
  ]

  // The three schools running under TAED
  const schools = [
    {
      name: 'Alhuda School',
      description: "Quality Islamic and academic education under TAED's education programme.",
      url: 'https://markazulhuda.vercel.app',
    },
    {
      // TODO(content): real name, description, and site for school two
      name: 'School Two',
      description: 'Add a short description of this school.',
      url: '',
    },
    {
      // TODO(content): real name, description, and site for school three
      name: 'School Three',
      description: 'Add a short description of this school.',
      url: '',
    },
  ]

  const headingUnderline = {
    background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom',
    backgroundSize: '80% 3px',
    paddingBottom: '15px',
    width: 'fit-content',
    margin: '0 auto 1rem auto',
  }

  return (
    <>
      {/* Hero + fields strip */}
      <Hero />

      {/* About TAED */}
      <section className="py-5">
        <Container className="px-3 px-md-0">
          <h2 className="text-center mb-3" style={headingUnderline}>About TAED</h2>
          <p className="text-center text-muted mb-5 px-3">
            A community-driven organisation working at the intersection of education and development.
          </p>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="mb-4 mb-lg-0 order-2 order-lg-1">
              <Image
                src="/images/taed-building.jpg"
                alt="About TAED"
                width={500}
                height={1000}
                className="rounded about-image"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </Col>
            <Col lg={6} md={12} className="order-1 order-lg-2">
              <Row>
                <Col md={12} className="mb-4">
                  <Card className="h-100 text-center border-0 shadow">
                    <Card.Body className="p-3.5">
                      <h3 className="text-center mb-3" style={{ color: 'var(--school-blue)' }}>Our Story</h3>
                      <p className="mb-2 text-muted">
                        Taybah Association for Education and Development (TAED) is a non-profit civil society
                        organisation based in Ghana, serving humanity wherever it is. We believe education is
                        the key to change, so we focus on building people through education and training
                        programmes, and sustainable development projects, in partnership with the community
                        and donors, to achieve real and lasting impact.
                      </p>

                      <p className="mb-2" style={{ color: '#2e8c5e', fontWeight: '700' }}>Mission</p>
                      <p className="mb-2 text-muted">
                        We work to improve education quality, empower youth and women, and implement
                        sustainable development initiatives that create positive impact.
                      </p>

                      <p className="mb-2" style={{ color: '#2e8c5e', fontWeight: '700' }}>Vision</p>
                      <p className="mb-2 text-muted">
                        An educated and empowered community that actively contributes to its development.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Fields of Work */}
      <section className="py-5" style={{ backgroundColor: 'var(--taed-section)' }}>
        <Container className="px-4 px-md-0">
          <h2 className="text-center mb-3" style={headingUnderline}>Fields of Work</h2>
          <p className="text-center text-muted mb-5 px-3">
            The areas where TAED focuses its programmes and impact.
          </p>
          <Row className="justify-content-center">
            {fields.map((f, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className="h-100 text-center border-0 shadow">
                  <Card.Body className="p-4">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>{f.icon}</div>
                    <h5 className="mb-3">{f.title}</h5>
                    <p className="text-muted small">{f.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Link href="/programmes" style={{ textDecoration: 'none' }}>
              <Button variant="primary" size="lg" style={{ backgroundColor: 'var(--school-blue)', border: 'none' }}>
                Learn More
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Objectives band */}
      <section className="py-5" style={{ backgroundColor: 'var(--school-dark-blue)' }}>
        <Container className="px-4 px-md-0">
          <h2 className="text-center mb-3 text-white">Our Objectives</h2>
          <p className="text-center mb-5 px-3" style={{ color: '#9bbbdd' }}>
            Five goals that guide everything we do.
          </p>
          <Row className="justify-content-center">
            {objectives.map((obj, index) => (
              <Col lg={10} key={index} className="mb-3">
                <div className="d-flex align-items-start gap-3 p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                  <div
                    className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: '40px', height: '40px', backgroundColor: '#2e8c5e', color: 'white', fontWeight: 700 }}
                  >
                    {index + 1}
                  </div>
                  <p className="mb-0 text-white" style={{ lineHeight: 1.6 }}>{obj}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* News & Impact */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-3" style={headingUnderline}>News & Impact</h2>
          <Row>
            <Col lg={10} className="mx-auto">
              <Carousel indicators={true} controls={true} interval={5000}>
                {newsArticles.map((article) => (
                  <Carousel.Item key={article.id}>
                    <Card className="border-0 shadow mx-auto" style={{ maxWidth: '100%' }}>
                      <Card.Img variant="top" src={article.image} style={{ height: '400px', objectFit: 'cover' }} />
                      <Card.Body className="p-4 text-center">
                        <h3>{article.title}</h3>
                        <p className="text-muted">{article.description}</p>
                        <Link href="/programmes">
                          <Button
                            variant="primary"
                            className="px-4 py-2 fw-bold shadow-sm"
                            style={{ backgroundColor: 'var(--school-blue)', border: 'none', borderRadius: '8px', fontSize: '1rem' }}
                          >
                            Read More →
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-5" style={{ backgroundColor: 'var(--taed-section)' }}>
        <Container className="px-4 px-md-0">
          <h2 className="text-center mb-3" style={headingUnderline}>Leadership</h2>
          <p className="text-center text-muted mb-5 px-3">
            The people guiding TAED's vision and programmes.
          </p>
          <ResponsiveCardGrid
            items={leadership}
            renderCard={(leader) => (
              <Card className="text-center border-0 shadow h-100">
                <Card.Body className="p-4">
                  <div
                    className="rounded-circle mx-auto mb-3"
                    style={{
                      width: '120px',
                      height: '120px',
                      padding: '8px',
                      backgroundImage: `url(${leader.image})`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: 'transparent',
                      backgroundPosition: 'center',
                    }}
                  />
                  <h5 className="mb-1">{leader.name}</h5>
                  <p className="mb-3" style={{ color: '#2e8c5e', fontWeight: 600 }}>{leader.position}</p>
                  <p className="text-muted small">{leader.description}</p>
                </Card.Body>
              </Card>
            )}
          />
        </Container>
      </section>

      {/* Our Schools */}
      <section className="py-5">
        <Container className="px-4 px-md-0">
          <h2 className="text-center mb-3" style={headingUnderline}>Our Schools</h2>
          <p className="text-center text-muted mb-5 px-3">
            Educational institutions operating under the TAED umbrella.
          </p>
          <Row className="justify-content-center">
            {schools.map((school, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className="h-100 border-0 shadow">
                  <Card.Body className="p-4 text-center d-flex flex-column">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>🏫</div>
                    <h5 className="mb-3">{school.name}</h5>
                    <p className="text-muted small mb-4 flex-grow-1">{school.description}</p>
                    {school.url ? (
                      <a href={school.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Button variant="primary" style={{ backgroundColor: 'var(--school-blue)', border: 'none' }}>
                          Visit Website →
                        </Button>
                      </a>
                    ) : (
                      <span className="text-muted small fst-italic">Website coming soon</span>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}