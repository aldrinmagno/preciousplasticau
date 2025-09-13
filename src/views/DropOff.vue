<template>
  <div class="drop-off">
    <div class="container">
      <header class="page-header">
        <h1>Where to donate and drop off plastic in Darwin</h1>
        <p class="lead">We accept clean HDPE (#2) and PP (#5). Rinse, remove labels, and drop them at a location near you.</p>
      </header>

      <!-- Accepted Plastics -->
      <section class="accepted-section">
        <h2>Accepted Plastics</h2>
        <div class="plastic-types">
          <div class="plastic-type accepted">
            <div class="plastic-code">#1 PET</div>
            <div class="plastic-name">Polyethylene Terephthalate</div>
            <div class="plastic-examples">Water bottles, soft drink bottles</div>
            <div class="status">✅ We Accept</div>
          </div>
          <div class="plastic-type accepted">
            <div class="plastic-code">#2 HDPE</div>
            <div class="plastic-name">High-Density Polyethylene</div>
            <div class="plastic-examples">Milk bottles, detergent containers</div>
            <div class="status">✅ We Accept</div>
          </div>
          <div class="plastic-type not-accepted">
            <div class="plastic-code">#3 PVC</div>
            <div class="plastic-name">Polyvinyl Chloride</div>
            <div class="plastic-examples">Pipes, packaging</div>
            <div class="status">❌ We Don't Accept</div>
          </div>
          <div class="plastic-type not-accepted">
            <div class="plastic-code">#4 LDPE</div>
            <div class="plastic-name">Low-Density Polyethylene</div>
            <div class="plastic-examples">Plastic bags, squeeze bottles</div>
            <div class="status">❌ We Don't Accept</div>
          </div>
          <div class="plastic-type accepted">
            <div class="plastic-code">#5 PP</div>
            <div class="plastic-name">Polypropylene</div>
            <div class="plastic-examples">Yogurt containers, bottle caps</div>
            <div class="status">✅ We Accept</div>
          </div>
          <div class="plastic-type not-accepted">
            <div class="plastic-code">#6 PS</div>
            <div class="plastic-name">Polystyrene</div>
            <div class="plastic-examples">Disposable cups, foam packaging</div>
            <div class="status">❌ We Don't Accept</div>
          </div>
          <div class="plastic-type not-accepted">
            <div class="plastic-code">#7 Other</div>
            <div class="plastic-name">Mixed Plastics</div>
            <div class="plastic-examples">Various composite plastics</div>
            <div class="status">❌ We Don't Accept</div>
          </div>
        </div>
      </section>

      <!-- Prep Guide -->
      <section class="prep-guide">
        <h2>Preparation Guide</h2>
        <div class="prep-content">
          <div class="prep-checklist">
            <h3>Before You Drop Off:</h3>
            <ul>
              <li>✅ Rinse containers thoroughly</li>
              <li>✅ Remove all labels and stickers</li>
              <li>✅ Remove caps and lids (separate if different plastic)</li>
              <li>✅ Flatten bottles to save space</li>
              <li>✅ Sort by plastic type (#2 HDPE, #5 PP)</li>
              <li>❌ No food residue or contamination</li>
            </ul>
          </div>
          <div class="prep-download">
            <h3>Printable Resources</h3>
            <a href="#" class="btn-primary download-btn">📄 Download Prep Guide (PDF)</a>
            <a href="#" class="btn-secondary download-btn">🏷️ Download Bin Labels (PDF)</a>
          </div>
        </div>
      </section>

      <!-- Interactive Map -->
      <section id="map" class="map-section">
        <h2>Drop-off Locations</h2>
        <div class="map-container">
          <div class="map-placeholder">
            <p>🗺️ Interactive map coming soon</p>
          </div>
          <div class="locations-list">
            <div class="location-card">
              <h3>Palmerston Community Centre</h3>
              <p>📍 1 Chung Wah Terrace, Palmerston NT 0830</p>
              <p>🕒 Mon-Fri: 9am-5pm, Sat: 10am-4pm</p>
              <p>🚗 Free parking available</p>
            </div>
            <div class="location-card">
              <h3>Nightcliff Shopping Centre</h3>
              <p>📍 Pavonia Way, Nightcliff NT 0810</p>
              <p>🕒 Daily: 8am-6pm</p>
              <p>🚗 Shopping centre parking</p>
            </div>
            <div class="location-card">
              <h3>Berrimah Research Farm</h3>
              <p>📍 Makagon Road, Berrimah NT 0828</p>
              <p>🕒 Weekdays: 8am-4pm</p>
              <p>🚗 Staff parking area</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Bulk Pickup -->
      <section class="bulk-pickup">
        <h2>Business & Bulk Collection</h2>
        <p>Large quantities? We offer pickup services for businesses and organizations.</p>
        <form class="bulk-form">
          <div class="form-row">
            <input type="text" placeholder="Business Name" required>
            <input type="email" placeholder="Email" required>
          </div>
          <div class="form-row">
            <input type="text" placeholder="Address">
            <input type="tel" placeholder="Phone">
          </div>
          <textarea placeholder="Tell us about your plastic waste (types, quantities, frequency)" rows="4"></textarea>
          <button type="submit" class="btn-primary">Request Pickup Quote</button>
        </form>
      </section>

      <!-- FAQ -->
      <section class="faq">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>What happens if my plastic is contaminated?</h3>
            <p>Contaminated plastic cannot be recycled and will need to be disposed of separately. Please ensure all items are clean and dry.</p>
          </div>
          <div class="faq-item">
            <h3>Do you accept soft plastics like bags?</h3>
            <p>No, we currently only accept rigid plastics (#2 HDPE and #5 PP). Soft plastics can be taken to REDcycle collection points.</p>
          </div>
          <div class="faq-item">
            <h3>Can I drop off electronic waste?</h3>
            <p>No, we don't accept e-waste. Contact the City of Darwin for e-waste disposal options.</p>
          </div>
          <div class="faq-item">
            <h3>What about hazardous items like chemicals?</h3>
            <p>Never bring hazardous materials. Even empty chemical containers cannot be accepted due to contamination risks.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropOff',
  mounted() {
    // Add FAQ structured data
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What happens if my plastic is contaminated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contaminated plastic cannot be recycled and will need to be disposed of separately. Please ensure all items are clean and dry."
          }
        },
        {
          "@type": "Question",
          "name": "Do you accept soft plastics like bags?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, we currently only accept rigid plastics (#2 HDPE and #5 PP). Soft plastics can be taken to REDcycle collection points."
          }
        }
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(faqData)
    document.head.appendChild(script)
  }
}
</script>

<style scoped>
.drop-off {
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

.accepted-section {
  margin-bottom: 4rem;
}

.accepted-section h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
}

.plastic-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.plastic-type {
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid;
  transition: transform 0.3s ease;
}

.plastic-type.accepted {
  border-color: #48BB78;
  background: #F0FFF4;
}

.plastic-type.not-accepted {
  border-color: #F56565;
  background: #FFF5F5;
}

.plastic-type:hover {
  transform: translateY(-2px);
}

.plastic-code {
  font-size: 1.5rem;
  font-weight: 900;
  color: #2D3748;
  margin-bottom: 0.5rem;
}

.plastic-name {
  font-weight: 700;
  color: #4A5568;
  margin-bottom: 0.5rem;
}

.plastic-examples {
  color: #718096;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.status {
  font-weight: 700;
  font-size: 1.1rem;
}

.accepted .status {
  color: #38A169;
}

.not-accepted .status {
  color: #E53E3E;
}

.prep-guide {
  background: #F7FAFC;
  padding: 3rem;
  border-radius: 12px;
  margin-bottom: 4rem;
}

.prep-guide h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
}

.prep-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.prep-checklist h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1rem;
}

.prep-checklist ul {
  list-style: none;
  padding: 0;
}

.prep-checklist li {
  padding: 0.5rem 0;
  font-size: 1.1rem;
  color: #4A5568;
}

.prep-download h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1rem;
}

.download-btn {
  display: block;
  margin-bottom: 1rem;
  text-align: center;
}

.map-section {
  margin-bottom: 4rem;
}

.map-section h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
}

.map-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.map-placeholder {
  background: #E2E8F0;
  padding: 4rem;
  border-radius: 12px;
  text-align: center;
  color: #4A5568;
  font-size: 1.2rem;
}

.locations-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.location-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.location-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 0.5rem;
}

.location-card p {
  margin-bottom: 0.3rem;
  color: #4A5568;
}

.bulk-pickup {
  background: #F7FAFC;
  padding: 3rem;
  border-radius: 12px;
  margin-bottom: 4rem;
}

.bulk-pickup h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2D3748;
  margin-bottom: 1rem;
  text-align: center;
}

.bulk-pickup p {
  text-align: center;
  font-size: 1.2rem;
  color: #4A5568;
  margin-bottom: 2rem;
}

.bulk-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.bulk-form input,
.bulk-form textarea {
  padding: 1rem;
  border: 2px solid #E2E8F0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.bulk-form input:focus,
.bulk-form textarea:focus {
  outline: none;
  border-color: #fee77b;
}

.bulk-form textarea {
  width: 100%;
  margin-bottom: 1rem;
  resize: vertical;
}

.faq h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.faq-item h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 1rem;
}

.faq-item p {
  color: #4A5568;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .prep-content,
  .map-container {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>