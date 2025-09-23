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
        <div class="events-grid">
          <div 
            v-for="event in filteredEvents" 
            :key="event.id"
            class="event-card"
          >
            <div class="event-date">
              <span class="day">{{ event.day }}</span>
              <span class="month">{{ event.month }}</span>
            </div>
            <div class="event-content">
              <div class="event-category">{{ event.category }}</div>
              <h3>{{ event.title }}</h3>
              <div class="event-details">
                <p>📍 {{ event.location }}</p>
                <p>💰 {{ event.price }}</p>
                <p>👥 {{ event.seats }} seats available</p>
              </div>
              <p class="event-description">{{ event.description }}</p>
              <button class="btn-primary" @click="bookEvent(event)">Book now</button>
            </div>
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
            <form @submit.prevent="submitHostRequest" class="host-form">
              <input type="hidden" name="form-name" value="host-event">
              <div class="form-row">
                <input type="text" v-model="hostForm.organization" name="organization" placeholder="School/Organisation Name" required>
                <input type="text" v-model="hostForm.contact" name="contact" placeholder="Contact Person" required>
              </div>
              <div class="form-row">
                <input type="email" v-model="hostForm.email" name="email" placeholder="Email Address" required>
                <input type="tel" v-model="hostForm.phone" name="phone" placeholder="Phone Number">
              </div>
              <div class="form-row">
                <select v-model="hostForm.type" name="type" required>
                  <option value="">Event Type</option>
                  <option value="school">School Incursion</option>
                  <option value="corporate">Corporate Workshop</option>
                  <option value="community">Community Event</option>
                </select>
                <input type="number" v-model="hostForm.participants" name="participants" placeholder="Number of Participants" min="5" required>
              </div>
              <textarea v-model="hostForm.details" name="details" placeholder="Tell us about your group, learning objectives, and any special requirements" rows="4"></textarea>
              <button type="submit" class="btn-primary">Request quote</button>
            </form>
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
          category: 'Schools',
          day: '19',
          month: 'FEB',
          location: 'Darwin High School',
          price: '$8 per student',
          seats: 30,
          description: 'Curriculum-aligned workshop covering chemistry, environmental science, and design thinking.',
          type: 'schools'
        }
      ],
      hostForm: {
        organization: '',
        contact: '',
        email: '',
        phone: '',
        type: '',
        participants: '',
        details: ''
      }
    }
  },
  computed: {
    filteredEvents() {
      if (this.activeFilter === 'all') {
        return this.events
      }
      return this.events.filter(event => event.type === this.activeFilter)
    }
  },
  methods: {
    bookEvent(event) {
      alert(`Booking system coming soon! Please email hello@preciousplastic.com.au to book "${event.title}"`)
    },
    async submitHostRequest() {
      try {
        const formData = new FormData()
        formData.append('form-name', 'host-event')
        formData.append('organization', this.hostForm.organization)
        formData.append('contact', this.hostForm.contact)
        formData.append('email', this.hostForm.email)
        formData.append('phone', this.hostForm.phone)
        formData.append('type', this.hostForm.type)
        formData.append('participants', this.hostForm.participants)
        formData.append('details', this.hostForm.details)
        
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
        
        alert('Thanks for your event request! We\'ll get back to you within 2 business days with a custom quote.')
        this.resetHostForm()
      } catch (error) {
        alert('There was an error submitting your form. Please try again or email us directly at hello@preciousplastic.com.au')
      }
    },
    resetHostForm() {
      this.hostForm = {
        organization: '',
        contact: '',
        email: '',
        phone: '',
        type: '',
        participants: '',
        details: ''
      }
    }
  },
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
}

.host-form-container h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1E1E1E;
  text-align: center;
}

.host-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.host-form input,
.host-form select,
.host-form textarea {
  padding: 1rem;
  border: 2px solid rgba(30, 30, 30, 0.2);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.host-form input:focus,
.host-form select:focus,
.host-form textarea:focus {
  outline: none;
  border-color: #1B73E8;
}

.host-form textarea {
  resize: vertical;
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
  
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>