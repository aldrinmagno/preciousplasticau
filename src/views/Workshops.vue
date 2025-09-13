<template>
  <div class="workshops">
    <div class="container">
      <header class="page-header">
        <h1>Recycling workshops & events in Darwin</h1>
        <p class="lead">Hands-on recycling workshops for schools, communities, and teams—learn by making.</p>
      </header>

      <!-- Workshop Categories -->
      <section class="workshop-categories">
        <h2 class="section-title">Workshop Types</h2>
        <div class="category-filters">
          <button 
            v-for="category in categories" 
            :key="category.id"
            :class="['filter-btn', { active: activeCategory === category.id }]"
            @click="activeCategory = category.id"
          >
            {{ category.name }}
          </button>
        </div>
      </section>

      <!-- Upcoming Events -->
      <section class="upcoming-events">
        <h2 class="section-title">Upcoming Events</h2>
        <div class="events-grid">
          <div 
            v-for="event in filteredEvents" 
            :key="event.id"
            class="event-card"
          >
            <div class="event-date">
              <div class="month">{{ event.month }}</div>
              <div class="day">{{ event.day }}</div>
            </div>
            <div class="event-content">
              <div class="event-category">{{ event.category }}</div>
              <h3>{{ event.title }}</h3>
              <div class="event-details">
                <p>👥 {{ event.audience }}</p>
                <p>⏱️ {{ event.duration }}</p>
                <p>💰 {{ event.price }}</p>
                <p>📍 {{ event.location }}</p>
              </div>
              <div class="event-description">
                <p>{{ event.description }}</p>
              </div>
              <div class="event-outcomes">
                <h4>What you'll learn:</h4>
                <ul>
                  <li v-for="outcome in event.outcomes" :key="outcome">{{ outcome }}</li>
                </ul>
              </div>
              <div class="event-bring">
                <h4>What to bring:</h4>
                <p>{{ event.whatToBring }}</p>
              </div>
              <div class="event-actions">
                <button v-if="event.bookable" class="btn-primary">Book Now</button>
                <button v-else class="btn-secondary">Request Quote</button>
                <span class="capacity">{{ event.capacity }} spots available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Host a Workshop -->
      <section id="schools" class="host-workshop">
        <h2>Host a Workshop at Your School or Organization</h2>
        <p>We bring our mobile setup to you! Perfect for schools, community groups, and corporate teams.</p>
        
        <div class="host-options">
          <div class="host-option">
            <h3>🏫 School Programs</h3>
            <ul>
              <li>Curriculum-aligned sustainability education</li>
              <li>Hands-on STEM learning</li>
              <li>Age-appropriate activities (Years 3-12)</li>
              <li>Teacher resources included</li>
            </ul>
            <div class="pricing">From $15/student (minimum 20 students)</div>
          </div>
          
          <div class="host-option">
            <h3>🏢 Corporate Workshops</h3>
            <ul>
              <li>Team building with purpose</li>
              <li>Sustainability training</li>
              <li>Custom duration (2-6 hours)</li>
              <li>Certificate of participation</li>
            </ul>
            <div class="pricing">From $75/person (minimum 10 people)</div>
          </div>
          
          <div class="host-option">
            <h3>👥 Community Groups</h3>
            <ul>
              <li>Flexible scheduling</li>
              <li>All skill levels welcome</li>
              <li>Take home your creations</li>
              <li>Group discounts available</li>
            </ul>
            <div class="pricing">From $40/person (minimum 8 people)</div>
          </div>
        </div>

        <form class="host-form" @submit.prevent="submitHostRequest">
          <h3>Request a Workshop</h3>
          <input type="hidden" name="form-name" value="workshop-request">
          <div class="form-row">
            <input type="text" v-model="hostForm.organization" name="organization" placeholder="School/Organization Name" required>
            <input type="text" v-model="hostForm.contact" name="contact" placeholder="Contact Person" required>
          </div>
          <div class="form-row">
            <input type="email" v-model="hostForm.email" name="email" placeholder="Email Address" required>
            <input type="tel" v-model="hostForm.phone" name="phone" placeholder="Phone Number">
          </div>
          <div class="form-row">
            <select v-model="hostForm.type" name="type" required>
              <option value="">Workshop Type</option>
              <option value="school">School Program</option>
              <option value="corporate">Corporate Workshop</option>
              <option value="community">Community Group</option>
            </select>
            <input type="number" v-model="hostForm.participants" name="participants" placeholder="Number of Participants" min="8" required>
          </div>
          <div class="form-row">
            <input type="date" v-model="hostForm.preferredDate" name="preferredDate" placeholder="Preferred Date">
            <select v-model="hostForm.duration" name="duration">
              <option value="">Preferred Duration</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
              <option value="4">Half day (4 hours)</option>
              <option value="6">Full day (6 hours)</option>
            </select>
          </div>
          <textarea v-model="hostForm.details" name="details" placeholder="Tell us about your group, learning objectives, and any special requirements" rows="4"></textarea>
          <button type="submit" class="btn-primary">Request Workshop Quote</button>
        </form>
      </section>

      <!-- Workshop Safety -->
      <section class="safety-info">
        <h2>Safety & Requirements</h2>
        <div class="safety-grid">
          <div class="safety-card">
            <h3>🦺 Safety First</h3>
            <ul>
              <li>All participants must wear closed-toe shoes</li>
              <li>Safety glasses provided for machine work</li>
              <li>Adult supervision required for under 16s</li>
              <li>Maximum temperature exposure: 200°C</li>
            </ul>
          </div>
          <div class="safety-card">
            <h3>📋 What's Included</h3>
            <ul>
              <li>All materials and tools</li>
              <li>Safety equipment</li>
              <li>Expert instruction</li>
              <li>Take-home products</li>
            </ul>
          </div>
          <div class="safety-card">
            <h3>🎯 Age Guidelines</h3>
            <ul>
              <li>Ages 8-12: Sorting and design activities</li>
              <li>Ages 13-16: Basic machine operation</li>
              <li>Ages 17+: Full workshop access</li>
              <li>Adult workshops: Advanced techniques</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Workshops',
  data() {
    return {
      activeCategory: 'all',
      categories: [
        { id: 'all', name: 'All Workshops' },
        { id: 'schools', name: 'Schools' },
        { id: 'community', name: 'Community' },
        { id: 'corporate', name: 'Corporate' },
        { id: 'maker', name: 'Maker Sessions' }
      ],
      events: [
        {
          id: 1,
          title: 'School Holiday Workshop',
          category: 'Community',
          month: 'DEC',
          day: '15',
          audience: 'Ages 8-16',
          duration: '2 hours',
          price: '$25',
          location: 'Palmerston Community Centre',
          capacity: 12,
          bookable: true,
          description: 'Fun hands-on workshop where kids learn about plastic recycling by making their own products.',
          outcomes: [
            'Identify different plastic types',
            'Understand the recycling process',
            'Create a take-home item',
            'Learn about environmental impact'
          ],
          whatToBring: 'Closed-toe shoes, water bottle, and enthusiasm!'
        },
        {
          id: 2,
          title: 'Community Maker Session',
          category: 'Community',
          month: 'DEC',
          day: '20',
          audience: 'Adults',
          duration: '3 hours',
          price: '$40',
          location: 'Precious Plastic Darwin Workshop',
          capacity: 8,
          bookable: true,
          description: 'Deep dive into plastic recycling with hands-on machine operation and product creation.',
          outcomes: [
            'Operate shredder and injection machine',
            'Design and create custom products',
            'Understand material properties',
            'Learn troubleshooting techniques'
          ],
          whatToBring: 'Closed-toe shoes, safety glasses (provided), and any plastic items you\'d like to recycle'
        },
        {
          id: 3,
          title: 'Corporate Team Building',
          category: 'Corporate',
          month: 'JAN',
          day: '10',
          audience: 'Groups 10+',
          duration: 'Half day',
          price: 'Quote',
          location: 'Your venue or ours',
          capacity: 25,
          bookable: false,
          description: 'Combine team building with sustainability education. Perfect for corporate social responsibility programs.',
          outcomes: [
            'Team collaboration skills',
            'Sustainability awareness',
            'Problem-solving challenges',
            'Create team products'
          ],
          whatToBring: 'We bring everything! Just provide the venue and participants.'
        },
        {
          id: 4,
          title: 'Darwin High School Incursion',
          category: 'Schools',
          month: 'JAN',
          day: '25',
          audience: 'Year 9-12',
          duration: '90 minutes',
          price: '$15/student',
          location: 'Darwin High School',
          capacity: 30,
          bookable: false,
          description: 'Curriculum-aligned workshop covering chemistry, environmental science, and design thinking.',
          outcomes: [
            'Chemical properties of plastics',
            'Environmental impact assessment',
            'Design thinking process',
            'Career pathways in sustainability'
          ],
          whatToBring: 'School will provide all requirements'
        },
        {
          id: 5,
          title: 'Advanced Maker Workshop',
          category: 'Maker',
          month: 'FEB',
          day: '5',
          audience: 'Experienced makers',
          duration: '4 hours',
          price: '$65',
          location: 'Precious Plastic Darwin Workshop',
          capacity: 6,
          bookable: true,
          description: 'Advanced techniques including compression molding and multi-color injection.',
          outcomes: [
            'Master compression molding',
            'Multi-color injection techniques',
            'Quality control methods',
            'Troubleshoot common issues'
          ],
          whatToBring: 'Previous workshop experience required. Bring your own design ideas!'
        }
      ],
      hostForm: {
        organization: '',
        contact: '',
        email: '',
        phone: '',
        type: '',
        participants: '',
        preferredDate: '',
        duration: '',
        details: ''
      }
    }
  },
  computed: {
    filteredEvents() {
      if (this.activeCategory === 'all') {
        return this.events
      }
      return this.events.filter(event => 
        event.category.toLowerCase() === this.activeCategory.toLowerCase() ||
        (this.activeCategory === 'maker' && event.category === 'Maker')
      )
    }
  },
  methods: {
    async submitHostRequest() {
      try {
        const formData = new FormData()
        formData.append('form-name', 'workshop-request')
        formData.append('organization', this.hostForm.organization)
        formData.append('contact', this.hostForm.contact)
        formData.append('email', this.hostForm.email)
        formData.append('phone', this.hostForm.phone)
        formData.append('type', this.hostForm.type)
        formData.append('participants', this.hostForm.participants)
        formData.append('preferredDate', this.hostForm.preferredDate)
        formData.append('duration', this.hostForm.duration)
        formData.append('details', this.hostForm.details)
        
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
        
        alert('Thanks for your workshop request! We\'ll get back to you within 2 business days with a custom quote.')
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
        preferredDate: '',
        duration: '',
        details: ''
      }
    }
  },
  mounted() {
    // Add comprehensive structured data
    const eventData = this.events.filter(event => event.bookable).map(event => ({
      "@context": "https://schema.org",
      "@type": "Event",
      "name": event.title,
      "description": event.description,
      "startDate": `2024-${event.month === 'DEC' ? '12' : event.month === 'JAN' ? '01' : '02'}-${event.day}T10:00:00+09:30`,
      "endDate": `2024-${event.month === 'DEC' ? '12' : event.month === 'JAN' ? '01' : '02'}-${event.day}T${event.duration === '2 hours' ? '12:00:00' : event.duration === '3 hours' ? '13:00:00' : '16:00:00'}+09:30`,
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
        "price": event.price.replace('$', ''),
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock",
        "url": "https://preciousplastic.com.au/workshops",
        "validFrom": "2024-11-01T00:00:00+09:30"
      },
      "performer": {
        "@type": "Organization",
        "name": "Precious Plastic Darwin"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": event.audience
      },
      "keywords": "recycling workshop darwin, plastic recycling education, sustainability workshop NT, hands-on learning darwin"
    }))

    const structuredData = [
      ...eventData,
      {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Precious Plastic Darwin",
        "description": "Educational workshops and programs for plastic recycling and sustainability",
        "url": "https://preciousplastic.com.au",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Darwin",
          "addressRegion": "NT",
          "addressCountry": "AU"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Educational Programs",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Course",
                "name": "School Recycling Workshops",
                "description": "Curriculum-aligned sustainability education for schools"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Course",
                "name": "Community Maker Sessions",
                "description": "Hands-on plastic recycling workshops for adults"
              }
            }
          ]
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
            "name": "Workshops",
            "item": "https://preciousplastic.com.au/workshops"
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
.workshops {
  padding: 2rem 0;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-header h1 {
  font-size: 3rem;
  font-weight: 900;
  color: #2D3748;
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.3rem;
  color: #4A5568;
  max-width: 700px;
  margin: 0 auto;
}

.workshop-categories {
  margin-bottom: 4rem;
}

.category-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.8rem 1.5rem;
  border: 2px solid #E2E8F0;
  background: white;
  border-radius: 25px;
  font-weight: 600;
  color: #4A5568;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  border-color: #fee77b;
  background: #fee77b;
  color: #2D3748;
}

.upcoming-events {
  margin-bottom: 4rem;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.event-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: translateY(-5px);
}

.event-date {
  background: #fee77b;
  color: #2D3748;
  padding: 1rem;
  text-align: center;
  font-weight: 900;
}

.event-date .month {
  font-size: 0.9rem;
  letter-spacing: 0.1em;
}

.event-date .day {
  font-size: 2rem;
}

.event-content {
  padding: 2rem;
}

.event-category {
  background: #E2E8F0;
  color: #4A5568;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.event-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1rem;
}

.event-details {
  margin-bottom: 1rem;
}

.event-details p {
  margin-bottom: 0.3rem;
  color: #4A5568;
  font-size: 0.9rem;
}

.event-description {
  margin-bottom: 1.5rem;
}

.event-description p {
  color: #4A5568;
  line-height: 1.6;
}

.event-outcomes,
.event-bring {
  margin-bottom: 1.5rem;
}

.event-outcomes h4,
.event-bring h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 0.5rem;
}

.event-outcomes ul {
  list-style: none;
  padding: 0;
}

.event-outcomes li {
  padding: 0.2rem 0;
  color: #4A5568;
  font-size: 0.9rem;
}

.event-outcomes li::before {
  content: '✓ ';
  color: #48BB78;
  font-weight: bold;
}

.event-bring p {
  color: #4A5568;
  font-size: 0.9rem;
}

.event-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
}

.capacity {
  font-size: 0.9rem;
  color: #4A5568;
}

.host-workshop {
  background: #F7FAFC;
  padding: 3rem;
  border-radius: 12px;
  margin-bottom: 4rem;
}

.host-workshop h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2D3748;
  margin-bottom: 1rem;
  text-align: center;
}

.host-workshop > p {
  text-align: center;
  font-size: 1.2rem;
  color: #4A5568;
  margin-bottom: 3rem;
}

.host-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.host-option {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.host-option h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1rem;
}

.host-option ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.host-option li {
  padding: 0.3rem 0;
  color: #4A5568;
}

.host-option li::before {
  content: '• ';
  color: #fee77b;
  font-weight: bold;
}

.pricing {
  font-size: 1.2rem;
  font-weight: 700;
  color: #f4c20d;
  text-align: center;
  padding: 1rem;
  background: #FFF8E1;
  border-radius: 8px;
}

.host-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.host-form h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.host-form input,
.host-form select,
.host-form textarea {
  padding: 1rem;
  border: 2px solid #E2E8F0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.host-form input:focus,
.host-form select:focus,
.host-form textarea:focus {
  outline: none;
  border-color: #fee77b;
}

.host-form textarea {
  grid-column: 1 / -1;
  resize: vertical;
}

.safety-info {
  margin-bottom: 4rem;
}

.safety-info h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
}

.safety-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.safety-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.safety-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1rem;
}

.safety-card ul {
  list-style: none;
  padding: 0;
}

.safety-card li {
  padding: 0.3rem 0;
  color: #4A5568;
}

.safety-card li::before {
  content: '• ';
  color: #fee77b;
  font-weight: bold;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .events-grid {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .event-actions {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
}
</style>