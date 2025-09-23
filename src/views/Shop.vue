<template>
  <div class="shop">
    <div class="container">
      <header class="page-header">
        <h1>Recycled plastic products, made in Darwin</h1>
        <p class="intro">Locally made recycled plastic products from Darwin—sunglasses, homewares, gifts. Join the waitlist or preorder limited batches made from HDPE/PP.</p>
      </header>

      <!-- Featured Categories -->
      <section class="categories-section">
        <h2>Featured categories</h2>
        <div class="categories-grid">
          <div class="category-card">
            <div class="category-image">🕶️</div>
            <h3>Sunglasses</h3>
            <p>Stylish frames made from recycled HDPE bottles collected in Darwin</p>
            <div class="category-details">
              <span class="material">Made from HDPE #2</span>
              <span class="price">From $89</span>
            </div>
            <button class="btn-primary" @click="joinWaitlist('sunglasses')">Join waitlist</button>
          </div>
          
          <div class="category-card">
            <div class="category-image">🏠</div>
            <h3>Homewares</h3>
            <p>Bowls, planters, and storage solutions from local PP containers</p>
            <div class="category-details">
              <span class="material">Made from PP #5</span>
              <span class="price">From $25</span>
            </div>
            <button class="btn-primary" @click="joinWaitlist('homewares')">Join waitlist</button>
          </div>
          
          <div class="category-card">
            <div class="category-image">🎁</div>
            <h3>Gifts</h3>
            <p>Unique gifts and custom items perfect for sustainable gifting</p>
            <div class="category-details">
              <span class="material">Mixed HDPE/PP</span>
              <span class="price">From $15</span>
            </div>
            <button class="btn-primary" @click="joinWaitlist('gifts')">Join waitlist</button>
          </div>
          
          <div class="category-card">
            <div class="category-image">📐</div>
            <h3>Sheet/Tiles for Makers</h3>
            <p>Raw materials for makers, builders, and creative projects</p>
            <div class="category-details">
              <span class="material">Various plastics</span>
              <span class="price">From $12/sheet</span>
            </div>
            <button class="btn-primary" @click="joinWaitlist('sheets')">Join waitlist</button>
          </div>
        </div>
      </section>

      <!-- About Our Materials -->
      <section class="materials-section">
        <h2>About our materials</h2>
        <div class="materials-content">
          <div class="materials-info">
            <h3>HDPE/PP sourcing and tracing</h3>
            <h3>PET/HDPE/PP sourcing and tracing</h3>
            <p>Every product comes with a batch ID that traces back to the specific plastic donations we received. We can tell you which suburbs your product came from and approximately how many containers were diverted from landfill.</p>
            <div class="tracing-features">
              <div class="feature">
                <strong>📍 Location tracking:</strong> Know which Darwin suburbs contributed to your product
              </div>
              <div class="feature">
                <strong>📊 Impact measurement:</strong> See exactly how many containers were diverted
              </div>
              <div class="feature">
                <strong>🔍 Quality assurance:</strong> Full traceability from collection to finished product
              </div>
              <div class="feature">
                <strong>♻️ Circular story:</strong> Each item comes with its complete recycling journey
              </div>
            </div>
          </div>
          <div class="materials-stats">
            <h3>Current material stocks</h3>
            <div class="stock-items">
              <div class="stock-item">
                <span class="stock-type">PET #1</span>
                <span class="stock-amount">280kg processed</span>
              </div>
              <div class="stock-item">
                <span class="stock-type">HDPE #2</span>
                <span class="stock-amount">450kg processed</span>
              </div>
              <div class="stock-item">
                <span class="stock-type">PP #5</span>
                <span class="stock-amount">320kg processed</span>
              </div>
              <div class="stock-item">
                <span class="stock-type">Mixed colours</span>
                <span class="stock-amount">15 colour batches</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Wholesale & Corporate -->
      <section class="wholesale-section">
        <h2>Wholesale & corporate gifts</h2>
        <div class="wholesale-content">
          <p>Looking for bulk orders or custom corporate gifts? We offer special pricing for larger quantities and can create custom designs with your branding.</p>
          <div class="wholesale-options">
            <div class="wholesale-option">
              <h3>🏢 Corporate gifts</h3>
              <p>Custom branded items with sustainability story cards. Minimum order 25 pieces.</p>
            </div>
            <div class="wholesale-option">
              <h3>🏪 Retail partnerships</h3>
              <p>Wholesale pricing for stores and resellers. Consistent supply and marketing support.</p>
            </div>
            <div class="wholesale-option">
              <h3>🎨 Custom products</h3>
              <p>Work with us to create unique products for your organisation or event.</p>
            </div>
          </div>
          <form @submit.prevent="submitWholesaleInquiry" class="wholesale-form">
            <h3>Wholesale inquiry</h3>
            <input type="hidden" name="form-name" value="wholesale-inquiry">
            <div class="form-row">
              <input type="text" v-model="wholesaleForm.company" name="company" placeholder="Company Name" required>
              <input type="text" v-model="wholesaleForm.contact" name="contact" placeholder="Contact Person" required>
            </div>
            <div class="form-row">
              <input type="email" v-model="wholesaleForm.email" name="email" placeholder="Email Address" required>
              <input type="tel" v-model="wholesaleForm.phone" name="phone" placeholder="Phone Number">
            </div>
            <select v-model="wholesaleForm.type" name="type" required>
              <option value="">Inquiry Type</option>
              <option value="corporate-gifts">Corporate Gifts</option>
              <option value="retail">Retail Partnership</option>
              <option value="custom">Custom Products</option>
              <option value="bulk">Bulk Order</option>
            </select>
            <textarea v-model="wholesaleForm.details" name="details" placeholder="Tell us about your requirements (quantities, timeline, budget, etc.)" rows="4" required></textarea>
            <button type="submit" class="btn-primary">Send inquiry</button>
          </form>
        </div>
      </section>
    </div>

    <!-- Waitlist Modal -->
    <div v-if="showWaitlistModal" class="modal-overlay" @click="showWaitlistModal = false">
      <div class="modal" @click.stop>
        <h3>Join the waitlist</h3>
        <form @submit.prevent="submitWaitlist" name="shop-waitlist" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="shop-waitlist">
          <input type="hidden" name="category" :value="selectedCategory">
          <input type="text" v-model="waitlistForm.name" name="name" placeholder="Your Name" required>
          <input type="email" v-model="waitlistForm.email" name="email" placeholder="Email Address" required>
          <textarea v-model="waitlistForm.message" name="message" placeholder="Any specific requests or questions?" rows="3"></textarea>
          <div class="modal-actions">
            <button type="button" class="btn-tertiary" @click="showWaitlistModal = false">Cancel</button>
            <button type="submit" class="btn-primary">Join waitlist</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  data() {
    return {
      showWaitlistModal: false,
      selectedCategory: '',
      waitlistForm: {
        name: '',
        email: '',
        message: ''
      },
      wholesaleForm: {
        company: '',
        contact: '',
        email: '',
        phone: '',
        type: '',
        details: ''
      }
    }
  },
  methods: {
    joinWaitlist(category) {
      this.selectedCategory = category
      this.showWaitlistModal = true
    },
    async submitWaitlist() {
      try {
        const formData = new FormData()
        formData.append('form-name', 'shop-waitlist')
        formData.append('category', this.selectedCategory)
        formData.append('name', this.waitlistForm.name)
        formData.append('email', this.waitlistForm.email)
        formData.append('message', this.waitlistForm.message)
        
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
        
        alert('Thanks for joining our waitlist! We\'ll notify you when products are available.')
        this.showWaitlistModal = false
        this.resetWaitlistForm()
      } catch (error) {
        alert('There was an error submitting your form. Please try again or email us directly at hello@preciousplastic.com.au')
      }
    },
    async submitWholesaleInquiry() {
      try {
        const formData = new FormData()
        formData.append('form-name', 'wholesale-inquiry')
        formData.append('company', this.wholesaleForm.company)
        formData.append('contact', this.wholesaleForm.contact)
        formData.append('email', this.wholesaleForm.email)
        formData.append('phone', this.wholesaleForm.phone)
        formData.append('type', this.wholesaleForm.type)
        formData.append('details', this.wholesaleForm.details)
        
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
        
        alert('Thanks for your wholesale inquiry! We\'ll get back to you within 2 business days.')
        this.resetWholesaleForm()
      } catch (error) {
        alert('There was an error submitting your form. Please try again or email us directly at hello@preciousplastic.com.au')
      }
    },
    resetWaitlistForm() {
      this.waitlistForm = {
        name: '',
        email: '',
        message: ''
      }
    },
    resetWholesaleForm() {
      this.wholesaleForm = {
        company: '',
        contact: '',
        email: '',
        phone: '',
        type: '',
        details: ''
      }
    }
  },
  mounted() {
    // Add structured data
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Darwin Classic Sunglasses",
        "description": "Stylish sunglasses made from 85% recycled HDPE bottles collected in Darwin",
        "brand": {
          "@type": "Brand",
          "name": "Precious Plastic Darwin"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "Precious Plastic Darwin"
        },
        "material": "85% Recycled HDPE #2",
        "offers": {
          "@type": "Offer",
          "price": "89",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/PreOrder",
          "url": "https://preciousplastic.com.au/shop"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Recycled Content",
            "value": "85%"
          },
          {
            "@type": "PropertyValue",
            "name": "Made In",
            "value": "Darwin, NT, Australia"
          },
          {
            "@type": "PropertyValue",
            "name": "Batch ID",
            "value": "DRW-SG-001"
          }
        ]
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
            "name": "Shop",
            "item": "https://preciousplastic.com.au/shop"
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
.shop {
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
  max-width: 800px;
  margin: 0 auto;
}

.categories-section {
  margin-bottom: 4rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.category-card {
  background: #FAFAF9;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(30, 30, 30, 0.08);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-4px);
}

.category-image {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.category-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.category-card p {
  color: #1E1E1E;
  opacity: 0.8;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.category-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.material {
  background: rgba(27, 115, 232, 0.1);
  color: #1B73E8;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.price {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2FBF71;
}

.products-section {
  margin-bottom: 4rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.product-card {
  background: #FAFAF9;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(30, 30, 30, 0.08);
  display: flex;
  gap: 1.5rem;
}

.product-image {
  font-size: 4rem;
  flex-shrink: 0;
}

.product-content {
  flex: 1;
}

.product-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.product-details {
  margin-bottom: 1rem;
}

.product-details p {
  margin-bottom: 0.3rem;
  color: #1E1E1E;
  opacity: 0.8;
  font-size: 0.9rem;
}

.product-story {
  margin-bottom: 1rem;
}

.product-story p {
  color: #1E1E1E;
  opacity: 0.7;
  font-size: 0.9rem;
  line-height: 1.5;
  font-style: italic;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2FBF71;
  margin-bottom: 0.5rem;
}

.product-status {
  color: #F9C513;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.materials-section {
  margin-bottom: 4rem;
}

.materials-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.materials-info h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.materials-info p {
  color: #1E1E1E;
  opacity: 0.8;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.tracing-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature {
  color: #1E1E1E;
  opacity: 0.8;
  font-size: 0.9rem;
}

.materials-stats {
  background: rgba(249, 197, 19, 0.1);
  border-radius: 16px;
  padding: 2rem;
}

.materials-stats h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.stock-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.stock-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stock-type {
  font-weight: 600;
  color: #1E1E1E;
}

.stock-amount {
  color: #1E1E1E;
  opacity: 0.8;
  font-size: 0.9rem;
}

.wholesale-section {
  margin-bottom: 4rem;
}

.wholesale-content {
  max-width: 800px;
  margin: 0 auto;
}

.wholesale-content p {
  text-align: center;
  font-size: 1.1rem;
  color: #1E1E1E;
  opacity: 0.8;
  margin-bottom: 2rem;
}

.wholesale-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.wholesale-option {
  text-align: center;
}

.wholesale-option h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1E1E1E;
}

.wholesale-option p {
  color: #1E1E1E;
  opacity: 0.8;
  font-size: 0.9rem;
  line-height: 1.5;
}

.wholesale-form {
  background: rgba(27, 115, 232, 0.1);
  border-radius: 16px;
  padding: 2rem;
}

.wholesale-form h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1E1E1E;
  text-align: center;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.wholesale-form input,
.wholesale-form select,
.wholesale-form textarea {
  padding: 1rem;
  border: 2px solid rgba(30, 30, 30, 0.2);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.wholesale-form input:focus,
.wholesale-form select:focus,
.wholesale-form textarea:focus {
  outline: none;
  border-color: #1B73E8;
}

.wholesale-form select,
.wholesale-form textarea {
  grid-column: 1 / -1;
  margin-bottom: 1rem;
}

.wholesale-form textarea {
  resize: vertical;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 30, 30, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
}

.modal {
  background: #FAFAF9;
  padding: 2rem;
  border-radius: 16px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1E1E1E;
  margin-bottom: 1.5rem;
  text-align: center;
}

.modal form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modal input,
.modal textarea {
  padding: 1rem;
  border: 2px solid rgba(30, 30, 30, 0.2);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.modal input:focus,
.modal textarea:focus {
  outline: none;
  border-color: #1B73E8;
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
  
  .product-card {
    flex-direction: column;
    text-align: center;
  }
  
  .materials-content {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .modal-actions {
    flex-direction: column;
  }
}
</style>