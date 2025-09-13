<template>
  <div class="community">
    <div class="container">
      <header class="page-header">
        <h1>Partnerships & local projects</h1>
        <p class="lead">Join our community, volunteer, or partner with Precious Plastic Darwin.</p>
      </header>

      <!-- Partnerships -->
      <section class="partnerships">
        <h2 class="section-title">Partner with Us</h2>
        <div class="partnership-types">
          <div class="partnership-card">
            <div class="partnership-icon">🏫</div>
            <h3>Schools & Education</h3>
            <p>Integrate sustainability education into your curriculum with hands-on recycling programs.</p>
            <div class="partnership-benefits">
              <h4>What we offer:</h4>
              <ul>
                <li>Curriculum-aligned workshops</li>
                <li>Teacher training and resources</li>
                <li>On-site collection points</li>
                <li>Student leadership opportunities</li>
                <li>Regular impact reporting</li>
              </ul>
            </div>
            <div class="partnership-examples">
              <h4>Current partners:</h4>
              <p>Darwin High School, Palmerston College, Nightcliff Primary</p>
            </div>
            <button class="btn-primary" @click="showPartnershipForm = 'school'">Partner with Us</button>
          </div>
          
          <div class="partnership-card">
            <div class="partnership-icon">🏢</div>
            <h3>Businesses & Councils</h3>
            <p>Demonstrate your commitment to sustainability while reducing waste disposal costs.</p>
            <div class="partnership-benefits">
              <h4>What we offer:</h4>
              <ul>
                <li>Workplace collection services</li>
                <li>Employee engagement workshops</li>
                <li>Sustainability reporting</li>
                <li>Custom corporate gifts</li>
                <li>CSR partnership opportunities</li>
              </ul>
            </div>
            <div class="partnership-examples">
              <h4>Current partners:</h4>
              <p>City of Darwin, City of Palmerston, Environment Centre NT</p>
            </div>
            <button class="btn-primary" @click="showPartnershipForm = 'business'">Partner with Us</button>
          </div>
          
          <div class="partnership-card">
            <div class="partnership-icon">🤝</div>
            <h3>Community Groups</h3>
            <p>Amplify your environmental impact through collaborative recycling initiatives.</p>
            <div class="partnership-benefits">
              <h4>What we offer:</h4>
              <ul>
                <li>Joint event opportunities</li>
                <li>Shared resources and expertise</li>
                <li>Cross-promotion support</li>
                <li>Volunteer exchange programs</li>
                <li>Equipment sharing</li>
              </ul>
            </div>
            <div class="partnership-examples">
              <h4>Current partners:</h4>
              <p>Transition Darwin, Darwin Community Arts, Local Makers Groups</p>
            </div>
            <button class="btn-primary" @click="showPartnershipForm = 'community'">Partner with Us</button>
          </div>
        </div>
      </section>

      
    </div>

    <!-- Partnership Form Modal -->
    <div v-if="showPartnershipForm" class="modal-overlay" @click="showPartnershipForm = null">
      <div class="modal" @click.stop>
        <h3>Partnership Inquiry - {{ partnershipType }}</h3>
        <form @submit.prevent="submitPartnershipForm" name="partnership-inquiry" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="partnership-inquiry">
          <input type="hidden" name="partnership-type" :value="partnershipType">
          <input type="text" v-model="partnershipForm.organization" name="organization" placeholder="Organization Name" required>
          <input type="text" v-model="partnershipForm.contact" name="contact" placeholder="Contact Person" required>
          <input type="email" v-model="partnershipForm.email" name="email" placeholder="Email Address" required>
          <input type="tel" v-model="partnershipForm.phone" name="phone" placeholder="Phone Number">
          <select v-model="partnershipForm.size" name="size" required>
            <option value="">Organization Size</option>
            <option value="small">Small (1-50 people)</option>
            <option value="medium">Medium (51-200 people)</option>
            <option value="large">Large (200+ people)</option>
          </select>
          <textarea v-model="partnershipForm.goals" name="goals" placeholder="Tell us about your sustainability goals and how you'd like to partner with us" rows="4" required></textarea>
          <div class="modal-actions">
            <button type="button" class="btn-secondary" @click="showPartnershipForm = null">Cancel</button>
            <button type="submit" class="btn-primary">Send Partnership Inquiry</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Community',
  data() {
    return {
      showPartnershipForm: null,
      volunteerForm: {
        name: '',
        email: '',
        phone: '',
        availability: '',
        interest: '',
        experience: '',
        message: ''
      },
      partnershipForm: {
        organization: '',
        contact: '',
        email: '',
        phone: '',
        size: '',
        goals: ''
      }
    }
  },
  computed: {
    partnershipType() {
      const types = {
        school: 'Schools & Education',
        business: 'Businesses & Councils',
        community: 'Community Groups'
      }
      return types[this.showPartnershipForm] || ''
    }
  },
  methods: {
    async submitVolunteerForm() {
      try {
        const formData = new FormData()
        formData.append('form-name', 'volunteer-form')
        formData.append('name', this.volunteerForm.name)
        formData.append('email', this.volunteerForm.email)
        formData.append('phone', this.volunteerForm.phone)
        formData.append('availability', this.volunteerForm.availability)
        formData.append('interest', this.volunteerForm.interest)
        formData.append('experience', this.volunteerForm.experience)
        formData.append('message', this.volunteerForm.message)
        
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
        
        alert('Thanks for signing up to volunteer! We\'ll be in touch within a week to discuss next steps.')
        this.resetVolunteerForm()
      } catch (error) {
        alert('There was an error submitting your form. Please try again or email us directly at hello@preciousplastic.com.au')
      }
    },
    async submitPartnershipForm() {
      try {
        const formData = new FormData()
        formData.append('form-name', 'partnership-inquiry')
        formData.append('partnership-type', this.partnershipType)
        formData.append('organization', this.partnershipForm.organization)
        formData.append('contact', this.partnershipForm.contact)
        formData.append('email', this.partnershipForm.email)
        formData.append('phone', this.partnershipForm.phone)
        formData.append('size', this.partnershipForm.size)
        formData.append('goals', this.partnershipForm.goals)
        
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
        
        alert('Thanks for your partnership inquiry! We\'ll get back to you within 3 business days.')
        this.showPartnershipForm = null
        this.resetPartnershipForm()
      } catch (error) {
        alert('There was an error submitting your form. Please try again or email us directly at hello@preciousplastic.com.au')
      }
    },
    resetVolunteerForm() {
      this.volunteerForm = {
        name: '',
        email: '',
        phone: '',
        availability: '',
        interest: '',
        experience: '',
        message: ''
      }
    },
    resetPartnershipForm() {
      this.partnershipForm = {
        organization: '',
        contact: '',
        email: '',
        phone: '',
        size: '',
        goals: ''
      }
    }
  },
  mounted() {
    // Add comprehensive structured data
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "VolunteerAction",
        "name": "Volunteer with Precious Plastic Darwin",
        "description": "Join our community recycling efforts as a volunteer. Multiple roles available from workshop assistance to collection driving.",
        "agent": {
          "@type": "Organization",
          "name": "Precious Plastic Darwin"
        },
        "location": {
          "@type": "Place",
          "name": "Darwin, Northern Territory",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Darwin",
            "addressRegion": "NT",
            "addressCountry": "AU"
          }
        },
        "potentialAction": {
          "@type": "JoinAction",
          "name": "Sign up to volunteer",
          "target": "https://preciousplastic.com.au/community#volunteer"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Precious Plastic Darwin Community",
        "description": "Community-driven plastic recycling initiative connecting volunteers, schools, and businesses in Darwin",
        "url": "https://preciousplastic.com.au/community",
        "parentOrganization": {
          "@type": "Organization",
          "name": "Precious Plastic Darwin"
        },
        "memberOf": {
          "@type": "Organization",
          "name": "Global Precious Plastic Movement"
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
            "name": "Community",
            "item": "https://preciousplastic.com.au/community"
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
.community {
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

.volunteer {
  margin-bottom: 4rem;
}

.volunteer-roles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.role-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.role-card:hover {
  transform: translateY(-5px);
}

.role-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.role-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1rem;
}

.role-card p {
  color: #4A5568;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.role-details p {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #4A5568;
}

.volunteer-signup {
  background: #F7FAFC;
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
}

.volunteer-signup h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 2rem;
}

.volunteer-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.volunteer-form input,
.volunteer-form select,
.volunteer-form textarea {
  padding: 1rem;
  border: 2px solid #E2E8F0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.volunteer-form input:focus,
.volunteer-form select:focus,
.volunteer-form textarea:focus {
  outline: none;
  border-color: #fee77b;
}

.volunteer-form textarea {
  grid-column: 1 / -1;
  resize: vertical;
}

.partnerships {
  margin-bottom: 4rem;
}

.partnership-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.partnership-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.partnership-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.partnership-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1rem;
}

.partnership-card p {
  color: #4A5568;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.partnership-benefits h4,
.partnership-examples h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 0.5rem;
}

.partnership-benefits ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.partnership-benefits li {
  padding: 0.2rem 0;
  color: #4A5568;
  font-size: 0.9rem;
}

.partnership-benefits li::before {
  content: '✓ ';
  color: #48BB78;
  font-weight: bold;
}

.partnership-examples p {
  color: #4A5568;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.projects {
  margin-bottom: 4rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  background: #fee77b;
  padding: 2rem;
  text-align: center;
  font-size: 4rem;
}

.project-content {
  padding: 2rem;
}

.project-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1rem;
}

.project-stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.stat {
  background: #E2E8F0;
  color: #4A5568;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.project-content p {
  color: #4A5568;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-impact {
  color: #2D3748;
  font-size: 0.9rem;
}

.made-in-darwin {
  margin-bottom: 4rem;
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.story-card {
  background: #F7FAFC;
  padding: 2rem;
  border-radius: 12px;
}

.story-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.story-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2D3748;
}

.story-date {
  color: #f4c20d;
  font-weight: 600;
  font-size: 0.9rem;
}

.story-card p {
  color: #4A5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.story-journey {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.journey-step {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.step-icon {
  font-size: 1.5rem;
}

.step-text {
  color: #4A5568;
  font-weight: 500;
}

.story-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 900;
  color: #f4c20d;
}

.stat-label {
  font-size: 0.8rem;
  color: #4A5568;
  text-transform: uppercase;
  font-weight: 600;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1.5rem;
  text-align: center;
}

.modal form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modal input,
.modal select,
.modal textarea {
  padding: 1rem;
  border: 2px solid #E2E8F0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.modal input:focus,
.modal select:focus,
.modal textarea:focus {
  outline: none;
  border-color: #fee77b;
}

.modal textarea {
  resize: vertical;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .project-stats {
    justify-content: center;
  }
  
  .story-header {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .story-stats {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .modal-actions {
    flex-direction: column;
  }
}
</style>