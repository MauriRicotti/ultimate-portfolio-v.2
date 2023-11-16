//ANIMATIONS OF THE PAGE

let tl = gsap.timeline({
  repeat: 0,
});

let tl2 = gsap.timeline({
  repeat: 0,
});

// =========== SCROLLTRIGGER - ANIMATION ===========
gsap.registerPlugin(ScrollTrigger);

var st = gsap.timeline({
    scrollTrigger: {
        trigger: '.button-home-gsap',
        markers: false,
        start: '-=600 0',
        end: '-=600 0',
        scrub: 2,
    }
});

// =========== SUPERIOR - BAR - ANIMATION ===========
tl.from('.bar-gsap' , {
  duration: 1,
  opacity: 0,
  delay: 0.5,
  scale: 0,
});

tl.to('.bar-gsap' , {
  scale: 1,
  opacity: 1,
});

// =========== MAIN - ANIMATION ===========
tl2.from('.main-gsap' , {
  duration: 1,
  opacity: 0,
  delay: 0.5,
  scale: 0,
})

tl2.to('.main-gsap' , {
  opacity: 1,
  scale: 1,
  duration: 1,
});

// =========== BUTTON - HOME - ANIMATION ===========
st.from('.button-home-gsap', {
  duration: 1,
  opacity: 0,
  scale: 0,
})

st.to('.button-home-gsap', {
  duration: 1,
  opacity: 1,
  scale: 1,
})





































//PARTICLES IN PAGE

particlesJS(
    {
        "particles": {
          "number": {
            "value": 50,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#a0a0a0"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.6313181133058181,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 0.16241544246026918,
              "opacity_min": 0.040603860615067294,
              "sync": true
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 4.8724632738080755,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#c8c8c8",
            "opacity": 0.15782952832645453,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
);