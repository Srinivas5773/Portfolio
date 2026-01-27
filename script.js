// 3D Portfolio JavaScript

// Create 3D particle background
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Mouse-responsive 3D effects
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    // Apply 3D rotation to hero section
    const heroContainer = document.querySelector('.hero-container');
    if (heroContainer) {
        heroContainer.style.transform = `rotateY(${mouseX * 10}deg) rotateX(${-mouseY * 10}deg)`;
    }
    
    // Apply 3D rotation to skill cards
    const skillCards = document.querySelectorAll('.skill-card-3d');
    skillCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;
        const angleX = (e.clientY - cardY) * 0.01;
        const angleY = (e.clientX - cardX) * 0.01;
        
        card.style.transform = `translateZ(20px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    // Apply 3D rotation to project cards
    const projectCards = document.querySelectorAll('.project-card-3d');
    projectCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;
        const angleX = (e.clientY - cardY) * 0.01;
        const angleY = (e.clientX - cardX) * 0.01;
        
        card.style.transform = `translateZ(30px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 3D Navigation scroll effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.style.transform = `translateZ(${scrolled * 0.5}px) rotateX(${scrolled * 0.01}deg)`;
    }
    
    // Parallax effect for hero section
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.transform = `translateY(${scrolled * 0.3}px) translateZ(${scrolled * 0.2}px)`;
    }
    
    const profileCard = document.querySelector('.profile-card-3d');
    if (profileCard) {
        profileCard.style.transform = `translateY(${scrolled * 0.2}px) rotateY(${scrolled * 0.05}deg)`;
    }
});

// Intersection Observer for 3D animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = entry.target.dataset.transform || 'translateZ(0)';
        }
    });
}, observerOptions);

// Observe elements for 3D animations
document.addEventListener('DOMContentLoaded', () => {
    // Set initial states for animation
    const animatedElements = document.querySelectorAll('.skill-card-3d, .project-card-3d, .contact-card-3d');
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transition = 'all 0.8s ease';
        element.style.transform = 'translateZ(-100px) rotateY(45deg)';
        element.dataset.transform = 'translateZ(0) rotateY(0deg)';
        observer.observe(element);
    });
});

// 3D card flip interactions
document.querySelectorAll('.skill-card-3d').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateZ(60px) rotateX(15deg) rotateY(15deg) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateZ(0) rotateX(0) rotateY(0) scale(1)';
    });
});

document.querySelectorAll('.project-card-3d').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateZ(80px) rotateY(20deg) rotateX(10deg) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateZ(0) rotateY(0) rotateX(0) scale(1)';
    });
});

// 3D button interactions
document.querySelectorAll('.btn-3d').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateZ(40px) translateY(-5px) rotateX(5deg)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateZ(20px) translateY(0) rotateX(0)';
    });
});

// Loading screen animation
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1500);
    }
    
    // Initialize particles
    createParticles();
    
    // Add entrance animations
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateZ(-100px) rotateY(45deg)';
        setTimeout(() => {
            heroTitle.style.transition = 'all 1s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateZ(50px) rotateY(0deg)';
        }, 500);
    }
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateZ(-80px) translateX(-50px)';
        setTimeout(() => {
            heroSubtitle.style.transition = 'all 1s ease';
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateZ(30px) translateX(0)';
        }, 800);
    }
    
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
        heroDescription.style.opacity = '0';
        heroDescription.style.transform = 'translateZ(-60px) translateX(50px)';
        setTimeout(() => {
            heroDescription.style.transition = 'all 1s ease';
            heroDescription.style.opacity = '1';
            heroDescription.style.transform = 'translateZ(20px) translateX(0)';
        }, 1100);
    }
});

// 3D text typing effect
function typeText3D(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            element.style.transform = `translateZ(${Math.random() * 20}px) rotateY(${Math.random() * 10 - 5}deg)`;
            i++;
            setTimeout(type, speed);
        } else {
            element.style.transform = 'translateZ(20px) rotateY(0deg)';
        }
    }
    
    type();
}

// Apply typing effect to hero title on load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        setTimeout(() => {
            typeText3D(heroTitle, 'Full Stack Developer', 80);
        }, 2000);
    }
});

// 3D hover effect for contact items
document.querySelectorAll('.contact-item-3d').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateZ(50px) scale(1.2) rotateY(10deg)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateZ(20px) scale(1) rotateY(0deg)';
    });
});

// Dynamic 3D rotation for section titles
document.querySelectorAll('.section-title-3d').forEach(title => {
    title.addEventListener('mouseenter', () => {
        title.style.transform = 'translateZ(80px) rotateY(10deg) scale(1.1)';
    });
    
    title.addEventListener('mouseleave', () => {
        title.style.transform = 'translateZ(50px) rotateY(0deg) scale(1)';
    });
});

// 3D parallax scrolling effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.skill-icon-3d, .project-image-3d');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px) translateZ(${scrolled * speed * 0.5}px) rotateY(${scrolled * 0.01}deg)`;
    });
});

// Add 3D glow effect on hover
document.querySelectorAll('.skill-card-3d, .project-card-3d').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 30px rgba(131, 56, 236, 0.6), 0 0 60px rgba(255, 0, 110, 0.4)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

console.log('🚀 3D Portfolio loaded successfully!');
