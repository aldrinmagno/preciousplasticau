<template>
  <div class="plastic-drop-off">
    <div class="container">
      <header class="page-header">
        <h1>Plastic drop-off locations in Darwin</h1>
        <p class="intro">Donate your clean, sorted HDPE (#2) and PP (#5). Bottle caps and small plastic lids welcome if PP or HDPE.</p>
      </header>

      <!-- Accepted vs Not Accepted -->
      <section class="accepted-section">
        <h2>Accepted vs not accepted</h2>
        <div class="plastic-grid">
          <div class="accepted-card">
            <h3>✅ Accepted</h3>
            <div class="plastic-list">
              <div class="plastic-item">
                <strong>PET #1:</strong> Water bottles, soft drink bottles, food containers
              </div>
              <div class="plastic-item">
                <strong>HDPE #2:</strong> Bottles, lids, containers
              </div>
              <div class="plastic-item">
                <strong>PP #5:</strong> Caps, containers, bottle caps
              </div>
            </div>
          </div>
          <div class="not-accepted-card">
            <h3>❌ Not accepted</h3>
            <div class="plastic-list">
              <div class="plastic-item">Soft plastics/film</div>
              <div class="plastic-item">PVC #3</div>
              <div class="plastic-item">PS #6 (polystyrene)</div>
              <div class="plastic-item">Mixed/contaminated plastics</div>
              <div class="plastic-item">Hazardous containers</div>
            </div>
          </div>
        </div>
        <div class="download-cta">
          <button class="btn-primary" @click="downloadPrepGuide">📄 Download "Prep & Sorting Guide" (PDF)</button>
        </div>
      </section>

      <!-- How to Prepare Plastics -->
      <section class="prep-section">
        <h2>How to prepare plastics</h2>
        <div class="prep-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Rinse</h3>
              <p>Clean out all food residue and liquids</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Remove labels</h3>
              <p>Peel off all stickers and adhesive labels</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Dry</h3>
              <p>Let items air dry completely</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Sort by code</h3>
              <p>Separate HDPE #2 and PP #5 items</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">5</div>
            <div class="step-content">
              <h3>Bag/box</h3>
              <p>Keep small plastic lids in a sealed container</p>
            </div>
          </div>
        </div>
        <p class="prep-note">
          <strong>Note:</strong> Keep small plastic lids in a sealed container.
          <router-link to="/a-z-plastic-recycling">Check our A–Z guide</router-link> for item lookups.
        </p>
      </section>

      <!-- How to identify plastic codes -->
      <section class="identify-section">
        <h2>How to identify plastic codes</h2>
        <div class="identify-grid">
          <div class="identify-card">
            <div class="code-example">#1</div>
            <h3>PET</h3>
            <p>Polyethylene Terephthalate</p>
            <p class="characteristics">Clear, lightweight, often has a seam</p>
          </div>
          <div class="identify-card">
            <div class="code-example">#2</div>
            <h3>HDPE</h3>
            <p>High-Density Polyethylene</p>
            <p class="characteristics">Opaque, waxy feel, makes crinkly sound</p>
          </div>
          <div class="identify-card">
            <div class="code-example">#5</div>
            <h3>PP</h3>
            <p>Polypropylene</p>
            <p class="characteristics">Flexible, can be bent without breaking</p>
          </div>
          <div class="identify-card">
            <div class="code-example">?</div>
            <h3>No code?</h3>
            <p>Look for recycling symbol</p>
            <p class="characteristics">Usually on the bottom or side of containers</p>
          </div>
        </div>
      </section>

      <!-- Map & Hours -->
      <section class="locations-section">
        <h2>Map & hours</h2>
        <div class="locations-grid">
          <div class="location-card">
            <h3>Palmerston Location Coming Soon!</h3>
          </div>
          
          <div class="location-card">
            <h3>Darwin Location Coming Soon!</h3>
          
          </div>
          
          <div class="location-card">
            <h3>Casuarina Location Coming Soon!</h3>
            
          </div>
        </div>
        
        <div class="business-pickup">
          <h3>Business & school collections</h3>
          <p>Large quantities? We offer pickup services for businesses and schools.</p>
          <a href="mailto:hello@preciousplastic.com.au?subject=Business Pickup Request" class="btn-primary email-cta">
            📧 Email us for pickup quote
          </a>
        </div>
      </section>

      <!-- FAQ -->
      <section class="faq-section">
        <h2>Frequently asked questions</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>Do you accept PET #1 plastic bottles?</h3>
            <p>Yes! We now accept clean PET #1 bottles including water bottles, soft drink bottles, and clear food containers. Remove all labels and caps, and rinse thoroughly before drop-off.</p>
          </div>
          
          <div class="faq-item">
            <h3>Do you take bottle caps for recycling in Darwin?</h3>
            <p>Yes! We accept bottle caps if they're made from PP (#5), HDPE (#2), or PET (#1). Check the recycling code on the cap. Keep small caps in a sealed container or bag to prevent them from getting lost.</p>
          </div>
          
          <div class="faq-item">
            <h3>What time can I drop off?</h3>
            <p>Drop-off times vary by location. Palmerston Community Centre has the longest hours (8am-6pm weekdays), while Darwin Waterfront is open daily 10am-2pm. Check our location cards above for specific hours.</p>
          </div>
          
          <div class="faq-item">
            <h3>Do you accept mixed plastics?</h3>
            <p>No, we only accept clean, sorted PET (#1), HDPE (#2), and PP (#5) plastics. Mixed or contaminated plastics can't be processed in our machines. Use our <router-link to="/a-z-plastic-recycling">A–Z guide</router-link> to identify plastic types.</p>
          </div>
          
          <div class="faq-item">
            <h3>Can I drop off during yellow bin week?</h3>
            <p>Yes! Our drop-off points are available regardless of your council bin collection schedule. We accept items that might not go in your yellow bin, like small plastic lids and caps.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlasticDropOff',
  methods: {
    downloadPrepGuide() {
      // Placeholder for PDF download
      alert('Prep & Sorting Guide PDF download will be available soon!')
    }
  },
  mounted() {
    // Add structured data
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you take bottle caps for recycling in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We accept bottle caps if they're made from PP (#5) or HDPE (#2). Check the recycling code on the cap. Keep small caps in a sealed container or bag to prevent them from getting lost."
            }
          },
          {
            "@type": "Question",
            "name": "What time can I drop off?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Drop-off times vary by location. Palmerston Community Centre has the longest hours (8am-6pm weekdays), while Darwin Waterfront is open daily 10am-2pm."
            }
          },
          {
            "@type": "Question",
            "name": "Do you accept mixed plastics?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, we only accept clean, sorted HDPE (#2) and PP (#5) plastics. Mixed or contaminated plastics can't be processed in our machines."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to prepare plastics for recycling",
        "description": "Step-by-step guide to prepare HDPE and PP plastics for drop-off",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Rinse",
            "text": "Clean out all food residue and liquids"
          },
          {
            "@type": "HowToStep",
            "name": "Remove labels",
            "text": "Peel off all stickers and adhesive labels"
          },
          {
            "@type": "HowToStep",
            "name": "Dry",
            "text": "Let items air dry completely"
          },
          {
            "@type": "HowToStep",
            "name": "Sort by code",
            "text": "Separate HDPE #2 and PP #5 items"
          },
          {
            "@type": "HowToStep",
            "name": "Bag/box",
            "text": "Keep small plastic lids in a sealed container"
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
            "name": "Plastic drop-off",
            "item": "https://preciousplastic.com.au/plastic-drop-off"
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
.plastic-drop-off {
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

.accepted-section {
  margin-bottom: 4rem;
}

.plastic-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.accepted-card,
.not-accepted-card {
  border-radius: 16px;
  padding: 2rem;
}

.accepted-card {
  background: rgba(47, 191, 113, 0.1);
  border: 2px solid #2FBF71;
}

.not-accepted-card {
  background: rgba(255, 90, 74, 0.1);
  border: 2px solid #FF5A4A;
}

.accepted-card h3 {
  color: #2FBF71;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.not-accepted-card h3 {
  color: #FF5A4A;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.plastic-item {
  margin-bottom: 0.5rem;
  color: #1E1E1E;
}

.download-cta {
  text-align: center;
}

.prep-section {
  margin-bottom: 4rem;
}

.prep-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.step {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.step-number {
  background: #F9C513;
  color: #1E1E1E;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1E1E1E;
}

.step-content p {
  color: #1E1E1E;
  opacity: 0.8;
  font-size: 0.9rem;
}

.prep-note {
  text-align: center;
  color: #1E1E1E;
  opacity: 0.8;
}

.prep-note a {
  color: #1B73E8;
  text-decoration: none;
  font-weight: 500;
}

.prep-note a:hover {
  text-decoration: underline;
}

.identify-section {
  margin-bottom: 4rem;
}

.identify-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.identify-card {
  background: #FAFAF9;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(30, 30, 30, 0.08);
}

.code-example {
  background: #F9C513;
  color: #1E1E1E;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0 auto 1rem;
}

.identify-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1E1E1E;
}

.identify-card p {
  color: #1E1E1E;
  opacity: 0.8;
  margin-bottom: 0.5rem;
}

.characteristics {
  font-style: italic;
  font-size: 0.9rem;
}

.locations-section {
  margin-bottom: 4rem;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.location-card {
  background: #FAFAF9;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(30, 30, 30, 0.08);
}

.location-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.location-details p {
  margin-bottom: 0.5rem;
  color: #1E1E1E;
  opacity: 0.8;
  font-size: 0.9rem;
}

.business-pickup {
  background: rgba(27, 115, 232, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
}

.business-pickup h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.business-pickup p {
  margin-bottom: 2rem;
  color: #1E1E1E;
  opacity: 0.8;
}

.email-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.faq-section {
  margin-bottom: 4rem;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: #FAFAF9;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(30, 30, 30, 0.08);
}

.faq-item h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.faq-item p {
  color: #1E1E1E;
  opacity: 0.8;
  line-height: 1.6;
}

.faq-item a {
  color: #1B73E8;
  text-decoration: none;
  font-weight: 500;
}

.faq-item a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .plastic-grid {
    grid-template-columns: 1fr;
  }
  
  .prep-steps {
    grid-template-columns: 1fr;
  }
}
</style>