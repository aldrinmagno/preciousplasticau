<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Precious Plastic Darwin</h3>
          <div class="contact-info">
            <p>📍 Darwin, Northern Territory 0800</p>
            <p>📧 <a href="mailto:hello@preciousplastic.com.au">hello@preciousplastic.com.au</a></p>
            <p>🌐 <a href="https://preciousplastic.com.au">preciousplastic.com.au</a></p>
            <p><strong>ABN:</strong> 66 970 659 782</p>
          </div>
        </div>
        
        <div class="footer-section">
          <h3>Opening Hours</h3>
          <div class="hours">
            <p><strong>Drop-off Points:</strong></p>
            <p>Monday - Friday: 8am - 6pm</p>
            <p>Saturday: 9am - 4pm</p>
            <p>Sunday: 10am - 2pm</p>
          </div>
        </div>
        
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/plastic-drop-off">Find a drop-off</router-link></li>
            <li><router-link to="/events-workshops">Book a workshop</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=61580648091526" target="_blank" rel="noopener">
              📘 Facebook
            </a>
            <a href="https://www.instagram.com/preciousplasticdarwinau" target="_blank" rel="noopener">
              📸 Instagram
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2025 Precious Plastic Darwin. Part of the global Precious Plastic movement.</p>
        <div class="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
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
  background: #1E1E1E;
  color: #FAFAF9;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #F9C513;
}

.contact-info p,
.hours p {
  margin-bottom: 0.5rem;
  color: #FAFAF9;
  opacity: 0.9;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #FAFAF9;
  text-decoration: none;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.footer-section a:hover {
  opacity: 1;
  color: #F9C513;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid rgba(250, 250, 249, 0.2);
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
  color: #FAFAF9;
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.footer-links a:hover {
  opacity: 1;
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