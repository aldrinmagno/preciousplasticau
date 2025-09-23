<template>
  <div class="az-plastic-recycling">
    <div class="container">
      <header class="page-header">
        <h1>A–Z plastic recycling guide for Darwin</h1>
        <p class="intro">Look up any plastic item in Darwin: see if it's HDPE (#2) or PP (#5), whether it goes in the yellow bin, or bring it to a drop-off. Includes sorting tips and common mistakes.</p>
      </header>

      <!-- Search Bar -->
      <section class="search-section">
        <div class="search-container">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search for a plastic item (e.g., milk bottle, yogurt container)"
            class="search-input"
          >
          <button class="search-btn">🔍</button>
        </div>
      </section>

      <!-- Alphabetical Index -->
      <section class="index-section">
        <div class="alphabet-nav">
          <button 
            v-for="letter in alphabet" 
            :key="letter"
            :class="['letter-btn', { active: activeLetter === letter }]"
            @click="activeLetter = letter"
          >
            {{ letter }}
          </button>
        </div>
      </section>

      <!-- Items Grid -->
      <section class="items-section">
        <div class="items-grid">
          <div 
            v-for="item in filteredItems" 
            :key="item.id"
            class="item-card"
          >
            <div class="item-header">
              <h3>{{ item.name }}</h3>
              <div class="resin-code">{{ item.resinCode }}</div>
            </div>
            <div class="item-details">
              <div class="accept-status" :class="item.accepted ? 'accepted' : 'not-accepted'">
                {{ item.accepted ? '✅ We accept' : '❌ We don\'t accept' }}
              </div>
              <p class="prep-notes">{{ item.prepNotes }}</p>
              <p class="yellow-bin">
                <strong>Yellow bin:</strong> {{ item.yellowBin }}
              </p>
              <div class="item-actions">
                <router-link v-if="item.accepted" to="/plastic-drop-off" class="drop-off-link">
                  📍 Drop-off near me
                </router-link>
                <div v-if="item.relatedItems.length > 0" class="related-items">
                  <strong>Related:</strong> {{ item.relatedItems.join(', ') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- How to Identify Plastic Codes -->
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
            <p class="characteristics">Waxy feel, makes crinkly sound when squeezed</p>
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

      <!-- Yellow Bin Basics -->
      <section class="yellow-bin-section">
        <h2>Yellow bin basics for Darwin</h2>
        <div class="yellow-bin-content">
          <div class="bin-info">
            <h3>What goes in Darwin's yellow bin:</h3>
            <ul>
              <li>Plastic bottles and containers #1-7</li>
              <li>Glass bottles and jars</li>
              <li>Aluminium and steel cans</li>
              <li>Paper and cardboard</li>
            </ul>
            <p class="bin-note">
              <strong>Note:</strong> Small plastic lids and caps often fall through sorting machinery. 
              Bring these to our drop-off points instead!
            </p>
          </div>
          <div class="bin-day-checker">
            <h3>Check your bin day</h3>
            <p>Use Darwin Council's bin day checker to find your collection schedule:</p>
            <a href="https://www.darwin.nt.gov.au/resident-services/waste-recycling/my-bin-day" target="_blank" class="btn-secondary">
              Check bin day →
            </a>
          </div>
        </div>
      </section>

      <!-- Common Mistakes -->
      <section class="mistakes-section">
        <h2>Common plastic recycling mistakes</h2>
        <div class="mistakes-grid">
          <div class="mistake-card">
            <div class="mistake-icon">🚫</div>
            <h3>Wishful recycling</h3>
            <p>Putting non-recyclable items in the yellow bin hoping they'll be recycled. This contaminates entire loads.</p>
          </div>
          <div class="mistake-card">
            <div class="mistake-icon">🧽</div>
            <h3>Not cleaning containers</h3>
            <p>Food residue attracts pests and can contaminate other recyclables. Always rinse before recycling.</p>
          </div>
          <div class="mistake-card">
            <div class="mistake-icon">🏷️</div>
            <h3>Leaving labels on</h3>
            <p>Labels and stickers can jam machinery. Remove all adhesive materials before drop-off.</p>
          </div>
          <div class="mistake-card">
            <div class="mistake-icon">🔀</div>
            <h3>Mixing plastic types</h3>
            <p>Different plastics melt at different temperatures. Sort by resin code for best results.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AZPlasticRecycling',
  data() {
    return {
      searchQuery: '',
      activeLetter: 'A',
      alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      plasticItems: [
        {
          id: 1,
          name: 'Aerosol cans (empty)',
          resinCode: 'Metal',
          accepted: false,
          prepNotes: 'Must be completely empty. Remove plastic caps.',
          yellowBin: 'Yes, if completely empty',
          relatedItems: ['Spray bottles', 'Pump bottles']
        },
        {
          id: 2,
          name: 'Baby food pouches',
          resinCode: 'Mixed',
          accepted: false,
          prepNotes: 'Multi-layer packaging cannot be recycled.',
          yellowBin: 'No - goes in red bin',
          relatedItems: ['Food pouches', 'Squeeze pouches']
        },
        {
          id: 3,
          name: 'Bottle caps (plastic)',
          resinCode: '#2 or #5',
          accepted: true,
          prepNotes: 'Check the code on the cap. Keep small caps in a container.',
          yellowBin: 'Often fall through machinery - bring to us instead',
          relatedItems: ['Bottle lids', 'Jar lids', 'Container lids']
        },
        {
          id: 4,
          name: 'Bottles (drink)',
          resinCode: '#1 PET',
          accepted: true,
          prepNotes: 'Remove caps and labels. Rinse clean.',
          yellowBin: 'Yes, but we can also use them',
          relatedItems: ['Water bottles', 'Soft drink bottles']
        },
        {
          id: 5,
          name: 'Bottles (milk)',
          resinCode: '#2 HDPE',
          accepted: true,
          prepNotes: 'Remove caps and labels. Rinse thoroughly.',
          yellowBin: 'Yes, but we can also use them',
          relatedItems: ['Juice bottles', 'Cream bottles']
        },
        {
          id: 6,
          name: 'Containers (takeaway)',
          resinCode: '#5 PP',
          accepted: true,
          prepNotes: 'Must be clean with no food residue. Remove labels.',
          yellowBin: 'Yes, if clean',
          relatedItems: ['Food containers', 'Lunch boxes']
        },
        {
          id: 7,
          name: 'Detergent bottles',
          resinCode: '#2 HDPE',
          accepted: true,
          prepNotes: 'Rinse thoroughly to remove all product residue.',
          yellowBin: 'Yes',
          relatedItems: ['Cleaning bottles', 'Shampoo bottles']
        },
        {
          id: 8,
          name: 'Egg cartons (plastic)',
          resinCode: '#1 PET',
          accepted: true,
          prepNotes: 'Remove any labels or stickers.',
          yellowBin: 'Yes, but we can also use them',
          relatedItems: ['Food packaging', 'Fruit punnets']
        },
        {
          id: 9,
          name: 'Food wrap',
          resinCode: '#4 LDPE',
          accepted: false,
          prepNotes: 'Soft plastics go to REDcycle collection points.',
          yellowBin: 'No - take to REDcycle',
          relatedItems: ['Cling wrap', 'Plastic bags']
        },
        {
          id: 10,
          name: 'Garden pots',
          resinCode: '#5 PP',
          accepted: true,
          prepNotes: 'Remove soil and plants. Clean thoroughly.',
          yellowBin: 'Check with council - varies by size',
          relatedItems: ['Plant pots', 'Seedling trays']
        },
        {
          id: 11,
          name: 'Honey jars (plastic)',
          resinCode: '#1 PET',
          accepted: true,
          prepNotes: 'Remove all honey residue with hot water.',
          yellowBin: 'Yes, but we can also use them if completely clean',
          relatedItems: ['Jam jars', 'Sauce containers']
        },
        {
          id: 12,
          name: 'Ice cream containers',
          resinCode: '#5 PP',
          accepted: true,
          prepNotes: 'Remove all ice cream residue. Clean thoroughly.',
          yellowBin: 'Yes',
          relatedItems: ['Yogurt containers', 'Margarine containers']
        },
        {
          id: 13,
          name: 'Jar lids (plastic)',
          resinCode: '#2 or #5',
          accepted: true,
          prepNotes: 'Check resin code. Remove any rubber seals.',
          yellowBin: 'Often too small - bring to us',
          relatedItems: ['Bottle caps', 'Container lids']
        },
        {
          id: 14,
          name: 'Ketchup bottles',
          resinCode: '#1 PET',
          accepted: true,
          prepNotes: 'Rinse thoroughly to remove all sauce.',
          yellowBin: 'Yes, but we can also use them',
          relatedItems: ['Sauce bottles', 'Condiment bottles']
        },
        {
          id: 15,
          name: 'Laundry bottles',
          resinCode: '#2 HDPE',
          accepted: true,
          prepNotes: 'Rinse to remove all product. Remove labels.',
          yellowBin: 'Yes',
          relatedItems: ['Detergent bottles', 'Fabric softener bottles']
        },
        {
          id: 16,
          name: 'Margarine containers',
          resinCode: '#5 PP',
          accepted: true,
          prepNotes: 'Wash thoroughly to remove all grease.',
          yellowBin: 'Yes',
          relatedItems: ['Butter containers', 'Spread containers']
        },
        {
          id: 17,
          name: 'Noodle cups',
          resinCode: '#5 PP',
          accepted: true,
          prepNotes: 'Remove all food residue. Peel off labels.',
          yellowBin: 'Yes, if clean',
          relatedItems: ['Instant noodle containers', 'Cup noodles']
        },
        {
          id: 18,
          name: 'Oil bottles',
          resinCode: '#1 PET',
          accepted: true,
          prepNotes: 'Very difficult to clean. Small amounts of oil contaminate batches.',
          yellowBin: 'Only if completely clean - we can use them if spotless',
          relatedItems: ['Cooking oil bottles', 'Olive oil bottles']
        },
        {
          id: 19,
          name: 'Plastic bags',
          resinCode: '#4 LDPE',
          accepted: false,
          prepNotes: 'Take to REDcycle collection points at supermarkets.',
          yellowBin: 'No - take to REDcycle',
          relatedItems: ['Shopping bags', 'Bread bags']
        },
        {
          id: 20,
          name: 'Pump bottles',
          resinCode: '#2 HDPE',
          accepted: true,
          prepNotes: 'Remove pump mechanism. Rinse bottle thoroughly.',
          yellowBin: 'Yes (remove pump first)',
          relatedItems: ['Soap dispensers', 'Lotion bottles']
        },
        {
          id: 21,
          name: 'Yogurt containers',
          resinCode: '#5 PP',
          accepted: true,
          prepNotes: 'Rinse clean. Remove foil lids and labels.',
          yellowBin: 'Yes',
          relatedItems: ['Dairy containers', 'Dessert containers']
        }
      ]
    }
  },
  computed: {
    filteredItems() {
      let items = this.plasticItems

      // Filter by search query
      if (this.searchQuery) {
        items = items.filter(item => 
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.relatedItems.some(related => 
            related.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
        )
      }

      // Filter by active letter
      if (!this.searchQuery && this.activeLetter) {
        items = items.filter(item => 
          item.name.charAt(0).toUpperCase() === this.activeLetter
        )
      }

      return items.sort((a, b) => a.name.localeCompare(b.name))
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
            "name": "What plastic items can I recycle in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In Darwin, you can recycle clean PET (#1), HDPE (#2), and PP (#5) plastics through our drop-off points. This includes water bottles, milk bottles, detergent containers, yogurt containers, and bottle caps."
            }
          },
          {
            "@type": "Question",
            "name": "How do I identify plastic resin codes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Look for the recycling symbol with a number inside, usually on the bottom of containers. PET (#1) is clear and lightweight. HDPE (#2) has a waxy feel and makes a crinkly sound. PP (#5) is flexible and can be bent without breaking."
            }
          },
          {
            "@type": "Question",
            "name": "What goes in Darwin's yellow bin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Darwin's yellow bin accepts plastic bottles and containers #1-7, glass bottles and jars, aluminium and steel cans, and paper and cardboard. Small plastic lids often fall through sorting machinery."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to read plastic resin codes",
        "description": "Learn to identify different plastic types by their recycling codes",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Find the recycling symbol",
            "text": "Look for the triangular recycling symbol, usually on the bottom or side of containers"
          },
          {
            "@type": "HowToStep",
            "name": "Check the number",
            "text": "The number inside the triangle indicates the plastic type (1-7)"
          },
          {
            "@type": "HowToStep",
            "name": "Feel the material",
            "text": "HDPE (#2) feels waxy and crinkles. PP (#5) is flexible and bends without breaking"
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
            "name": "A–Z Plastic Recycling",
            "item": "https://preciousplastic.com.au/a-z-plastic-recycling"
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
.az-plastic-recycling {
  padding: 2rem 0;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
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

.search-section {
  margin-bottom: 2rem;
}

.search-container {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  gap: 0.5rem;
}

.search-input {
  flex: 1;
  padding: 1rem;
  border: 2px solid rgba(30, 30, 30, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #1B73E8;
}

.search-btn {
  padding: 1rem;
  background: #1B73E8;
  color: #FAFAF9;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.2rem;
  min-width: 48px;
}

.index-section {
  margin-bottom: 3rem;
}

.alphabet-nav {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.letter-btn {
  width: 40px;
  height: 40px;
  border: 2px solid rgba(30, 30, 30, 0.2);
  background: #FAFAF9;
  border-radius: 8px;
  font-weight: 600;
  color: #1E1E1E;
  cursor: pointer;
  transition: all 0.3s ease;
}

.letter-btn:hover,
.letter-btn.active {
  border-color: #F9C513;
  background: #F9C513;
  color: #1E1E1E;
}

.items-section {
  margin-bottom: 4rem;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.item-card {
  background: #FAFAF9;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(30, 30, 30, 0.08);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.item-header h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1E1E1E;
  flex: 1;
}

.resin-code {
  background: rgba(27, 115, 232, 0.1);
  color: #1B73E8;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.accept-status {
  font-weight: 600;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-align: center;
}

.accept-status.accepted {
  background: rgba(47, 191, 113, 0.1);
  color: #2FBF71;
}

.accept-status.not-accepted {
  background: rgba(255, 90, 74, 0.1);
  color: #FF5A4A;
}

.prep-notes,
.yellow-bin {
  margin-bottom: 1rem;
  color: #1E1E1E;
  opacity: 0.8;
  font-size: 0.9rem;
  line-height: 1.5;
}

.drop-off-link {
  display: inline-block;
  color: #1B73E8;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.drop-off-link:hover {
  color: #1557b0;
}

.related-items {
  font-size: 0.9rem;
  color: #1E1E1E;
  opacity: 0.7;
}

.identify-section {
  margin-bottom: 4rem;
}

.identify-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  width: 60px;
  height: 60px;
  background: #F9C513;
  color: #1E1E1E;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 auto 1rem;
}

.identify-card h3 {
  font-size: 1.3rem;
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

.yellow-bin-section {
  margin-bottom: 4rem;
}

.yellow-bin-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.bin-info h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.bin-info ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.bin-info li {
  padding: 0.5rem 0;
  color: #1E1E1E;
  opacity: 0.8;
  position: relative;
  padding-left: 1.5rem;
}

.bin-info li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #2FBF71;
  font-weight: 600;
}

.bin-note {
  background: rgba(249, 197, 19, 0.1);
  padding: 1rem;
  border-radius: 8px;
  color: #1E1E1E;
  font-size: 0.9rem;
}

.bin-day-checker {
  background: rgba(27, 115, 232, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
}

.bin-day-checker h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.bin-day-checker p {
  margin-bottom: 1.5rem;
  color: #1E1E1E;
  opacity: 0.8;
}

.mistakes-section {
  margin-bottom: 4rem;
}

.mistakes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.mistake-card {
  background: #FAFAF9;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(30, 30, 30, 0.08);
}

.mistake-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.mistake-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
}

.mistake-card p {
  color: #1E1E1E;
  opacity: 0.8;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .yellow-bin-content {
    grid-template-columns: 1fr;
  }
  
  .alphabet-nav {
    gap: 0.3rem;
  }
  
  .letter-btn {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }
}
</style>