<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>Plastic recycling in Darwin, made local and hands-on</h1>
        <p>Drop off HDPE (#2) and PP (#5), learn to sort plastics, and see them remade into new products—right here in Darwin.</p>
        <div class="hero-ctas">
          <router-link to="/plastic-drop-off" class="btn-primary">Find a drop-off</router-link>
          <router-link to="/events-workshops" class="btn-secondary">Book a workshop</router-link>
          <router-link to="/shop" class="btn-tertiary">Join the shop waitlist</router-link>
        </div>
      </div>
    </section>

    <!-- What We Accept -->
    <section class="what-we-accept">
      <div class="container">
        <h2>What we accept</h2>
        <div class="plastic-types">
          <div class="plastic-card accepted">
            <div class="plastic-icon">🥛</div>
            <h3>PET #1</h3>
            <p>Water bottles, soft drink bottles</p>
            <span class="status">✅ We accept</span>
          </div>
          <div class="plastic-card accepted">
            <div class="plastic-icon">🧴</div>
            <h3>HDPE #2</h3>
            <p>Milk bottle lids, shampoo bottles</p>
            <span class="status">✅ We accept</span>
          </div>
          <div class="plastic-card accepted">
            <div class="plastic-icon">🥤</div>
            <h3>PP #5</h3>
            <p>Caps, containers</p>
            <span class="status">✅ We accept</span>
          </div>
        </div>
        <p class="prep-note">Clean, dry, labels removed. We accept PET #1, HDPE #2, and PP #5.</p>
        <router-link to="/plastic-drop-off" class="link-cta">Full list & prep guide →</router-link>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <div class="container">
        <h2>How it works</h2>
        <div class="process-steps">
          <div class="step">
            <div class="step-icon">📦</div>
            <h3>Collect</h3>
            <p>Gather clean HDPE & PP plastics</p>
          </div>
          <div class="step">
            <div class="step-icon">🔄</div>
            <h3>Sort</h3>
            <p>Separate by plastic type & colour</p>
          </div>
          <div class="step">
            <div class="step-icon">✂️</div>
            <h3>Shred</h3>
            <p>Break down into small flakes</p>
          </div>
          <div class="step">
            <div class="step-icon">🔨</div>
            <h3>Make</h3>
            <p>Transform into new products</p>
          </div>
          <div class="step">
            <div class="step-icon">🎁</div>
            <h3>Give back</h3>
            <p>Return to the community</p>
          </div>
        </div>
        <div class="process-links">
          <router-link to="/events-workshops">Learn in our workshops</router-link>
          <router-link to="/shop">See what we make</router-link>
        </div>
      </div>
    </section>

    <!-- Nearby Drop-off Map -->
    <section class="nearby-dropoff">
      <div class="container">
        <h2>Nearby drop-off map</h2>
        <div class="map-container">
          <div class="map-placeholder">
            <h3>Darwin & Palmerston Drop-off Points</h3>
            <div class="location-cards">
              <div class="location-card">
                <h4>Palmerston Community Centre</h4>
                <p>📍 Temple Terrace, Palmerston</p>
                <p>🕒 Mon-Fri 8am-6pm, Sat 9am-4pm</p>
                <p>🚗 Free parking available</p>
              </div>
              <div class="location-card">
                <h4>Darwin Waterfront</h4>
                <p>📍 Kitchener Drive, Darwin</p>
                <p>🕒 Daily 10am-2pm</p>
                <p>🚶 Walk-in access</p>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/plastic-drop-off" class="btn-primary">See all locations</router-link>
      </div>
    </section>

    <!-- Upcoming Workshops -->
    <section class="upcoming-workshops">
      <div class="container">
        <h2>Upcoming workshops</h2>
        <div class="coming-soon-placeholder">
          <div class="placeholder-icon">🗓️</div>
          <h3>Workshops coming soon!</h3>
          <p>We're planning exciting hands-on workshops for 2025. Join our mailing list or follow us on social media to be the first to know when bookings open.</p>
          <router-link to="/events-workshops" class="btn-secondary">Learn more about workshops</router-link>
        </div>
      </div>
    </section>

    <!-- Impact Counters -->
    <section class="impact-counters">
      <div class="container">
        <h2>Our impact</h2>
        <div class="counters">
          <div class="counter">
            <span class="number">2,450</span>
            <span class="label">Kg diverted</span>
          </div>
          <div class="counter">
            <span class="number">156</span>
            <span class="label">Items made</span>
          </div>
          <div class="counter">
            <span class="number">89</span>
            <span class="label">Volunteers</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq">
      <div class="container">
        <h2>Frequently asked questions</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>Where is a plastic drop-off near me in Darwin?</h3>
            <p>Check our map on the <router-link to="/plastic-drop-off">Plastic drop-off page</router-link>—filter by suburb and opening hours. We have locations in Darwin city, Palmerston, and surrounding suburbs.</p>
          </div>
          <div class="faq-item">
            <h3>What plastics can I recycle near me?</h3>
            <p>We accept clean, dry PET (#1), HDPE (#2), and PP (#5) plastics. Remove labels and caps, sort by code. Check our <router-link to="/a-z-plastic-recycling">A–Z guide</router-link> to look up specific items.</p>
          </div>
          <div class="faq-item">
            <h3>Do you collect from businesses or schools?</h3>
            <p>Yes! We offer bulk collection services for businesses and schools. <router-link to="/plastic-drop-off">Request a pick-up</router-link> or contact us to arrange regular collections.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    // Add structured data
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness"],
        "name": "Precious Plastic Darwin",
        "url": "https://preciousplastic.com.au",
        "logo": "https://preciousplastic.com.au/logo.png",
        "description": "Community-driven plastic recycling in Darwin, Northern Territory. We turn local plastic waste into valuable products through workshops and education.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Darwin",
          "addressRegion": "NT",
          "addressCountry": "AU",
          "postalCode": "0800"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -12.4634,
          "longitude": 130.8456
        },
        "telephone": "",
        "email": "hello@preciousplastic.com.au",
        "openingHours": [
          "Mo-Fr 08:00-18:00",
          "Sa 09:00-16:00",
          "Su 10:00-14:00"
        ],
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61580648091526",
          "https://www.instagram.com/preciousplasticdarwin"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://preciousplastic.com.au",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://preciousplastic.com.au/a-z-plastic-recycling?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is a plastic drop-off near me in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Check our map on the Plastic drop-off page—filter by suburb and opening hours. We have locations in Darwin city, Palmerston, and surrounding suburbs."
            }
          },
          {
            "@type": "Question",
            "name": "What plastics can I recycle near me?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We accept clean, dry PET (#1), HDPE (#2), and PP (#5) plastics. Remove labels and caps, sort by code."
            }
          },
          {
            "@type": "Question",
            "name": "Do you collect from businesses or schools?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We offer bulk collection services for businesses and schools. Request a pick-up or contact us to arrange regular collections."
            }
          }
        ]
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
.hero {
  background: linear-gradient(135deg, #1B73E8 0%, #2FBF71 100%);
  color: #FAFAF9;
  padding: 4rem 0;
  text-align: center;
}

.hero h1 {
  font-family: 'Inter', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.95;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.what-we-accept {
  padding: 4rem 0;
  background: #FAFAF9;
}

.plastic-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.plastic-card {
  background: #FAFAF9;
  border: 2px solid #2FBF71;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.plastic-card:hover {
  transform: translateY(-4px);
}

.plastic-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.plastic-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1E1E1E;
}

.plastic-card p {
  color: #1E1E1E;
  margin-bottom: 1rem;
}

.status {
  color: #2FBF71;
  font-weight: 600;
}

.prep-note {
  text-align: center;
  font-weight: 500;
  margin-bottom: 1rem;
}

.link-cta {
  display: block;
  text-align: center;
  color: #1B73E8;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.link-cta:hover {
  color: #1557b0;
}

.how-it-works {
  padding: 4rem 0;
  background: #FAFAF9;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.step {
  text-align: center;
}

.step-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.step h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1E1E1E;
}

.step p {
  color: #1E1E1E;
  opacity: 0.8;
}

.process-links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.process-links a {
  color: #1B73E8;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.process-links a:hover {
  color: #1557b0;
}

.nearby-dropoff {
  padding: 4rem 0;
  background: #FAFAF9;
  text-align: center;
}

.map-container {
  margin-bottom: 2rem;
}

.map-placeholder {
  background: rgba(27, 115, 232, 0.1);
  border-radius: 16px;
  padding: 3rem;
  margin-bottom: 2rem;
}

.map-placeholder h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #1E1E1E;
}

.location-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.location-card {
  background: #FAFAF9;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(30, 30, 30, 0.1);
}

.location-card h4 {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1E1E1E;
}

.location-card p {
  margin-bottom: 0.3rem;
  color: #1E1E1E;
  opacity: 0.8;
  font-size: 0.9rem;
}

.upcoming-workshops {
  padding: 4rem 0;
  background: #FAFAF9;
}

.workshop-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.coming-soon-placeholder {
  background: #FAFAF9;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(30, 30, 30, 0.08);
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.placeholder-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.coming-soon-placeholder h3 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.coming-soon-placeholder p {
  color: #1E1E1E;
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.workshop-card {
  background: #FAFAF9;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(30, 30, 30, 0.08);
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.workshop-date {
  background: #F9C513;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  min-width: 80px;
}

.workshop-date .day {
  display: block;
  font-size: 2rem;
  font-weight: 600;
  color: #1E1E1E;
}

.workshop-date .month {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1E1E1E;
}

.workshop-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1E1E1E;
}

.workshop-content p {
  margin-bottom: 0.5rem;
  color: #1E1E1E;
  opacity: 0.8;
  font-size: 0.9rem;
}

.impact-counters {
  padding: 4rem 0;
  background: #1E1E1E;
  color: #FAFAF9;
  text-align: center;
}

.impact-counters h2 {
  color: #FAFAF9;
  margin-bottom: 3rem;
}

.counters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.counter {
  text-align: center;
}

.counter .number {
  display: block;
  font-size: 3rem;
  font-weight: 600;
  color: #F9C513;
  margin-bottom: 0.5rem;
}

.counter .label {
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.9;
}

.faq {
  padding: 4rem 0;
  background: #FAFAF9;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: #FAFAF9;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(30, 30, 30, 0.08);
}

.faq-item h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.faq-item p {
  color: #1E1E1E;
  opacity: 0.8;
  line-height: 1.6;
}

.faq-item a {
  color: #1B73E8;
  text-decoration: none;
  font-weight: 500;
}

.faq-item a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.2rem;
  }
  
  .hero-ctas {
    flex-direction: column;
    align-items: center;
  }
  
  .workshop-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>