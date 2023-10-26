//ANIMATIONS OF THE PAGE

//let animate = document.querySelectorAll(".animate");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i=0; i<animate.length; i++) {
    let alturaAnimado = animate[i].offsetTop;
    if(alturaAnimado - 500 < scrollTop) {
      animate[i].style.opacity= 1;
      animate[i].classList.add("see-left")
    }
  }
}

window.addEventListener('scroll', mostrarScroll);

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