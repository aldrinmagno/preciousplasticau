<template>
  <div class="about">
    <div class="container">
      <header class="page-header">
        <h1>About Precious Plastic Darwin</h1>
        <p class="intro">Learn about our mission to turn Darwin's plastic waste into valuable products through community workshops and education.</p>
      </header>

      <!-- Mission & Impact -->
      <section class="mission-section">
        <div class="mission-content">
          <div class="mission-text">
            <h2>Our mission</h2>
            <p>We're building a circular economy in Darwin by transforming plastic waste into valuable products through community-driven recycling, education, and innovation.</p>
            <p>Part of the global Precious Plastic movement, we focus on HDPE (#2) and PP (#5) plastics that often end up in landfill despite being technically recyclable.</p>
          </div>
          <div class="impact-counters">
            <h3>Our impact so far</h3>
            <div class="counters">
              <div class="counter">
                <span class="number">2,450</span>
                <span class="label">Kg plastic diverted</span>
              </div>
              <div class="counter">
                <span class="number">156</span>
                <span class="label">Products made</span>
              </div>
              <div class="counter">
                <span class="number">89</span>
                <span class="label">Community volunteers</span>
              </div>
              <div class="counter">
                <span class="number">12</span>
                <span class="label">School partnerships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Media Kit -->
      <section class="media-section">
        <h2>Media kit</h2>
        <div class="media-content">
          <div class="media-info">
            <p>Resources for journalists, partners, and supporters. High-resolution images, logos, and fact sheets available for download.</p>
            <div class="media-contact">
              <h3>Media contact</h3>
              <p>📧 <a href="mailto:hello@preciousplastic.com.au">hello@preciousplastic.com.au</a></p>
              <p>📱 Available for interviews and site visits</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    // Add structured data
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Precious Plastic Darwin",
        "description": "Learn about our mission to turn Darwin's plastic waste into valuable products through community workshops and education",
        "url": "https://preciousplastic.com.au/about",
        "mainEntity": {
          "@type": "Organization",
          "name": "Precious Plastic Darwin"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://preciousplastic.com.au/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://preciousplastic.com.au/about"
          }
        ]
      }
    ]

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)
  }
}
</script>

<style scoped>
.about {
  padding: 2rem 0;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-header h1 {
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.intro {
  font-size: 1.2rem;
  color: #1E1E1E;
  opacity: 0.8;
  max-width: 700px;
  margin: 0 auto;
}

.mission-section {
  margin-bottom: 4rem;
}

.mission-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.mission-text h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1E1E1E;
}

.mission-text p {
  font-size: 1.1rem;
  color: #1E1E1E;
  opacity: 0.8;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.impact-counters {
  background: rgba(249, 197, 19, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
}

.impact-counters h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #1E1E1E;
}

.counters {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.counter {
  text-align: center;
}

.counter .number {
  display: block;
  font-size: 2rem;
  font-weight: 600;
  color: #F9C513;
  margin-bottom: 0.5rem;
}

.counter .label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #1E1E1E;
  opacity: 0.8;
}

.partners-section {
  margin-bottom: 4rem;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.partner-card {
  background: #FAFAF9;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(30, 30, 30, 0.08);
}

.partner-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.partner-card ul {
  list-style: none;
  padding: 0;
}

.partner-card li {
  padding: 0.5rem 0;
  color: #1E1E1E;
  opacity: 0.8;
  position: relative;
  padding-left: 1.5rem;
}

.partner-card li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #1B73E8;
}
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .mission-content {
    grid-template-columns: 1fr;
  }
  
  .counters {
    grid-template-columns: 1fr;
  }
}
</style>