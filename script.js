gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline()

tl.from("#page1 h1", {
    delay: 1,
    duration: 1,
    scale: 2,
    opacity: 0,
})


tl.to("#page2 h1", {
    transform: "translateX(-60%)",
    scrollTrigger: {
        trigger: ("#page2"),
        scroller: "body",
        scrub: 2,
        start: "top 0%",
        end: "top -100%",
        pin: true
    }
})


tl.from("#page3 h1", {
        delay: 6,
        duration: 1,
        scale: 2,
        opacity: 0
})



