function loadingAnimation() {
  gsap.from("#pageOne h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from("#pageOne video", {
    scale: 0.5,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
  });
}
loadingAnimation();

function videoContainerAnimation() {
  let videoContainer = document.querySelector("#videoContainer");
  let playBtn = document.querySelector(".cursor #playBtn");

  videoContainer.addEventListener("mouseenter", function () {
    gsap.to(playBtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(playBtn, {
      scale: 0,
      opacity: 0,
    });
  });
  videoContainer.addEventListener("mousemove", function (follow) {
    gsap.to(playBtn, {
      left: follow.x - 70,
      top: follow.y - 70,
    });
  });
}
videoContainerAnimation();

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("main"),
//   smooth: true,
// });
function Locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });

  // --- RED PANEL ---
  // gsap.from(".line-1", {
  //   scrollTrigger: {
  //     trigger: ".line-1",
  //     scroller: ".smooth-scroll",
  //     scrub: true,
  //     start: "top bottom",
  //     end: "top top",
  //     onUpdate: (self) => console.log(self.direction),
  //   },
  //   scaleX: 0,
  //   transformOrigin: "left center",
  //   ease: "none",
  // });

  // --- ORANGE PANEL ---
  // gsap.from(".line-2", {
  //   scrollTrigger: {
  //     trigger: ".orange",
  //     scroller: ".smooth-scroll",
  //     scrub: true,
  //     pin: true,
  //     start: "top top",
  //     end: "+=100%",
  //   },
  //   scaleX: 0,
  //   transformOrigin: "left center",
  //   ease: "none",
  // });

  // --- PURPLE/GREEN PANEL ---
  // var tl = gsap.timeline// --- RED PANEL ---
  // gsap.from(".line-1", {
  //   scrollTrigger: {
  //     trigger: ".line-1",
  //     scroller: ".smooth-scroll",
  //     scrub: true,
  //     start: "top bottom",
  //     end: "top top",
  //     onUpdate: (self) => console.log(self.direction),
  //   },
  //   scaleX: 0,
  //   transformOrigin: "left center",
  //   ease: "none",
  // });

  // --- ORANGE PANEL ---
  // gsap.from(".line-2", {
  //   scrollTrigger: {
  //     trigger: ".orange",
  //     scroller: ".smooth-scroll",
  //     scrub: true,
  //     pin: true,
  //     start: "top top",
  //     end: "+=100%",
  //   },
  //   scaleX: 0,
  //   transformOrigin: "left center",
  //   ease: "none",
  // });

  // --- PURPLE/GREEN PANEL ---
  // var tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".purple",
  //     scroller: ".smooth-scroll",
  //     scrub: true,
  //     pin: true,
  //     start: "top top",
  //     end: "+=100%",
  //   },
  // });

  // tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
  //   .from(
  //     ".line-3",
  //     { scaleX: 0, transformOrigin: "left center", ease: "none" },
  //     0
  //   )
  //   .to(".purple", { backgroundColor: "#28a92b" }, 0);

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
Locomotive();

function navbarAnimation() {
  gsap.to("nav #partOne svg", {
    transform: "translateY(-110%)",
    scrollTrigger: {
      trigger: "#pageOne",
      scroller: "main",
      markers: true,
      start: "top 0%",
      end: "top -5%",
      scrub: 0.5,
    },
  });
  gsap.to("nav #partTwo a", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#pageOne",
      scroller: "main",
      // markers: true,
      start: "top 0%",
      end: "top -5%",
      scrub: 0.5,
    },
  });
}
navbarAnimation();

function cursorAnimation() {
  let products = document.querySelectorAll("#bigItems .items");
  let playBtn = document.querySelector(".cursor #productBtn");

  products.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      gsap.to(playBtn, {
        scale: 1,
        opacity: 1,
      });
    });
    e.addEventListener("mouseleave", function () {
      gsap.to(playBtn, {
        scale: 0,
        opacity: 0,
      });
    });
    e.addEventListener("mousemove", function (follow) {
      gsap.to(playBtn, {
        left: follow.x - 100,
        top: follow.y - 100,
      });
    });
  });
}
cursorAnimation();

function finalAnimation() {
  gsap.to(".marque", {
    transform: "translateX(-200%)",
    duration: 2,
    repeat: -1,
    ease: "none",
  });
  window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      gsap.to(".marque", {
        transform: "translateX(-200%)",
        duration: 3,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".marque img", {
        rotate: 180,
      });
    } else {
      gsap.to(".marque", {
        transform: "translateX(00%)",
        duration: 3,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".marque img", {
        rotate: 0,
      });
    }
  });
}
finalAnimation();
