<template>
  <div class="events-workshops">
    <div class="container">
      <header class="page-header">
        <h1>Plastic recycling events & workshops in Darwin</h1>
        <p class="intro">Hands-on recycling events in Darwin—community plastic collection days, shredder demos, school workshops, and maker classes. Learn sorting, avoid common mistakes, and build a local hub.</p>
      </header>

      <!-- Filters -->
      <section class="filters-section">
        <div class="filters">
          <button 
            v-for="filter in filters" 
            :key="filter.id"
            :class="['filter-btn', { active: activeFilter === filter.id }]"
            @click="activeFilter = filter.id"
          >
            {{ filter.name }}
          </button>
        </div>
      </section>

      <!-- Events Calendar -->
      <section class="events-section">
        <h2>Upcoming events</h2>
        <div class="coming-soon-placeholder">
          <div class="placeholder-icon">🗓️</div>
          <h3>Events coming soon!</h3>
          <p>We're planning exciting hands-on workshops for 2025. Join our mailing list or follow us on social media to be the first to know when bookings open.</p>
          <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=61580648091526" target="_blank" class="social-link">
              📘 Follow on Facebook
            </a>
            <a href="mailto:hello@preciousplastic.com.au" class="social-link">
              📧 Email for updates
            </a>
          </div>
        </div>
      </section>

      <!-- For Schools & Organizations -->
      <section class="schools-section">
        <h2>For schools & organisations</h2>
        <div class="schools-content">
          <div class="schools-info">
            <p>Incursions and team sessions available. Learning outcomes, risk assessment, and curriculum links upon request.</p>
            <div class="learning-outcomes">
              <h3>What students learn:</h3>
              <ul>
                <li>Plastic identification and sorting by resin code</li>
                <li>Safe operation basics for recycling equipment</li>
                <li>Common plastic recycling mistakes to avoid</li>
                <li>Circular design principles and sustainability</li>
                <li>Local environmental impact and solutions</li>
              </ul>
            </div>
          </div>
          <div class="host-form-container">
            <h3>Host an event</h3>
            <p>Interested in hosting a workshop at your school or organization? Get in touch to discuss your requirements.</p>
            <a href="mailto:hello@preciousplastic.com.au?subject=Host Event Request" class="btn-primary email-cta">
              📧 Email us to host an event
            </a>
          </div>
        </div>
      </section>

      <!-- What You'll Learn -->
      <section class="learning-section">
        <h2>What you'll learn</h2>
        <div class="learning-grid">
          <div class="learning-card">
            <div class="learning-icon">🔍</div>
            <h3>Sorting by resin code</h3>
            <p>Master the plastic identification system and learn to quickly sort HDPE, PP, and other plastic types.</p>
          </div>
          <div class="learning-card">
            <div class="learning-icon">⚙️</div>
            <h3>Safe operation basics</h3>
            <p>Hands-on experience with shredders and injection moulding machines, following proper safety protocols.</p>
          </div>
          <div class="learning-card">
            <div class="learning-icon">❌</div>
            <h3>Common mistakes to avoid</h3>
            <p>Learn from real examples of contamination, mixing, and preparation errors that can ruin entire batches.</p>
          </div>
          <div class="learning-card">
            <div class="learning-icon">♻️</div>
            <h3>Circular design</h3>
            <p>Understand how to design products for recyclability and create closed-loop systems in your community.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventsWorkshops',
  data() {
    return {
      activeFilter: 'all',
      filters: [
        { id: 'all', name: 'All Events' },
        { id: 'schools', name: 'Schools' },
        { id: 'community', name: 'Community' },
        { id: 'corporate', name: 'Corporate' },
        { id: 'maker', name: 'Maker Sessions' }
      ],
      events: [
        {
          id: 1,
          title: 'Plastic Shredder Demo (Darwin)',
          category: 'Community',
          day: '15',
          month: 'JAN',
          location: 'Darwin Community Centre',
          price: '$25 per person',
          seats: 12,
          description: 'See our industrial shredder in action and learn how plastic bottles become flakes ready for remaking.',
          type: 'community'
        },
        {
          id: 2,
          title: 'How to Sort Plastics 101',
          category: 'Community',
          day: '22',
          month: 'JAN',
          location: 'Palmerston Library',
          price: 'Free',
          seats: 20,
          description: 'Essential skills workshop covering plastic identification, common mistakes, and preparation techniques.',
          type: 'community'
        },
        {
          id: 3,
          title: 'Start a Community Plastic Hub',
          category: 'Community',
          day: '29',
          month: 'JAN',
          location: 'Online workshop',
          price: '$15 per person',
          seats: 50,
          description: 'Learn how to set up plastic collection and processing in your neighbourhood or organisation.',
          type: 'community'
        },
        {
          id: 4,
          title: 'School Holiday Maker Session',
          category: 'Maker Sessions',
          day: '5',
          month: 'FEB',
          location: 'Precious Plastic Darwin Workshop',
          price: '$35 per child',
          seats: 8,
          description: 'Kids aged 8-16 create their own products from recycled plastic using injection moulding.',
          type: 'maker'
        },
        {
          id: 5,
          title: 'Corporate Team Building',
          category: 'Corporate',
          day: '12',
          month: 'FEB',
          location: 'Your venue or ours',
          price: 'Quote on request',
          seats: 25,
          description: 'Combine team building with sustainability education. Perfect for CSR programs.',
          type: 'corporate'
        },
        {
          id: 6,
          title: 'High School Science Incursion',
        }
      ]
    }
  }
  mounted() {
    // Add structured data for events
    const eventData = this.events.map(event => ({
      "@context": "https://schema.org",
      "@type": "Event",
      "name": event.title,
      "description": event.description,
      "startDate": `2025-${event.month === 'JAN' ? '01' : '02'}-${event.day}T10:00:00+09:30`,
      "endDate": `2025-${event.month === 'JAN' ? '01' : '02'}-${event.day}T12:00:00+09:30`,
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": event.location,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Darwin",
          "addressRegion": "NT",
          "addressCountry": "AU"
        }
      },
      "organizer": {
        "@type": "Organization",
        "name": "Precious Plastic Darwin",
        "url": "https://preciousplastic.com.au"
      },
      "offers": {
        "@type": "Offer",
        "price": event.price.includes('$') ? event.price.replace(/[^0-9]/g, '') : "0",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock",
        "url": "https://preciousplastic.com.au/events-workshops"
      }
    }))

    const structuredData = [
      ...eventData,
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
            "name": "Events & Workshops",
            "item": "https://preciousplastic.com.au/events-workshops"
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
.events-workshops {
  padding: 2rem 0;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
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
  max-width: 800px;
  margin: 0 auto;
}

.filters-section {
  margin-bottom: 3rem;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.8rem 1.5rem;
  border: 2px solid rgba(30, 30, 30, 0.2);
  background: #FAFAF9;
  border-radius: 25px;
  font-weight: 500;
  color: #1E1E1E;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  border-color: #1B73E8;
  background: #1B73E8;
  color: #FAFAF9;
}

.events-section {
  margin-bottom: 4rem;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.coming-soon-placeholder {
  background: #FAFAF9;
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(30, 30, 30, 0.08);
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

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #1B73E8;
  color: #FAFAF9;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #1557b0;
  transform: translateY(-2px);
}

.event-card {
  background: #FAFAF9;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(30, 30, 30, 0.08);
  display: flex;
  gap: 1.5rem;
}

.event-date {
  background: #F9C513;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  min-width: 80px;
  height: fit-content;
}

.event-date .day {
  display: block;
  font-size: 2rem;
  font-weight: 600;
  color: #1E1E1E;
}

.event-date .month {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1E1E1E;
}

.event-content {
  flex: 1;
}

.event-category {
  background: rgba(27, 115, 232, 0.1);
  color: #1B73E8;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

.event-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.event-details p {
  margin-bottom: 0.3rem;
  color: #1E1E1E;
  opacity: 0.8;
  font-size: 0.9rem;
}

.event-description {
  margin: 1rem 0;
  color: #1E1E1E;
  opacity: 0.8;
  line-height: 1.5;
}

.schools-section {
  margin-bottom: 4rem;
}

.schools-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.schools-info p {
  font-size: 1.1rem;
  color: #1E1E1E;
  opacity: 0.8;
  margin-bottom: 2rem;
}

.learning-outcomes h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.learning-outcomes ul {
  list-style: none;
  padding: 0;
}

.learning-outcomes li {
  padding: 0.5rem 0;
  color: #1E1E1E;
  opacity: 0.8;
  position: relative;
  padding-left: 1.5rem;
}

.learning-outcomes li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #2FBF71;
  font-weight: 600;
}

.host-form-container {
  background: rgba(249, 197, 19, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
}

.host-form-container h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1E1E1E;
}

.host-form-container p {
  color: #1E1E1E;
  opacity: 0.8;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.email-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.learning-section {
  margin-bottom: 4rem;
}

.learning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.learning-card {
  background: #FAFAF9;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(30, 30, 30, 0.08);
}

.learning-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.learning-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.learning-card p {
  color: #1E1E1E;
  opacity: 0.8;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .event-card {
    flex-direction: column;
    text-align: center;
  }
  
  .schools-content {
    grid-template-columns: 1fr;
  }
}
</style>