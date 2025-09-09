<template>
  <section id="newsletter" class="newsletter">
    <div class="container">
      <div class="newsletter-content">
        <h2>Stay Updated</h2>
        <p>Get the latest news about our workshops, events, and plastic recycling initiatives delivered to your inbox.</p>
        
        <!-- Mailchimp Signup Form -->
        <div id="mc_embed_signup" class="mailchimp-form">
          <form 
            action="https://gmail.us11.list-manage.com/subscribe/post?u=1beb7f7a0f565cd78490db978b2c3b20-us18&amp;id=351bb6fc62" 
            method="post" 
            id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" 
            class="validate" 
            target="_blank" 
            novalidate
          >
            <div id="mc_embed_signup_scroll" class="form-container">
              <div class="mc-field-group">
                <input 
                  type="email" 
                  value="" 
                  name="EMAIL" 
                  class="required email" 
                  id="mce-EMAIL"
                  placeholder="Enter your email address"
                  required
                >
                <div class="input-group">
                  <input 
                    type="text" 
                    value="" 
                    name="FNAME" 
                    class="" 
                    id="mce-FNAME"
                    placeholder="First Name (Optional)"
                  >
                  <input 
                    type="text" 
                    value="" 
                    name="LNAME" 
                    class="" 
                    id="mce-LNAME"
                    placeholder="Last Name (Optional)"
                  >
                </div>
              </div>
              
              <!-- Real people should not fill this in and expect good things -->
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input type="text" name="b_YOUR_USER_ID_YOUR_LIST_ID" tabindex="-1" value="">
              </div>
              
              <div class="clear">
                <input 
                  type="submit" 
                  value="Subscribe" 
                  name="subscribe" 
                  id="mc-embedded-subscribe" 
                  class="subscribe-button"
                >
              </div>
            </div>
          </form>
        </div>
        
        <!-- Success/Error Messages -->
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
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
  mounted() {
    // Load Mailchimp validation script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
    document.head.appendChild(script)
    
    // Initialize validation when script loads
    script.onload = () => {
      if (window.fnames && window.ftypes) {
        window.fnames = new Array()
        window.ftypes = new Array()
        window.fnames[0] = 'EMAIL'
        window.ftypes[0] = 'email'
        window.fnames[1] = 'FNAME'
        window.ftypes[1] = 'text'
        window.fnames[2] = 'LNAME'
        window.ftypes[2] = 'text'
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

.mailchimp-form {
  margin: 2rem 0;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.mc-field-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

input[type="email"],
input[type="text"] {
  padding: 1rem 1.5rem;
  border: 2px solid #E2E8F0;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  background: white;
  color: #2D3748;
  transition: all 0.3s ease;
}

input[type="email"]:focus,
input[type="text"]:focus {
  outline: none;
  border-color: #fee77b;
  box-shadow: 0 0 0 3px rgba(254, 231, 123, 0.2);
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

.subscribe-button:hover {
  background: #f4c20d;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(254, 231, 123, 0.6);
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

#mce-success-response {
  background: rgba(72, 187, 120, 0.1);
  color: #48bb78;
  border: 1px solid #48bb78;
}

#mce-error-response {
  background: rgba(245, 101, 101, 0.1);
  color: #f56565;
  border: 1px solid #f56565;
}

@media (max-width: 768px) {
  .newsletter h2 {
    font-size: 2rem;
  }
  
  .input-group {
    grid-template-columns: 1fr;
  }
  
  .form-container {
    padding: 0 1rem;
  }
}
</style>