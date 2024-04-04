gsap.from(".page1 .box", {
    scale: 0,
    duration: 2,
    rotate: 360
    
})


gsap.from(".page2 .box", {

    y:-200,
    // x:-400,
    duration: 2,
    // rotate: 360,
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        // start: "top 60%",
        markers: true,
        scrub:2


    }
})