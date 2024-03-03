    // init Jarallax
    jarallax(document.querySelectorAll(".jarallax"), {
        speed: 1.5,
      });
    

    // appear on scroll
    const sections = document.querySelectorAll('section');
    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    sections.forEach(section => {
        appearOnScroll.observe(section);
    })   