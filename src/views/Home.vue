<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>Turn Darwin's plastic into new products</h1>
        <p>Drop off your HDPE/PP, join a workshop, and shop locally-made recycled goods.</p>
        <div class="hero-ctas">
          <router-link to="/drop-off" class="btn-primary">Find a Drop-off</router-link>
          <router-link to="/workshops" class="btn-secondary">Book a Workshop</router-link>
          <router-link to="/shop" class="btn-secondary">Shop Recycled</router-link>
        </div>
      </div>
    </section>

    <!-- What We Accept -->
    <section class="accepted-plastics">
      <div class="container">
        <h2 class="section-title">What We Accept</h2>
        <div class="plastic-grid">
          <div class="plastic-card">
            <div class="plastic-icon">🥛</div>
            <h3>HDPE #2</h3>
            <p>Milk bottles, detergent containers</p>
          </div>
          <div class="plastic-card">
            <div class="plastic-icon">🧴</div>
            <h3>PP #5</h3>
            <p>Yogurt containers, bottle caps</p>
          </div>
          <div class="plastic-card">
            <div class="plastic-icon">📋</div>
            <h3>More Types</h3>
            <p><router-link to="/drop-off">See full list →</router-link></p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <div class="container">
        <h2 class="section-title">How It Works</h2>
        <div class="process-steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Collect</h3>
            <p>Gather clean HDPE & PP plastics</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Sort</h3>
            <p>Separate by plastic type & color</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Shred</h3>
            <p>Break down into small flakes</p>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <h3>Make</h3>
            <p>Transform into new products</p>
          </div>
          <div class="step">
            <div class="step-number">5</div>
            <h3>Give Back</h3>
            <p>Return to the community</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Drop-off Locations -->
    <section class="locations">
      <div class="container">
        <h2 class="section-title">Drop-off Locations</h2>
        <div class="location-preview">
          <div class="map-placeholder">
            <p>🗺️ Interactive map coming soon</p>
            <p>Current locations: Palmerston, Nightcliff, Berrimah</p>
          </div>
          <div class="location-info">
            <h3>Current Hours</h3>
            <p><strong>Weekdays:</strong> 9am - 5pm</p>
            <p><strong>Weekends:</strong> 10am - 4pm</p>
            <router-link to="/drop-off" class="btn-primary">View All Locations</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="featured-products">
      <div class="container">
        <h2 class="section-title">Featured Products</h2>
        <p class="section-subtitle">Made from Darwin's recycled plastic</p>
        <div class="product-grid">
          <div class="product-card">
            <div class="product-image">🕶️</div>
            <h3>Recycled Sunglasses</h3>
            <p>Made from local HDPE bottles</p>
            <router-link to="/shop" class="btn-primary">Join Waitlist</router-link>
          </div>
          <div class="product-card">
            <div class="product-image">🏠</div>
            <h3>Homewares</h3>
            <p>Bowls, planters & storage</p>
            <router-link to="/shop" class="btn-primary">Join Waitlist</router-link>
          </div>
          <div class="product-card">
            <div class="product-image">🎁</div>
            <h3>Custom Gifts</h3>
            <p>Corporate & bulk orders</p>
            <router-link to="/shop" class="btn-primary">Inquire</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Workshops -->
    <section class="workshops">
      <div class="container">
        <h2 class="section-title">Upcoming Workshops</h2>
        <div class="workshop-grid">
          <div class="workshop-card">
            <div class="workshop-date">Dec 15</div>
            <h3>School Holiday Workshop</h3>
            <p>Ages 8-16 • 2 hours • $25</p>
            <router-link to="/workshops" class="btn-primary">Book Now</router-link>
          </div>
          <div class="workshop-card">
            <div class="workshop-date">Dec 20</div>
            <h3>Community Maker Session</h3>
            <p>Adults • 3 hours • $40</p>
            <router-link to="/workshops" class="btn-primary">Book Now</router-link>
          </div>
          <div class="workshop-card">
            <div class="workshop-date">Jan 10</div>
            <h3>Corporate Team Building</h3>
            <p>Groups 10+ • Half day • Quote</p>
            <router-link to="/workshops" class="btn-primary">Inquire</router-link>
          </div>
        </div>
        <div class="workshop-cta">
          <router-link to="/workshops" class="btn-secondary">See All Workshops</router-link>
        </div>
      </div>
    </section>

    <!-- Impact Counters -->
    <section class="impact">
      <div class="container">
        <h2 class="section-title">Our Impact</h2>
        <div class="impact-grid">
          <div class="impact-card">
            <div class="impact-number">2,450</div>
            <div class="impact-label">kg Plastic Diverted</div>
          </div>
          <div class="impact-card">
            <div class="impact-number">1,200</div>
            <div class="impact-label">Items Made</div>
          </div>
          <div class="impact-card">
            <div class="impact-number">85</div>
            <div class="impact-label">Active Volunteers</div>
          </div>
          <div class="impact-card">
            <div class="impact-number">15</div>
            <div class="impact-label">Partner Schools</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="partners">
      <div class="container">
        <h2 class="section-title">Partners & Schools</h2>
        <div class="partner-logos">
          <div class="partner-logo">🏫 Darwin High School</div>
          <div class="partner-logo">🏫 Palmerston College</div>
          <div class="partner-logo">🏢 City of Darwin</div>
          <div class="partner-logo">🏢 City of Palmerston</div>
          <div class="partner-logo">🌱 Environment Centre NT</div>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="newsletter">
      <div class="container">
        <h2 class="section-title">Stay Updated</h2>
        <p class="section-subtitle">Get workshop notifications and impact updates</p>
        <div class="signup-options">
          <router-link to="/community#volunteer" class="btn-primary">Volunteer Sign-up</router-link>
        <button @click="showVolunteerSignup = true" class="btn-primary">Volunteer Sign-up</button>
        </div>
      </div>
    </section>

    <!-- Sticky CTA -->
    <router-link to="/drop-off" class="sticky-cta">
      📍 Find Drop-off
    </router-link>

    <!-- Volunteer Signup Modal -->
    <div v-if="showVolunteerSignup" class="modal-overlay" @click="showVolunteerSignup = false">
      <div class="modal" @click.stop>
        <h3>Volunteer Sign-up</h3>
        <form @submit.prevent="submitVolunteerSignup" name="volunteer-signup" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="volunteer-signup">
          <input type="text" v-model="volunteerForm.name" name="name" placeholder="Your Name" required>
          <input type="email" v-model="volunteerForm.email" name="email" placeholder="Email Address" required>
          <input type="tel" v-model="volunteerForm.phone" name="phone" placeholder="Phone Number">
          <select v-model="volunteerForm.interest" name="interest" required>
            <option value="">What interests you most?</option>
            <option value="workshop">Workshop Assistant</option>
            <option value="collection">Collection Driver</option>
            <option value="admin">Data & Admin</option>
            <option value="outreach">Community Outreach</option>
            <option value="maintenance">Machine Maintenance</option>
            <option value="design">Product Design</option>
          </select>
          <textarea v-model="volunteerForm.message" name="message" placeholder="Tell us about yourself and why you want to volunteer" rows="3"></textarea>
          <div class="modal-actions">
            <button type="button" class="btn-secondary" @click="showVolunteerSignup = false">Cancel</button>
            <button type="submit" class="btn-primary">Sign Up to Volunteer</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      showVolunteerSignup: false,
      volunteerForm: {
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      }
    }
  },
  methods: {
    async submitVolunteerSignup() {
      try {
        const formData = new FormData()
        formData.append('form-name', 'volunteer-signup')
        formData.append('name', this.volunteerForm.name)
        formData.append('email', this.volunteerForm.email)
        formData.append('phone', this.volunteerForm.phone)
        formData.append('interest', this.volunteerForm.interest)
        formData.append('message', this.volunteerForm.message)
        
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
        
        alert('Thanks for signing up to volunteer! We\'ll be in touch soon.')
        this.showVolunteerSignup = false
        this.resetVolunteerForm()
      } catch (error) {
        alert('There was an error submitting your form. Please try again or email us directly at hello@preciousplastic.com.au')
      }
    },
    resetVolunteerForm() {
      this.volunteerForm = {
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      }
    }
  },
  mounted() {
    // Add comprehensive structured data
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Precious Plastic Darwin",
        "alternateName": "PP Darwin",
        "url": "https://preciousplastic.com.au",
        "logo": "https://preciousplastic.com.au/logo.png",
        "description": "Community-driven plastic recycling in Darwin, Northern Territory. We turn local plastic waste into valuable products through workshops and education.",
        "foundingDate": "2023",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Darwin",
          "addressRegion": "NT",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -12.4634,
          "longitude": 130.8456
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "",
          "contactType": "customer service",
          "email": "hello@preciousplastic.com.au",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61580648091526",
          "https://www.facebook.com/groups/1801827844055214"
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": -12.4634,
            "longitude": 130.8456
          },
          "geoRadius": "50000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Plastic Recycling Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Plastic Collection",
                "description": "HDPE and PP plastic collection from drop-off points"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Recycling Workshops",
                "description": "Educational workshops for schools and communities"
              }
            }
          ]
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Precious Plastic Darwin",
        "description": "Community plastic recycling workshop in Darwin, NT",
        "url": "https://preciousplastic.com.au",
        "telephone": "",
        "email": "hello@preciousplastic.com.au",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Darwin",
          "addressRegion": "NT",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -12.4634,
          "longitude": 130.8456
        },
        "openingHours": [
          "Mo-Fr 09:00-17:00",
          "Sa 10:00-16:00"
        ],
        "priceRange": "$",
        "paymentAccepted": "Cash, Card",
        "currenciesAccepted": "AUD"
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.hero p {
  font-size: 1.4rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.accepted-plastics {
  padding: 4rem 0;
  background: #f7fafc;
}

.plastic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.plastic-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.plastic-card:hover {
  transform: translateY(-5px);
}

.plastic-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.plastic-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #2D3748;
}

.how-it-works {
  padding: 4rem 0;
  background: white;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.step {
  text-align: center;
}

.step-number {
  width: 60px;
  height: 60px;
  background: #fee77b;
  color: #2D3748;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 900;
  margin: 0 auto 1rem;
}

.step h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #2D3748;
}

.locations {
  padding: 4rem 0;
  background: #f7fafc;
}

.location-preview {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: center;
}

.map-placeholder {
  background: #e2e8f0;
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  color: #4a5568;
}

.location-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2D3748;
}

.featured-products {
  padding: 4rem 0;
  background: white;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.product-card {
  background: #f7fafc;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.product-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #2D3748;
}

.workshops {
  padding: 4rem 0;
  background: #f7fafc;
}

.workshop-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.workshop-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.workshop-date {
  background: #fee77b;
  color: #2D3748;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 1rem;
}

.workshop-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #2D3748;
}

.workshop-cta {
  text-align: center;
}

.impact {
  padding: 4rem 0;
  background: #2D3748;
  color: white;
}

.impact .section-title {
  color: white;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.impact-card {
  text-align: center;
}

.impact-number {
  font-size: 3rem;
  font-weight: 900;
  color: #fee77b;
  margin-bottom: 0.5rem;
}

.impact-label {
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.partners {
  padding: 4rem 0;
  background: white;
}

.partner-logos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.partner-logo {
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
  font-weight: 600;
  color: #4a5568;
}

.newsletter {
  padding: 4rem 0;
  background: #f7fafc;
  text-align: center;
}

.signup-options {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero-ctas {
    flex-direction: column;
    align-items: center;
  }
  
  .location-preview {
    grid-template-columns: 1fr;
  }
  
  .process-steps {
    grid-template-columns: 1fr;
  }
}
</style>