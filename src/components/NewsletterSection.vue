<template>
  <section id="newsletter" class="newsletter">
    <div class="container">
      <div class="newsletter-content">
        <h2>Stay Updated</h2>
        <p>We're working on setting up our newsletter. In the meantime, follow us on social media for the latest updates about our workshops, events, and plastic recycling initiatives.</p>
        
        <div class="social-links">
          <a href="https://www.facebook.com/profile.php?id=61580648091526" target="_blank" class="social-link">
            📘 Facebook Page
          </a>
          <a href="https://www.facebook.com/groups/1801827844055214" target="_blank" class="social-link">
            👥 Facebook Group
          </a>
        </div>
        
        <p class="newsletter-note">
          Newsletter coming soon! Check back later for updates.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewsletterSection'
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

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 3rem 0;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: #fee77b;
  color: #2D3748;
  padding: 1.2rem 1.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(254, 231, 123, 0.4);
}

.social-link:hover {
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

@media (max-width: 768px) {
  .newsletter h2 {
    font-size: 2rem;
  }
  
  .social-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>