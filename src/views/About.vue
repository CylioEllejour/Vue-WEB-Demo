<template>
  <div id="about">
    <header class="full-screen-header">
      <h1 class="gradient-text">About NEXTLIGHT</h1>
      <p class="gradient-text">Discover the story behind our music label.</p>
    </header>
    <main>
      <section class="gallery">
        <div class="gallery-grid">
          <div class="info-card">
            <img src="../assets/img/comingsoon.jpg" alt="Mission Image" />
            <div class="info-content">
              <h2 class="gradient-text">Our Mission</h2>
              <p>To revolutionize the VOCALOID ELECTRO scene with innovative music and talented artists.</p>
            </div>
          </div>
          <div class="info-card">
            <img src="../assets/img/comingsoon.jpg" alt="Vision Image" />
            <div class="info-content">
              <h2 class="gradient-text">Our Vision</h2>
              <p>Creating a global community of music lovers united by their passion for VOCALOID ELECTRO.</p>
            </div>
          </div>
          <div class="info-card">
            <img src="../assets/img/comingsoon.jpg" alt="History Image" />
            <div class="info-content">
              <h2 class="gradient-text">Our History</h2>
              <p>Founded in 2024, NEXTLIGHT has quickly become a leading label in the VOCALOID ELECTRO genre.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer">
      <p>&copy; 2024 NEXTLIGHT. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.gallery, .info-card').forEach(el => {
      observer.observe(el);
    });
  }
};
</script>

<style scoped>
body {
  font-family: 'Inter', 'Noto Sans JP', sans-serif;
  margin: 0;
  background-color: #FFFFFF;
}

#about {
  text-align: center;
}

.full-screen-header h1,
.full-screen-header p {
  line-height: 1.5;
  margin-bottom: 2rem;
  font-size: 3rem;
}

.full-screen-header h1 {
  margin-bottom: 2rem;
}

.gallery h2 {
  font-size: 2.5rem;
  color: #212121;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.full-screen-header {
  background: url('../assets/img/enchant.png') no-repeat center center;
  background-size: cover;
  color: #FFFFFF;
  padding: 3rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.gallery {
  padding: 1rem;
  background-color: #FFFFFF;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.info-card {
  background-color: #F5F5F5;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.5s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.info-card img {
  width: 100%;
  height: auto;
}

.info-content {
  padding: 1rem;
}

.info-content h2 {
  color: #212121;
  font-weight: bold;
  margin-bottom: 1rem;
}

.info-content p {
  margin-bottom: 2rem;
  line-height: 1.5;
}

.info-card:hover {
  transform: scale(1.05);
}

.footer {
  background-color: #212121;
  color: #FFFFFF;
  padding: 1rem;
  text-align: center;
}

.gradient-text {
  background: linear-gradient(to right,  #ff6cb6, #ffe0e0, #ed4479);
  -webkit-background-clip: text;
  color: transparent;
}

.youtube-video iframe {
  border-radius: 20px;
}

.links-header h1,
.links-header h2 {
  font-size: 2.5rem;
  color: #212121;
  font-weight: bold;
  margin-bottom: 2rem;
}

.links-content {
  font-size: 1.5rem;
}

.link-item {
  display: inline-block;
  margin: 1rem;
  padding: 1rem;
  background: linear-gradient(to right, #0051ff, #92d9c7, #0051ff, #da95e3, #0051ff);
  border-radius: 10px;
  text-decoration: none;
  color: #ffffff;
  transition: background-color 0.3s ease, transform 0.5s ease;
  width: calc((100% - 8rem) / 3);
  height: calc((100% - 8rem) / 3);
  box-sizing: border-box;
}

.link-item:hover {
  transform: scale(1.05);
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  opacity: 0;
  animation: slideIn 0.6s ease forwards;
}

.gallery,
.info-card,
.youtube-video {
  opacity: 0;
}
</style>
