<template>
  <div class="contact">
    <div class="container">
      <header class="page-header">
        <h1>Contact & hours</h1>
        <p class="lead">Get in touch with Precious Plastic Darwin. Location, hours, and contact information.</p>
      </header>

      <!-- Contact Form -->
      <section class="contact-form-section">
        <div class="contact-grid">
          <div class="form-container">
            <h2>Send us a Message</h2>
            <form @submit.prevent="submitContactForm" class="contact-form" name="contact-form" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact-form">
              <div class="form-row">
                <input type="text" v-model="contactForm.name" name="name" placeholder="Your Name" required>
                <input type="email" v-model="contactForm.email" name="email" placeholder="Email Address" required>
              </div>
              <div class="form-row">
                <input type="tel" v-model="contactForm.phone" name="phone" placeholder="Phone Number (optional)">
                <select v-model="contactForm.topic" name="topic" required>
                  <option value="">Select Topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="workshop">Workshop Booking</option>
                  <option value="partnership">Partnership</option>
                  <option value="collection">Collection Services</option>
                  <option value="media">Media Inquiry</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <textarea v-model="contactForm.message" name="message" placeholder="Your message..." rows="6" required></textarea>
              <button type="submit" class="btn-primary">Send Message</button>
            </form>
          </div>

          <div class="contact-info">
            <h2>Get in Touch</h2>
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
                <p>Darwin, Northern Territory<br>Australia</p>
                <small>Workshop visits by appointment</small>
              </div>
              
              <div class="info-card">
                <div class="info-icon">🌐</div>
                <h3>Website</h3>
                <p><a href="https://preciousplastic.com.au" target="_blank">preciousplastic.com.au</a></p>
                <small>Latest updates and resources</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Hours & Availability -->
      <section class="hours">
        <h2 class="section-title">Hours & Availability</h2>
        <div class="hours-grid">
          <div class="hours-card">
            <h3>🏭 Workshop Hours</h3>
            <div class="schedule">
              <div class="schedule-item">
                <span class="day">Monday - Friday</span>
                <span class="time">9:00 AM - 5:00 PM</span>
              </div>
              <div class="schedule-item">
                <span class="day">Saturday</span>
                <span class="time">10:00 AM - 4:00 PM</span>
              </div>
              <div class="schedule-item">
                <span class="day">Sunday</span>
                <span class="time">Closed</span>
              </div>
            </div>
            <p class="hours-note">Workshop visits by appointment only. Contact us to arrange a tour.</p>
          </div>
          
          <div class="hours-card">
            <h3>📦 Collection Services</h3>
            <div class="schedule">
              <div class="schedule-item">
                <span class="day">Collection Runs</span>
                <span class="time">Tuesday & Friday</span>
              </div>
              <div class="schedule-item">
                <span class="day">Drop-off Points</span>
                <span class="time">24/7 Access</span>
              </div>
              <div class="schedule-item">
                <span class="day">Bulk Pickups</span>
                <span class="time">By Appointment</span>
              </div>
            </div>
            <p class="hours-note">See our <router-link to="/drop-off">drop-off page</router-link> for locations and details.</p>
          </div>
          
          <div class="hours-card">
            <h3>🎓 Educational Programs</h3>
            <div class="schedule">
              <div class="schedule-item">
                <span class="day">School Programs</span>
                <span class="time">Term Time</span>
              </div>
              <div class="schedule-item">
                <span class="day">Community Workshops</span>
                <span class="time">Weekends</span>
              </div>
              <div class="schedule-item">
                <span class="day">Corporate Sessions</span>
                <span class="time">Flexible</span>
              </div>
            </div>
            <p class="hours-note">Book workshops through our <router-link to="/workshops">workshops page</router-link>.</p>
          </div>
        </div>
      </section>

      <!-- Social Media -->
      <section class="social">
        <h2 class="section-title">Follow Our Journey</h2>
        <div class="social-grid">
          <a href="https://www.facebook.com/profile.php?id=61580648091526" target="_blank" class="social-card">
            <div class="social-icon">📘</div>
            <h3>Facebook Page</h3>
            <p>Latest updates, photos from workshops, and community highlights</p>
            <span class="social-cta">Follow Us →</span>
          </a>
          
          <a href="https://www.facebook.com/groups/1801827844055214" target="_blank" class="social-card">
            <div class="social-icon">👥</div>
            <h3>Facebook Group</h3>
            <p>Join our community discussions, ask questions, and share ideas</p>
            <span class="social-cta">Join Group →</span>
          </a>
          
          <div class="social-card coming-soon">
            <div class="social-icon">📸</div>
            <h3>Instagram</h3>
            <p>Behind-the-scenes content and visual stories (coming soon!)</p>
            <span class="social-cta">Coming Soon</span>
          </div>
          
          <div class="social-card coming-soon">
            <div class="social-icon">📧</div>
            <h3>Newsletter</h3>
            <p>Monthly updates, workshop schedules, and impact reports</p>
            <span class="social-cta">Coming Soon</span>
          </div>
        </div>
      </section>

      <!-- Business Information -->
      <section class="business-info">
        <h2 class="section-title">Business Information</h2>
        <div class="business-grid">
          <div class="business-card">
            <h3>📋 Legal Information</h3>
            <div class="business-details">
              <p><strong>Business Name:</strong> Precious Plastic Darwin</p>
              <p><strong>ABN:</strong> 12 345 678 901</p>
              <p><strong>Registration:</strong> Northern Territory</p>
              <p><strong>Type:</strong> Community Interest Organization</p>
            </div>
          </div>
          
          <div class="business-card">
            <h3>🏢 Postal Address</h3>
            <div class="business-details">
              <p>Precious Plastic Darwin<br>
              PO Box 1234<br>
              Darwin NT 0800<br>
              Australia</p>
            </div>
          </div>
          
          <div class="business-card">
            <h3>💼 Services</h3>
            <div class="business-details">
              <p>• Plastic recycling services</p>
              <p>• Educational workshops</p>
              <p>• Community engagement</p>
              <p>• Consultation services</p>
            </div>
          </div>
          
          <div class="business-card">
            <h3>🤝 Partnerships</h3>
            <div class="business-details">
              <p>• Schools and educational institutions</p>
              <p>• Local councils and government</p>
              <p>• Environmental organizations</p>
              <p>• Community groups</p>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="contact-faq">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>How quickly do you respond to inquiries?</h3>
            <p>We aim to respond to all emails within 24 hours during business days. For urgent matters, please call us directly.</p>
          </div>
          
          <div class="faq-item">
            <h3>Can I visit your workshop?</h3>
            <p>Yes! We offer workshop tours by appointment. Contact us to arrange a visit and see our recycling process in action.</p>
          </div>
          
          <div class="faq-item">
            <h3>Do you offer services outside Darwin?</h3>
            <p>We primarily serve the Darwin and Palmerston areas, but we can discuss options for other NT locations depending on the project.</p>
          </div>
          
          <div class="faq-item">
            <h3>How can I get involved as a volunteer?</h3>
            <p>We'd love to have you! Visit our <router-link to="/community#volunteer">volunteer page</router-link> to learn about opportunities and sign up.</p>
          </div>
          
          <div class="faq-item">
            <h3>Do you accept donations?</h3>
            <p>We accept plastic donations at our collection points. For other types of donations or sponsorship opportunities, please contact us directly.</p>
          </div>
          
          <div class="faq-item">
            <h3>Can you help set up a similar program elsewhere?</h3>
            <p>Absolutely! We're part of the global Precious Plastic movement and happy to share our knowledge and experience with other communities.</p>
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
    // Add comprehensive structured data
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Precious Plastic Darwin",
        "description": "Community-driven plastic recycling in Darwin, Northern Territory. Contact us for workshops, partnerships, and plastic drop-off information.",
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
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61580648091526",
          "https://www.facebook.com/groups/1801827844055214"
        ],
        "priceRange": "$",
        "paymentAccepted": "Cash, Card",
        "currenciesAccepted": "AUD"
      },
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Precious Plastic Darwin",
        "description": "Get in touch with Precious Plastic Darwin for workshop bookings, partnerships, volunteer opportunities, and general inquiries",
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
  font-size: 2rem;
  font-weight: 700;
  color: #2D3748;
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
  border: 2px solid #E2E8F0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #fee77b;
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
  background: #F7FAFC;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.info-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.info-card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 0.5rem;
}

.info-card p {
  color: #4A5568;
  margin-bottom: 0.3rem;
}

.info-card a {
  color: #f4c20d;
  text-decoration: none;
}

.info-card small {
  color: #718096;
  font-size: 0.8rem;
}

.hours {
  margin-bottom: 4rem;
}

.hours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.hours-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.hours-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1.5rem;
}

.schedule {
  margin-bottom: 1rem;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #E2E8F0;
}

.schedule-item:last-child {
  border-bottom: none;
}

.day {
  font-weight: 600;
  color: #2D3748;
}

.time {
  color: #4A5568;
}

.hours-note {
  color: #4A5568;
  font-size: 0.9rem;
  line-height: 1.5;
}

.hours-note a {
  color: #f4c20d;
  text-decoration: none;
}

.social {
  background: #F7FAFC;
  padding: 3rem;
  border-radius: 12px;
  margin-bottom: 4rem;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.social-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.social-card:hover:not(.coming-soon) {
  transform: translateY(-5px);
}

.social-card.coming-soon {
  opacity: 0.6;
  cursor: default;
}

.social-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.social-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1rem;
}

.social-card p {
  color: #4A5568;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.social-cta {
  color: #f4c20d;
  font-weight: 600;
}

.business-info {
  margin-bottom: 4rem;
}

.business-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.business-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.business-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1rem;
}

.business-details p {
  color: #4A5568;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.contact-faq {
  margin-bottom: 4rem;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.faq-item h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1rem;
}

.faq-item p {
  color: #4A5568;
  line-height: 1.6;
}

.faq-item a {
  color: #f4c20d;
  text-decoration: none;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .social-grid,
  .business-grid {
    grid-template-columns: 1fr;
  }
}
</style>