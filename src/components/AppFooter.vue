<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><router-link to="/drop-off">Accepted Plastics</router-link></li>
            <li><router-link to="/drop-off#map">Drop-off Map</router-link></li>
            <li><router-link to="/workshops#schools">Book School Workshop</router-link></li>
            <li><router-link to="/community#volunteer">Volunteer</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Contact Info</h3>
          <p>📍 Darwin, Northern Territory</p>
          <p>📧 <a href="mailto:hello@preciousplastic.com.au">hello@preciousplastic.com.au</a></p>
          <p>🌐 <a href="https://preciousplastic.com.au">preciousplastic.com.au</a></p>
        </div>
        
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=61580648091526" target="_blank">📘 Facebook Page</a>
            <a href="https://www.facebook.com/groups/1801827844055214" target="_blank">👥 Facebook Group</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 Precious Plastic Darwin. Part of the global Precious Plastic movement.</p>
        <div class="footer-links">
          <router-link to="/policies">Terms & Privacy</router-link>
          <router-link to="/policies#returns">Returns</router-link>
          <router-link to="/policies#safety">Safety</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
footer {
  background: #2D3748;
  color: white;
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fee77b;
  text-transform: uppercase;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #CBD5E0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #fee77b;
}

.footer-section p {
  margin-bottom: 0.5rem;
  color: #CBD5E0;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid #4A5568;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  font-size: 0.9rem;
  opacity: 0.8;
}

.footer-links {
  display: flex;
  gap: 1rem;
}

.footer-links a {
  color: #CBD5E0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #fee77b;
}

@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-links {
    justify-content: center;
  }
}
</style>