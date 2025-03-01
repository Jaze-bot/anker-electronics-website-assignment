// index.html
const popupImage = document.getElementById('popupImage');
const imagePopup = document.getElementById('imagePopup');
const closePopup = document.getElementById('closePopup');

if (popupImage && imagePopup && closePopup) {
    popupImage.addEventListener('click', function() {
        imagePopup.style.display = 'block';
    });

    closePopup.addEventListener('click', function() {
        imagePopup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === imagePopup) {
            imagePopup.style.display = 'none';
        }
    });
}

// about.html
const teamImages = document.querySelectorAll('.team-image');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

if (teamImages && modal && modalImage && closeBtn) {
    teamImages.forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImage.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// products.html
document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('li[data-product]');

    productItems.forEach(item => {
        item.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            const detailsDiv = document.getElementById(productId + '-details');
            document.querySelectorAll('.product-details').forEach(div => div.classList.remove('active'));
            detailsDiv.classList.add('active');
        });
    });
});

// gallery.html
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.popup-image');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = lightbox.querySelector('img');

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            lightboxImage.src = this.src;
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === this) {
            lightbox.classList.remove('active');
        }
    });
});

// testimonial.html
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const modal = document.getElementById('testimonialModal');
    const modalContent = document.getElementById('modalTestimonialContent');
    const closeBtn = document.querySelector('.close');

    testimonials.forEach(testimonial => {
        testimonial.addEventListener('click', function() {
            const testimonialContent = this.innerHTML;
            modalContent.innerHTML = testimonialContent;
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});