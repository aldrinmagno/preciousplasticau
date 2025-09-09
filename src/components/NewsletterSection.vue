<template>
  <section id="newsletter" class="newsletter">
    <div class="container">
      <div class="newsletter-content">
        <h2>Stay Updated</h2>
        <p>Get the latest news about our workshops, events, and plastic recycling initiatives delivered to your inbox.</p>
        
        <!-- Secure Newsletter Form -->
        <form @submit.prevent="handleSubmit" class="newsletter-form">
          <div class="form-container">
            <div class="form-group">
              <input 
                type="email" 
                v-model="form.email"
                placeholder="Enter your email address"
                required
                :disabled="isSubmitting"
                class="email-input"
              >
              <div class="name-inputs">
                <input 
                  type="text" 
                  v-model="form.firstName"
                  placeholder="First Name (Optional)"
                  :disabled="isSubmitting"
                  class="name-input"
                >
                <input 
                  type="text" 
                  v-model="form.lastName"
                  placeholder="Last Name (Optional)"
                  :disabled="isSubmitting"
                  class="name-input"
                >
              </div>
            </div>
            
            <!-- Honeypot field for bot protection -->
            <input 
              type="text" 
              v-model="form.honeypot"
              style="position: absolute; left: -5000px; opacity: 0;"
              tabindex="-1"
              autocomplete="off"
            >
            
            <button 
              type="submit" 
              :disabled="isSubmitting || !form.email"
              class="subscribe-button"
            >
              {{ isSubmitting ? 'Subscribing...' : 'Subscribe' }}
            </button>
          </div>
        </form>
        
        <!-- Response Messages -->
        <div v-if="message" class="response" :class="messageType">
          {{ message }}
        </div>
        
        <p class="newsletter-note">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewsletterSection',
  data() {
    return {
      form: {
        email: '',
        firstName: '',
        lastName: '',
        honeypot: '' // Bot protection
      },
      isSubmitting: false,
      message: '',
      messageType: ''
    }
  },
  methods: {
    async handleSubmit() {
      // Bot protection - if honeypot is filled, ignore submission
      if (this.form.honeypot) {
        return
      }

      this.isSubmitting = true
      this.message = ''
      this.messageType = ''

      try {
        const response = await fetch('/api/newsletter/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.form.email,
            firstName: this.form.firstName,
            lastName: this.form.lastName
          })
        })

        const result = await response.json()

        if (response.ok) {
          this.message = result.message || 'Successfully subscribed! Please check your email to confirm.'
          this.messageType = 'success'
          this.resetForm()
        } else {
          this.message = result.error || 'Something went wrong. Please try again.'
          this.messageType = 'error'
        }
      } catch (error) {
        console.error('Newsletter subscription error:', error)
        this.message = 'Network error. Please check your connection and try again.'
        this.messageType = 'error'
      } finally {
        this.isSubmitting = false
      }
    },

    resetForm() {
      this.form = {
        email: '',
        firstName: '',
        lastName: '',
        honeypot: ''
      }
    }
  }
}
</script>

<style scoped>
.newsletter {
  background: linear-gradient(135deg, #2D3748 0%, #4A5568 100%);
  color: white;
  padding: 6rem 0;
  position: relative;
}

.newsletter::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="newsletter-grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.05"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.05"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23newsletter-grain)"/></svg>');
  pointer-events: none;
}

.newsletter-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.newsletter h2 {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.newsletter p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  font-weight: 500;
}

.newsletter-form {
  margin: 2rem 0;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.name-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.email-input,
.name-input {
  padding: 1rem 1.5rem;
  border: 2px solid #E2E8F0;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  background: white;
  color: #2D3748;
  transition: all 0.3s ease;
}

.email-input:focus,
.name-input:focus {
  outline: none;
  border-color: #fee77b;
  box-shadow: 0 0 0 3px rgba(254, 231, 123, 0.2);
}

.email-input:disabled,
.name-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.subscribe-button {
  background: #fee77b;
  color: #2D3748;
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 900;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(254, 231, 123, 0.4);
}

.subscribe-button:hover:not(:disabled) {
  background: #f4c20d;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(254, 231, 123, 0.6);
}

.subscribe-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.newsletter-note {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 1rem;
  font-style: italic;
}

.response {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 500;
}

.response.success {
  background: rgba(72, 187, 120, 0.1);
  color: #48bb78;
  border: 1px solid #48bb78;
}

.response.error {
  background: rgba(245, 101, 101, 0.1);
  color: #f56565;
  border: 1px solid #f56565;
}

@media (max-width: 768px) {
  .newsletter h2 {
    font-size: 2rem;
  }
  
  .name-inputs {
    grid-template-columns: 1fr;
  }
  
  .form-container {
    padding: 0 1rem;
  }
}
</style>