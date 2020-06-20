
// scroll magic
    let controller = new ScrollMagic.Controller() //controller


    // row 1
    let timeline1 = new TimelineMax()

    timeline1
    .from('.works-1',4,{
        x:800,
        ease:Power4.easeInOut
    })
    .from('#hat',4,{
        x:400,
        y:400,
        autoAlpha:0,
        ease:Power4.easeInOut
    })
    .from('#roll',4,{
        x:-400,
        y:-400,
        autoAlpha:0,
        ease:Power4.easeInOut
    },'-=4')



    let scene1 = new ScrollMagic.Scene({
        triggerElement:'.we-are-1',
        duration:'100%',
        triggerHook:0,
        offset:'0'
    })
    .setTween(timeline1)
    .setPin('.we-are-1')
    .addTo(controller)

// row 2

    let timeline2 = new TimelineMax()
    timeline2
    .from('.works-2',4,{
        x:-800,
        ease:Power4.easeInOut
    })
    .fromTo('#box-1',8,{
        x: '-500',
        ease: Power3.easeInOut
    },{
        x:0,
        ease:Power3.easeInOut
    })
    .from('#box-2',8,{
        x: '700',
        ease: Power3.easeInOut
    },'-=8')
    .from('#box-3',8,{
        x:-100,
        y: '-300',
        autoAlpha:0,
        ease: Power3.easeInOut
    },'-=8')
    .from('#box-4',8,{
        x:100,
        y: '-400',
        autoAlpha:0,
        ease: Power3.easeInOut
    },'-=8')
    .from('#box-5',8,{
        x:-100,
        y: '-500',
        autoAlpha:0,
        ease: Power3.easeInOut
    },'-=8')
    .from('#box-6',8,{
        x:-100,
        y: '-600',
        autoAlpha:0,
        ease: Power3.easeInOut
    },'-=8')
    .from('#box-7',8,{
        x:-100,
        y: '-700',
        autoAlpha:0,
        ease: Power3.easeInOut
    },'-=8')
    .from('#box-8',8,{
        x:-100,
        y: '-800',
        autoAlpha:0,
        ease: Power3.easeInOut
    },'-=8')
    .from('#helpTree-1',8,{
        autoAlpha:0,
        ease:Power3.easeInOut
    })
    .from('#helpTree-2',8,{
        autoAlpha:0,
        ease:Power3.easeInOut
    },'-=8')
    .from('#man',10,{
        y:'-200',
        autoAlpha:0,
        ease:Power4.easeInOut
    })
    .from('#Vector-bg',8,{
        autoAlpha:0,
        ease:Power4.easeInOut
    })
    
    console.log('scroll')

    let scene2 = new ScrollMagic.Scene({
        triggerElement:'.we-are-2',
        duration:'100%',
        triggerHook:0,
        offset:'0'
    })
    .setTween(timeline2)
    .setPin('.we-are-2')
    .addTo(controller)



// row 3
    let timeline3 = new TimelineMax()

    timeline3
    .from('.works-3',4,{
        x:800,
        ease:Power4.easeInOut
    })
    .from('#front-hand',8,{
        x:-1000,
        ease:Power4.easeInOut
    })
    .from('#back-hand',8,{
        x:-1000,
        ease:Power4.easeInOut
    },'-=8')
    .fromTo('#soil',4,{
        autoAlpha:0,
        y:100,
        ease:Power4.easeInOut
    },{
        autoAlpha:1,
        y:0,
        ease:Power4.easeInOut
    })
    .from('#tree',8,{
        y:100,
        autoAlpha:0,
        ease:Power4.easeInOut
    })





    let scene3 = new ScrollMagic.Scene({
        triggerElement:'.we-are-3',
        duration:'100%',
        triggerHook:0,
        offset:'0'
    })
    .setTween(timeline3)
    .setPin('.we-are-3')
    .addTo(controller)


let size = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

if (size > 992){

    // notice 
    let notice = new TimelineMax()
    notice
    .fromTo('.notice-card-1',8,{
        x:eval(size/3),
        y:800,
        ease:Power4.easeInOut
    },{
        y:0,
        ease:Power4.easeInOut
    })
    .fromTo('.notice-card-2',8,{
        y:800,
        ease:Power4.easeInOut
    },{
        y:0,
        ease:Power4.easeInOut
    },'-=8')
    .fromTo('.notice-card-3',8,{
        x:-eval(size/3),
        y:800,
        ease:Power4.easeInOut
    },{
        y:0,
        ease:Power4.easeInOut
    },'-=8')
    .fromTo('.notice-card-1',4,{
        x:eval(size/3),
        ease:Power4.easeInOut
    },{
        x:0,
        scale:0.5,
        ease:Power4.easeInOut
    })
    .fromTo('.notice-card-3',4,{
        x:-eval(size/3),
        ease:Power4.easeInOut
    },{
        x:0,
        scale:0.5,
        ease:Power4.easeInOut
    },'-=4')
    .to('.notice-card-1',4,{
        scale:1,
        ease:Power4.easeInOut
    })
    .to('.notice-card-2',4,{
        scale:1,
        ease:Power4.easeInOut
    },'-=4')
    .to('.notice-card-3',4,{
        scale:1,
        ease:Power4.easeInOut
    },'-=4')


    let scene4 = new ScrollMagic.Scene({
        triggerElement:'#notice-board',
        duration:'100%',
        triggerHook:0,
        offset:'0'
    })
    .setTween(notice)
    .setPin('#notice-board')
    .addTo(controller)


// projects


let projects = new TimelineMax()
projects
.to('.project-card-4',4,{
    height:0,
    borderWidth:0,
    padding:0,
    ease:Power4.easeInOut
})
.to('.project-card-5',4,{
    height:0,
    borderWidth:0,
    padding:0,
    ease:Power4.easeInOut
},'-=4')
.to('.project-card-6',4,{
    height:0,
    borderWidth:0,
    padding:0,
    ease:Power4.easeInOut
},'-=4')


let projectScene = new ScrollMagic.Scene({
    triggerElement:'#incoming-projects',
    triggerHook:0,
    duration:'100%',
    offset:'0'
})
.setTween(projects)
.setPin('#incoming-projects')
.addTo(controller)





}else{

    let notice = new TimelineMax()

    notice
    .fromTo('.notice-card-1',4,{
        scale:0.2,
        x:-600,
        rotation:90,
        // height:0,
        ease:Power4.easeInOut
    },{
        scale:0.5,
        x:0,
        ease:Power4.easeInOut
    })
    .to('.notice-card-1',4,{
        rotation:0,
        scale:1,
        ease:Power4.easeInOut
    })


    let scene4 = new ScrollMagic.Scene({
        triggerElement:'.notice-1',
        duration:'100%',
        triggerHook:0,
        offset:'0'
    })
    .setTween(notice)
    .setPin('.notice-1')
    .addTo(controller)


    
    let notice2 = new TimelineMax()

    notice2
    .fromTo('.notice-card-2',4,{
        scale:0.2,
        x:600,
        rotation:90,
        // height:0,
        ease:Power4.easeInOut
    },{
        scale:0.5,
        x:0,
        ease:Power4.easeInOut
    })
    .to('.notice-card-2',4,{
        rotation:0,
        scale:1,
        ease:Power4.easeInOut
    })


    let scene5 = new ScrollMagic.Scene({
        triggerElement:'.notice-2',
        duration:'100%',
        triggerHook:0,
        offset:'0'
    })
    .setTween(notice2)
    .setPin('.notice-2')
    .addTo(controller)


    
    let notice3 = new TimelineMax()

    notice3
    .fromTo('.notice-card-3',4,{
        scale:0.2,
        x:-600,
        rotation:90,
        // height:0,
        ease:Power4.easeInOut
    },{
        scale:0.5,
        x:0,
        ease:Power4.easeInOut
    })
    .to('.notice-card-3',4,{
        rotation:0,
        scale:1,
        ease:Power4.easeInOut
    })


    let scene6 = new ScrollMagic.Scene({
        triggerElement:'.notice-3',
        duration:'100%',
        triggerHook:0,
        offset:'0'
    })
    .setTween(notice3)
    .setPin('.notice-3')
    .addTo(controller)


}
    

