function page1animation(){
    var tl = gsap.timeline()

tl.from("nav h1",{
    y:-30,
    duration:1,
    opacity:0
})
tl.from("nav .part2 h4,nav .part2 button",{
    y:-30,
    duration:0.8,
    stagger:0.18,
    opacity:0
})

tl.from(".center .center_p1 h1,p",{
    x:-60,
    opacity:0,
    duration:1,
    stagger:0.4
})

tl.from(".center .center_p2",{
    x:60,
    opacity:0,
    duration:1,

})

tl.from(".center .center_p1 button",{
    opacity:0,
    duration:0.3,
})

// tl.from(".center .center_p1 button",{
//     opacity:0,
//     duration:0.3,
// },"-=1")

tl.from(".section1bottom img",{
    y:60,
    opacity:0,
    duration:0.7,
    stagger:0.18
})
};

page1animation();

function page2animation() {
    var tl2 = gsap.timeline({
        scrollTrigger:{
        scroller:"body",
        trigger:".section2",
        start:"top 50%",
        end:"top 0%",
        scrub: 2,
    }})
    
    tl2.from(".section2 .services",{
        x:-60,
        opacity:0,
        duration:1,
      
    })
    
    tl2.from(".section2 .blocks .elements:first-child",{
        x:-300,
        opacity:0,
        duration:2,
    },"gajendra")
    
    tl2.from(".section2 .blocks .elements:nth-child(2)",{
        x:+300,
        opacity:0,
        duration:2,
    },"gajendra")
    
    
    tl2.from(".section2 .blocks .elements:nth-child(3)",{
        x:-300,
        opacity:0,
        duration:2,
    },"gajendraN")
    
    tl2.from(".section2 .blocks .elements:nth-child(4)",{
        x:+300,
        opacity:0,
        duration:2,
    },"gajendraN")
    
}

page2animation()


