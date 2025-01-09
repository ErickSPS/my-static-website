---
layout: default
title: Welcome!
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
            <img src="assets/images/hero-image.jpg" alt="Mangoo Hero Image" width="300" height="300">
        </div>
    </div>
</section>

<!-- About Section -->
<section class="story-section" id="about">
    <div class="story-content">
        <div class="story-text">
            <h2 class="story-highlight">Nuestra Historia</h2>
            <div class="story-title">Nuestro Viaje y Valores</div>
            <p class="story-description">
                Mangoo nació de una inquietud: ¿por qué algo tan esencial como la comida está cada vez más procesado? Los alimentos que consumimos diariamente, y en especial los snacks, parecen más salidos de un laboratorio del Dr. Frankenstein que de las manos de quienes trabajan la tierra con esfuerzo y dedicación.
            </p>
            <p class="story-description">
                En Mangoo, creemos que es momento de cambiar esta realidad. Nos propusimos regresar a lo básico, ofreciendo productos honestos que respeten los ingredientes originales.
            </p>
            <p class="story-description">
                Porque creemos que incluso cuando se trata de "darse un gusto", puedes elegir algo que sea nutritivo, delicioso y, sobre todo, real.
            </p>
        </div>

        <div class="services-grid">
            <article class="service-card">
                <img src="assets/images/natural-icon.png" alt="100% Natural" class="service-icon" />
                <div class="service-content">
                    <h3 class="service-title">100% Natural</h3>
                    <p class="service-description">Sin conservadores ni aditivos artificiales</p>
                </div>
            </article>

            <article class="service-card">
                <img src="assets/images/quality-icon.png" alt="Alta Calidad" class="service-icon" />
                <div class="service-content">
                    <h3 class="service-title">Alta Calidad</h3>
                    <p class="service-description">Ingredientes seleccionados cuidadosamente</p>
                </div>
            </article>

            <article class="service-card">
                <img src="assets/images/sustainable-icon.png" alt="Sustentable" class="service-icon" />
                <div class="service-content">
                    <h3 class="service-title">Sustentable</h3>
                    <p class="service-description">Comprometidos con el medio ambiente</p>
                </div>
            </article>

            <article class="service-card">
                <img src="assets/images/local-icon.png" alt="Local" class="service-icon" />
                <div class="service-content">
                    <h3 class="service-title">Producto Local</h3>
                    <p class="service-description">Apoyando a productores mexicanos</p>
                </div>
            </article>
        </div>
    </div>
</section>

<!-- Products Section -->
<section class="products-section">
    <h2 class="products-title">Nuestros Productos</h2>

    {% comment %}
        RPECK 09/01/2025 - Added loop to provide the means to manage products from the ./_products folder
        --
        Ref: https://jekyllrb.com/docs/collections/
    {% endcomment %}
    <div class="product-grid">
        {% assign products = site.products | sort: order | reverse %}

        {% for product in products %}
            <div class="product-card">
                <img src="assets/images/{{ product.image }}" alt="{{ product.name }}" width="900" height="900">
                <h2>{{ product.name }} Deshidratado</h2>
                <p>{{ product }}</p>

                <p>
                    <stripe-buy-button
                        buy-button-id="{{ product.button_id }}"
                        publishable-key="{{ site.stripe.publishable_key }}"
                    >
                    </stripe-buy-button>
                </p>
            </div>
        {% endfor %}
    </div>

</section>

<!-- Contact Section -->
{% include contact.html %}


