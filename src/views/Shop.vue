<template>
  <div class="shop">
    <div class="container">
      <header class="page-header">
        <h1>Shop recycled plastic products (made in Darwin)</h1>
        <p class="lead">Unique products made from Darwin's recycled HDPE and PP plastics. Each item comes with its origin story and impact details.</p>
      </header>

      <!-- Coming Soon Notice -->
      <section class="coming-soon">
        <div class="notice-card">
          <h2>🚀 Store Launching Soon!</h2>
          <p>We're putting the finishing touches on our first batch of recycled products. Join our waitlist to be the first to know when items are available.</p>
          <button class="btn-primary" @click="showWaitlistForm = true">Join the Waitlist</button>
        </div>
      </section>

      <!-- Product Categories Preview -->
      <section class="categories">
        <h2 class="section-title">Product Categories</h2>
        <div class="category-grid">
          <div class="category-card">
            <div class="category-icon">🕶️</div>
            <h3>Sunglasses</h3>
            <p>Stylish frames made from recycled HDPE bottles collected in Darwin</p>
            <div class="price-range">From $45</div>
            <button class="btn-secondary">Join Waitlist</button>
          </div>
          <div class="category-card">
            <div class="category-icon">🏠</div>
            <h3>Homewares</h3>
            <p>Bowls, planters, and storage solutions from local PP containers</p>
            <div class="price-range">From $25</div>
            <button class="btn-secondary">Join Waitlist</button>
          </div>
          <div class="category-card">
            <div class="category-icon">🎁</div>
            <h3>Corporate Gifts</h3>
            <p>Custom branded items perfect for sustainable corporate gifting</p>
            <div class="price-range">Quote on request</div>
            <button class="btn-secondary">Get Quote</button>
          </div>
          <div class="category-card">
            <div class="category-icon">📐</div>
            <h3>Sheets & Tiles</h3>
            <p>Raw materials for makers, builders, and creative projects</p>
            <div class="price-range">From $15/sheet</div>
            <button class="btn-secondary">Join Waitlist</button>
          </div>
        </div>
      </section>

      <!-- Featured Products Preview -->
      <section class="featured-preview">
        <h2 class="section-title">Coming Soon</h2>
        <div class="product-preview-grid">
          <div class="product-preview">
            <div class="product-image">🕶️</div>
            <h3>Darwin Classic Sunglasses</h3>
            <div class="product-details">
              <p><strong>Made from:</strong> 85% recycled HDPE milk bottles</p>
              <p><strong>Origin:</strong> Collected from Palmerston & Nightcliff</p>
              <p><strong>Impact:</strong> Diverted 12 bottles from landfill</p>
              <p><strong>Batch ID:</strong> DRW-SG-001</p>
            </div>
            <div class="product-price">$45</div>
            <button class="btn-primary">Join Waitlist</button>
          </div>
          <div class="product-preview">
            <div class="product-image">🌱</div>
            <h3>Recycled Planter Set</h3>
            <div class="product-details">
              <p><strong>Made from:</strong> 90% recycled PP yogurt containers</p>
              <p><strong>Origin:</strong> Local Darwin households</p>
              <p><strong>Impact:</strong> Diverted 25 containers from waste</p>
              <p><strong>Batch ID:</strong> DRW-PL-003</p>
            </div>
            <div class="product-price">$35</div>
            <button class="btn-primary">Join Waitlist</button>
          </div>
          <div class="product-preview">
            <div class="product-image">📦</div>
            <h3>Storage Bowl Collection</h3>
            <div class="product-details">
              <p><strong>Made from:</strong> 80% recycled mixed HDPE</p>
              <p><strong>Origin:</strong> Darwin community drop-offs</p>
              <p><strong>Impact:</strong> Diverted 18 containers from waste</p>
              <p><strong>Batch ID:</strong> DRW-BW-007</p>
            </div>
            <div class="product-price">$28</div>
            <button class="btn-primary">Join Waitlist</button>
          </div>
        </div>
      </section>

      <!-- Wholesale Inquiry -->
      <section class="wholesale">
        <h2>Wholesale & Corporate Orders</h2>
        <p>Interested in bulk orders or custom corporate gifts? We offer special pricing for larger quantities and can create custom designs with your branding.</p>
        <div class="wholesale-features">
          <div class="feature">
            <h4>🏢 Corporate Gifts</h4>
            <p>Custom branded items with sustainability story</p>
          </div>
          <div class="feature">
            <h4>🏪 Retail Partners</h4>
            <p>Wholesale pricing for stores and resellers</p>
          </div>
          <div class="feature">
            <h4>🎨 Custom Design</h4>
            <p>Work with us to create unique products</p>
          </div>
        </div>
        <button class="btn-primary" @click="showWholesaleForm = true">Request Wholesale Quote</button>
      </section>

      <!-- Product Care & Warranty -->
      <section class="care-warranty">
        <div class="info-grid">
          <div class="info-card">
            <h3>🛡️ Warranty</h3>
            <p>All products come with a 12-month warranty against manufacturing defects. We stand behind the quality of our recycled products.</p>
          </div>
          <div class="info-card">
            <h3>🧼 Care Instructions</h3>
            <p>Hand wash with mild soap. Avoid harsh chemicals. UV-resistant but store indoors when possible for longest life.</p>
          </div>
          <div class="info-card">
            <h3>📦 Shipping</h3>
            <p>Free shipping within Darwin. $10 flat rate to rest of NT. Australia-wide shipping available on request.</p>
          </div>
          <div class="info-card">
            <h3>↩️ Returns</h3>
            <p>30-day return policy. Items must be unused and in original condition. Return shipping at customer expense.</p>
          </div>
        </div>
      </section>
    </div>

    <!-- Waitlist Modal -->
    <div v-if="showWaitlistForm" class="modal-overlay" @click="showWaitlistForm = false">
      <div class="modal" @click.stop>
        <h3>Join the Shop Waitlist</h3>
        <form @submit.prevent="submitWaitlist">
          <input type="text" v-model="waitlistForm.name" placeholder="Your Name" required>
          <input type="email" v-model="waitlistForm.email" placeholder="Email Address" required>
          <select v-model="waitlistForm.interest" required>
            <option value="">What interests you most?</option>
            <option value="sunglasses">Sunglasses</option>
            <option value="homewares">Homewares</option>
            <option value="corporate">Corporate Gifts</option>
            <option value="sheets">Sheets & Tiles</option>
            <option value="all">Everything</option>
          </select>
          <textarea v-model="waitlistForm.message" placeholder="Any specific requests or questions?" rows="3"></textarea>
          <div class="modal-actions">
            <button type="button" class="btn-secondary" @click="showWaitlistForm = false">Cancel</button>
            <button type="submit" class="btn-primary">Join Waitlist</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Wholesale Modal -->
    <div v-if="showWholesaleForm" class="modal-overlay" @click="showWholesaleForm = false">
      <div class="modal" @click.stop>
        <h3>Wholesale Inquiry</h3>
        <form @submit.prevent="submitWholesale">
          <input type="text" v-model="wholesaleForm.company" placeholder="Company Name" required>
          <input type="text" v-model="wholesaleForm.contact" placeholder="Contact Person" required>
          <input type="email" v-model="wholesaleForm.email" placeholder="Email Address" required>
          <input type="tel" v-model="wholesaleForm.phone" placeholder="Phone Number">
          <select v-model="wholesaleForm.type" required>
            <option value="">Inquiry Type</option>
            <option value="corporate-gifts">Corporate Gifts</option>
            <option value="retail">Retail Partnership</option>
            <option value="custom">Custom Products</option>
            <option value="bulk">Bulk Order</option>
          </select>
          <textarea v-model="wholesaleForm.details" placeholder="Tell us about your requirements (quantities, timeline, budget, etc.)" rows="4" required></textarea>
          <div class="modal-actions">
            <button type="button" class="btn-secondary" @click="showWholesaleForm = false">Cancel</button>
            <button type="submit" class="btn-primary">Send Inquiry</button>
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
      showWaitlistForm: false,
      showWholesaleForm: false,
      waitlistForm: {
        name: '',
        email: '',
        interest: '',
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
    submitWaitlist() {
      // Handle waitlist submission
      console.log('Waitlist submission:', this.waitlistForm)
      alert('Thanks for joining our waitlist! We\'ll notify you when products are available.')
      this.showWaitlistForm = false
      this.resetWaitlistForm()
    },
    submitWholesale() {
      // Handle wholesale inquiry
      console.log('Wholesale inquiry:', this.wholesaleForm)
      alert('Thanks for your wholesale inquiry! We\'ll get back to you within 2 business days.')
      this.showWholesaleForm = false
      this.resetWholesaleForm()
    },
    resetWaitlistForm() {
      this.waitlistForm = {
        name: '',
        email: '',
        interest: '',
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
    // Add Product structured data
    const productData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Recycled Plastic Products",
      "description": "Sustainable products made from recycled HDPE and PP plastics in Darwin, NT",
      "brand": {
        "@type": "Brand",
        "name": "Precious Plastic Darwin"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Precious Plastic Darwin"
      },
      "material": "Recycled HDPE and PP plastic",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Recycled Content",
          "value": "80-90%"
        },
        {
          "@type": "PropertyValue",
          "name": "Origin",
          "value": "Darwin, Northern Territory"
        }
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(productData)
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

.coming-soon {
  margin-bottom: 4rem;
}

.notice-card {
  background: linear-gradient(135deg, #fee77b, #f4c20d);
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  color: #2D3748;
}

.notice-card h2 {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
}

.notice-card p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.categories {
  margin-bottom: 4rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.category-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1rem;
}

.category-card p {
  color: #4A5568;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.price-range {
  font-size: 1.2rem;
  font-weight: 700;
  color: #f4c20d;
  margin-bottom: 1.5rem;
}

.featured-preview {
  margin-bottom: 4rem;
}

.product-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.product-preview {
  background: #F7FAFC;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

.product-image {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.product-preview h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1rem;
}

.product-details {
  text-align: left;
  margin-bottom: 1.5rem;
}

.product-details p {
  margin-bottom: 0.5rem;
  color: #4A5568;
  font-size: 0.9rem;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 900;
  color: #f4c20d;
  margin-bottom: 1rem;
}

.wholesale {
  background: #F7FAFC;
  padding: 3rem;
  border-radius: 12px;
  margin-bottom: 4rem;
  text-align: center;
}

.wholesale h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2D3748;
  margin-bottom: 1rem;
}

.wholesale p {
  font-size: 1.2rem;
  color: #4A5568;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.wholesale-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.feature h4 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 0.5rem;
}

.feature p {
  color: #4A5568;
  font-size: 1rem;
}

.care-warranty {
  margin-bottom: 4rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.info-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.info-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1rem;
}

.info-card p {
  color: #4A5568;
  line-height: 1.6;
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
  
  .notice-card h2 {
    font-size: 2rem;
  }
  
  .modal {
    margin: 1rem;
  }
  
  .modal-actions {
    flex-direction: column;
  }
}
</style>