---
layout: default
title: Inicio
---

<!-- Hero Section -->
<section class="hero-section">
    <div class="hero-container">
        <div class="hero-text">
            <h1>Snacks sin complicaciones</h1>
            <p>Hechos con ingredientes reales que conoces y amas. Snacks conscientes para disfrutar cada bocado sin preocupaciones.</p>
            <div class="cta-buttons">
                <a href="#products" class="cta-primary">¡Ya quiero probarlos!</a>
                <a href="#contact" class="cta-secondary">Contáctanos</a>
            </div>
        </div>
        <div class="hero-image">
            <img src="/assets/images/hero-image.webp" alt="Mangoo Hero Image" 
                 srcset="/assets/images/hero-image-400w.webp 400w, 
                         /assets/images/hero-image-600w.webp 600w, 
                         /assets/images/hero-image-800w.webp 800w" 
                 sizes="(max-width: 600px) 400px, 
                        (max-width: 800px) 600px, 
                        800px" 
                 width="300" height="300">
        </div>
    </div>
</section>

<!-- Products Section -->
<section class="products-section" id="products">
    <div class="product-grid">
        <div class="product-card">
            <img src="/assets/images/product1.webp" alt="Mango Natural" 
                 srcset="/assets/images/product1-300w.webp 300w, 
                         /assets/images/product1-600w.webp 600w, 
                         /assets/images/product1-900w.webp 900w" 
                 sizes="(max-width: 600px) 300px, 
                        (max-width: 900px) 600px, 
                        900px" 
                 width="900" height="900">
            <h2>Mango Natural Deshidratado</h2>
            <p>Disfruta de la dulzura natural del mango en cada mordida. Sin azúcares añadidos ni conservadores, es el snack perfecto para cuidar tu salud mientras disfrutas del auténtico sabor de la fruta.</p>
        </div>
        <div class="product-card">
            <img src="/assets/images/product2.webp" alt="Mango Enchilado" 
                 srcset="/assets/images/product2-300w.webp 300w, 
                         /assets/images/product2-600w.webp 600w, 
                         /assets/images/product2-900w.webp 900w" 
                 sizes="(max-width: 600px) 300px, 
                        (max-width: 900px) 600px, 
                        900px" 
                 width="900" height="900">
            <h2>Mango Enchilado Deshidratado</h2>
            <p>Una combinación única de chiles, limón y condimentos que eleva el mango deshidratado a otro nivel. Perfecto para los amantes de lo dulce y picosito.</p>
        </div>
    </div>
</section>

<!-- About Us Section -->
<section class="about-section" id="about">
    <div class="about-container">
        <h2>Acerca de Nosotros</h2>
        <p>Mangoo nació de una inquietud: ¿por qué algo tan esencial como la comida está cada vez más procesado?</p>
        <p>En Mangoo, creemos que es momento de cambiar esta realidad. Nos propusimos regresar a lo básico, ofreciendo productos honestos que respeten los ingredientes originales.</p>
    </div>
</section>

<!-- Footer Section -->
<footer>
    <section id="legal">
        <h3>Aviso Legal</h3>
        <p>Los productos ofrecidos por Mangoo están elaborados con ingredientes de la más alta calidad.</p>
    </section>

    <p>&copy; <span id="year"></span> Mangoo. Todos los derechos reservados.</p>
    <p>
        <a href="#legal">Aviso Legal</a> |
        <a href="#contact">Contáctanos</a>
    </p>
</footer>
<script>
    document.getElementById('year').textContent = new Date().getFullYear();
</script>
