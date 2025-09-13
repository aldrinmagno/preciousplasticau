<template>
  <div class="community">
    <div class="container">
      <header class="page-header">
        <h1>Volunteer, partnerships & local projects</h1>
        <p class="lead">Join our community, volunteer, or partner with Precious Plastic Darwin.</p>
      </header>

      <!-- Volunteer Section -->
      <section id="volunteer" class="volunteer">
        <h2 class="section-title">Volunteer with Us</h2>
        <p class="section-subtitle">Be part of Darwin's plastic recycling revolution. We have opportunities for all skill levels and time commitments.</p>
        
        <div class="volunteer-roles">
          <div class="role-card">
            <div class="role-icon">🔧</div>
            <h3>Workshop Assistant</h3>
            <p>Help run community workshops and school programs. Training provided.</p>
            <div class="role-details">
              <p><strong>Time:</strong> 4-6 hours/month</p>
              <p><strong>Skills:</strong> Enthusiasm, people skills</p>
              <p><strong>Training:</strong> Safety & machine operation</p>
            </div>
          </div>
          
          <div class="role-card">
            <div class="role-icon">🚚</div>
            <h3>Collection Driver</h3>
            <p>Pick up plastic from collection points around Darwin. Own vehicle required.</p>
            <div class="role-details">
              <p><strong>Time:</strong> 2-3 hours/week</p>
              <p><strong>Skills:</strong> Valid license, reliable vehicle</p>
              <p><strong>Training:</strong> Collection procedures</p>
            </div>
          </div>
          
          <div class="role-card">
            <div class="role-icon">📊</div>
            <h3>Data & Admin</h3>
            <p>Help track our impact, manage databases, and support operations.</p>
            <div class="role-details">
              <p><strong>Time:</strong> 2-4 hours/week</p>
              <p><strong>Skills:</strong> Computer literacy, attention to detail</p>
              <p><strong>Training:</strong> Systems & processes</p>
            </div>
          </div>
          
          <div class="role-card">
            <div class="role-icon">📢</div>
            <h3>Community Outreach</h3>
            <p>Spread the word at events, schools, and community groups.</p>
            <div class="role-details">
              <p><strong>Time:</strong> Flexible</p>
              <p><strong>Skills:</strong> Communication, passion for sustainability</p>
              <p><strong>Training:</strong> Presentation skills</p>
            </div>
          </div>
          
          <div class="role-card">
            <div class="role-icon">🛠️</div>
            <h3>Machine Maintenance</h3>
            <p>Help maintain and repair our recycling equipment. Technical skills preferred.</p>
            <div class="role-details">
              <p><strong>Time:</strong> 3-5 hours/month</p>
              <p><strong>Skills:</strong> Mechanical aptitude, problem-solving</p>
              <p><strong>Training:</strong> Equipment-specific training</p>
            </div>
          </div>
          
          <div class="role-card">
            <div class="role-icon">🎨</div>
            <h3>Product Design</h3>
            <p>Design new products and improve existing ones. Creative minds welcome!</p>
            <div class="role-details">
              <p><strong>Time:</strong> Project-based</p>
              <p><strong>Skills:</strong> Design thinking, creativity</p>
              <p><strong>Training:</strong> Material properties, constraints</p>
            </div>
          </div>
        </div>

        <div class="volunteer-signup">
          <h3>Ready to Get Involved?</h3>
          <form @submit.prevent="submitVolunteerForm" class="volunteer-form">
            <div class="form-row">
              <input type="text" v-model="volunteerForm.name" placeholder="Your Name" required>
              <input type="email" v-model="volunteerForm.email" placeholder="Email Address" required>
            </div>
            <div class="form-row">
              <input type="tel" v-model="volunteerForm.phone" placeholder="Phone Number">
              <select v-model="volunteerForm.availability" required>
                <option value="">Your Availability</option>
                <option value="weekdays">Weekdays</option>
                <option value="weekends">Weekends</option>
                <option value="evenings">Evenings</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            <div class="form-row">
              <select v-model="volunteerForm.interest" required>
                <option value="">Primary Interest</option>
                <option value="workshop">Workshop Assistant</option>
                <option value="collection">Collection Driver</option>
                <option value="admin">Data & Admin</option>
                <option value="outreach">Community Outreach</option>
                <option value="maintenance">Machine Maintenance</option>
                <option value="design">Product Design</option>
                <option value="multiple">Multiple roles</option>
              </select>
              <select v-model="volunteerForm.experience">
                <option value="">Experience Level</option>
                <option value="none">No experience</option>
                <option value="some">Some experience</option>
                <option value="experienced">Very experienced</option>
              </select>
            </div>
            <textarea v-model="volunteerForm.message" placeholder="Tell us about yourself, your skills, and why you want to volunteer" rows="4"></textarea>
            <button type="submit" class="btn-primary">Sign Up to Volunteer</button>
          </form>
        </div>
      </section>

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

      <!-- Local Projects Gallery -->
      <section class="projects">
        <h2 class="section-title">Local Projects & Success Stories</h2>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-image">🏫</div>
            <div class="project-content">
              <h3>Darwin High School Transformation</h3>
              <div class="project-stats">
                <span class="stat">50kg collected</span>
                <span class="stat">200 students involved</span>
                <span class="stat">25 planters created</span>
              </div>
              <p>Students turned their cafeteria waste into beautiful planters for the school garden, learning about chemistry and environmental science in the process.</p>
              <div class="project-impact">
                <strong>Impact:</strong> Reduced school waste by 30%, engaged entire Year 9 cohort
              </div>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">🏢</div>
            <div class="project-content">
              <h3>City of Palmerston Collection Network</h3>
              <div class="project-stats">
                <span class="stat">8 collection points</span>
                <span class="stat">120kg/month</span>
                <span class="stat">500+ households</span>
              </div>
              <p>Partnership with City of Palmerston created a network of collection points, making recycling accessible to thousands of residents.</p>
              <div class="project-impact">
                <strong>Impact:</strong> Diverted 1.4 tonnes annually, 15% increase in recycling participation
              </div>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">🌱</div>
            <div class="project-content">
              <h3>Community Garden Collaboration</h3>
              <div class="project-stats">
                <span class="stat">30 planters</span>
                <span class="stat">5 gardens</span>
                <span class="stat">100 volunteers</span>
              </div>
              <p>Working with local community gardens to create planters from recycled plastic, supporting urban agriculture initiatives.</p>
              <div class="project-impact">
                <strong>Impact:</strong> Enhanced 5 community spaces, engaged diverse volunteer base
              </div>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">🎨</div>
            <div class="project-content">
              <h3>Darwin Festival Art Installation</h3>
              <div class="project-stats">
                <span class="stat">200kg plastic</span>
                <span class="stat">10 artists</span>
                <span class="stat">5000 visitors</span>
              </div>
              <p>Collaborated with local artists to create a stunning installation from recycled plastic, showcasing the beauty of waste transformation.</p>
              <div class="project-impact">
                <strong>Impact:</strong> Raised awareness among 5000+ festival visitors, inspired 3 new collection points
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Made in Darwin Stories -->
      <section class="made-in-darwin">
        <h2 class="section-title">"Made in Darwin" Stories</h2>
        <div class="stories-grid">
          <div class="story-card">
            <div class="story-header">
              <h3>From Milk Bottles to Sunglasses</h3>
              <div class="story-date">November 2024</div>
            </div>
            <p>Follow the journey of 50 HDPE milk bottles collected from Nightcliff households as they're transformed into stylish sunglasses through our community workshop program.</p>
            <div class="story-journey">
              <div class="journey-step">
                <span class="step-icon">🥛</span>
                <span class="step-text">50 milk bottles collected</span>
              </div>
              <div class="journey-step">
                <span class="step-icon">✂️</span>
                <span class="step-text">Cleaned & shredded into flakes</span>
              </div>
              <div class="journey-step">
                <span class="step-icon">🔥</span>
                <span class="step-text">Melted & injection molded</span>
              </div>
              <div class="journey-step">
                <span class="step-icon">🕶️</span>
                <span class="step-text">12 pairs of sunglasses created</span>
              </div>
            </div>
          </div>
          
          <div class="story-card">
            <div class="story-header">
              <h3>Corporate Gift Success</h3>
              <div class="story-date">October 2024</div>
            </div>
            <p>Environment Centre NT commissioned 50 custom keychains made from Darwin's recycled PP containers for their annual conference, showcasing local sustainability in action.</p>
            <div class="story-stats">
              <div class="stat-item">
                <span class="stat-number">25kg</span>
                <span class="stat-label">PP containers recycled</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">50</span>
                <span class="stat-label">Custom keychains created</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">200</span>
                <span class="stat-label">Conference attendees reached</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Partnership Form Modal -->
    <div v-if="showPartnershipForm" class="modal-overlay" @click="showPartnershipForm = null">
      <div class="modal" @click.stop>
        <h3>Partnership Inquiry - {{ partnershipType }}</h3>
        <form @submit.prevent="submitPartnershipForm">
          <input type="text" v-model="partnershipForm.organization" placeholder="Organization Name" required>
          <input type="text" v-model="partnershipForm.contact" placeholder="Contact Person" required>
          <input type="email" v-model="partnershipForm.email" placeholder="Email Address" required>
          <input type="tel" v-model="partnershipForm.phone" placeholder="Phone Number">
          <select v-model="partnershipForm.size" required>
            <option value="">Organization Size</option>
            <option value="small">Small (1-50 people)</option>
            <option value="medium">Medium (51-200 people)</option>
            <option value="large">Large (200+ people)</option>
          </select>
          <textarea v-model="partnershipForm.goals" placeholder="Tell us about your sustainability goals and how you'd like to partner with us" rows="4" required></textarea>
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
    submitVolunteerForm() {
      console.log('Volunteer form:', this.volunteerForm)
      alert('Thanks for signing up to volunteer! We\'ll be in touch within a week to discuss next steps.')
      this.resetVolunteerForm()
    },
    submitPartnershipForm() {
      console.log('Partnership form:', this.partnershipForm)
      alert('Thanks for your partnership inquiry! We\'ll get back to you within 3 business days.')
      this.showPartnershipForm = null
      this.resetPartnershipForm()
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