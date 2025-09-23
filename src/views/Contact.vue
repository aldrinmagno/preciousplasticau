<template>
  <div class="contact">
    <div class="container">
      <header class="page-header">
        <h1>Contact Precious Plastic Darwin</h1>
        <p class="intro">Contact us for plastic drop-off questions, workshop bookings, partnerships, or general inquiries about recycling in Darwin.</p>
      </header>

      <!-- Contact Form -->
      <section class="contact-form-section">
        <div class="contact-grid">
          <div class="form-container">
            <h2>Send us a message</h2>
            <form @submit.prevent="submitContactForm" class="contact-form">
              <input type="hidden" name="form-name" value="contact-form">
              <div class="form-row">
                <input type="text" v-model="contactForm.name" name="name" placeholder="Your Name" required>
                <input type="email" v-model="contactForm.email" name="email" placeholder="Email Address" required>
              </div>
              <div class="form-row">
                <input type="tel" v-model="contactForm.phone" name="phone" placeholder="Phone Number (optional)">
                <select v-model="contactForm.topic" name="topic" required>
                  <option value="">Select Topic</option>
                  <option value="drop-off">Drop-off Questions</option>
                  <option value="workshops">Workshop Bookings</option>
                  <option value="partnerships">Partnerships</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="media">Media Inquiry</option>
                  <option value="general">General Question</option>
                </select>
              </div>
              <textarea v-model="contactForm.message" name="message" placeholder="Your message..." rows="6" required></textarea>
              <button type="submit" class="btn-primary">Send message</button>
            </form>
          </div>

          <div class="contact-info">
            <h2>Get in touch</h2>
            <div class="info-cards">
              <div class="info-card">
                <div class="info-icon">📧</div>
                <h3>Email</h3>
                <p><a href="mailto:hello@preciousplastic.com.au">hello@preciousplastic.com.au</a></p>
                <small>We respond within 24 hours</small>
              </div>
              
              <div class="info-card">
                <div class="info-icon">📍</div>
                <h3>Location</h3>
                <p>Darwin, Northern Territory 0800<br>Australia</p>
                <small>Workshop visits by appointment</small>
              </div>
              
              <div class="info-card">
                <div class="info-icon">🌐</div>
                <h3>Website</h3>
                <p><a href="https://preciousplastic.com.au">preciousplastic.com.au</a></p>
                <small>Latest updates and resources</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Map & Address -->
      <section class="location-section">
        <h2>Find us</h2>
        <div class="location-content">
          <div class="map-placeholder">
            <h3>Darwin & Palmerston Area</h3>
            <p>We operate across Darwin and Palmerston with multiple drop-off points and workshop locations.</p>
            <router-link to="/plastic-drop-off" class="btn-secondary">View all locations</router-link>
          </div>
          <div class="address-info">
            <h3>Workshop address</h3>
            <p>📍 Darwin, Northern Territory 0800</p>
            <p>🕒 <strong>Hours:</strong></p>
            <p>Monday - Friday: 9am - 5pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
            <p class="visit-note">Workshop visits by appointment only. Please contact us to arrange a tour.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        phone: '',
        topic: '',
        message: ''
      }
    }
  },
  methods: {
    async submitContactForm() {
      try {
        const formData = new FormData()
        formData.append('form-name', 'contact-form')
        formData.append('name', this.contactForm.name)
        formData.append('email', this.contactForm.email)
        formData.append('phone', this.contactForm.phone)
        formData.append('topic', this.contactForm.topic)
        formData.append('message', this.contactForm.message)
        
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
        
        alert('Thanks for your message! We\'ll get back to you within 24 hours.')
        this.resetContactForm()
      } catch (error) {
        alert('There was an error submitting your form. Please try again or email us directly at hello@preciousplastic.com.au')
      }
    },
    resetContactForm() {
      this.contactForm = {
        name: '',
        email: '',
        phone: '',
        topic: '',
        message: ''
      }
    }
  },
  mounted() {
    // Add structured data
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Precious Plastic Darwin",
        "description": "Contact us for plastic drop-off questions, workshop bookings, partnerships, or general inquiries about recycling in Darwin",
        "url": "https://preciousplastic.com.au/contact",
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
            "name": "Contact",
            "item": "https://preciousplastic.com.au/contact"
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
.contact {
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

.contact-form-section {
  margin-bottom: 4rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.form-container h2,
.contact-info h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #1E1E1E;
  margin-bottom: 1.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  padding: 1rem;
  border: 2px solid rgba(30, 30, 30, 0.2);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #1B73E8;
}

.contact-form textarea {
  resize: vertical;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  background: rgba(249, 197, 19, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
}

.info-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.info-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1E1E1E;
  margin-bottom: 0.5rem;
}

.info-card p {
  color: #1E1E1E;
  opacity: 0.8;
  margin-bottom: 0.3rem;
}

.info-card a {
  color: #1B73E8;
  text-decoration: none;
  font-weight: 500;
}

.info-card a:hover {
  text-decoration: underline;
}

.info-card small {
  color: #1E1E1E;
  opacity: 0.6;
  font-size: 0.8rem;
}

.location-section {
  margin-bottom: 4rem;
}

.location-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.map-placeholder {
  background: rgba(27, 115, 232, 0.1);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
}

.map-placeholder h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.map-placeholder p {
  color: #1E1E1E;
  opacity: 0.8;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.address-info {
  background: #FAFAF9;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(30, 30, 30, 0.08);
}

.address-info h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.address-info p {
  margin-bottom: 0.5rem;
  color: #1E1E1E;
  opacity: 0.8;
}

.visit-note {
  background: rgba(249, 197, 19, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #1E1E1E;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .contact-grid,
  .location-content {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>