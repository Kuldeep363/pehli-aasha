angular.module('scroll',[])
.directive('scrollMagic',function(){
    return{
        restrict:'A',
        link:function(scope,elem,attr){
            // scroll magic
            let controller = new ScrollMagic.Controller() //controller


            // row 1
            let timeline1 = new TimelineMax()

            timeline1
            .from('.works-1',4,{
                x:800,
                ease:Power3.easeInOut
            })
            .from('#hat',4,{
                x:400,
                y:400,
                autoAlpha:0,
                ease:Power3.easeInOut
            })
            .from('#roll',4,{
                x:-400,
                y:-400,
                autoAlpha:0,
                ease:Power3.easeInOut
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
                ease:Power3.easeInOut
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
                ease:Power3.easeInOut
            })
            .from('#Vector-bg',8,{
                autoAlpha:0,
                ease:Power3.easeInOut
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
                ease:Power3.easeInOut
            })
            .from('#front-hand',8,{
                x:-1000,
                ease:Power3.easeInOut
            })
            .from('#back-hand',8,{
                x:-1000,
                ease:Power3.easeInOut
            },'-=8')
            .fromTo('#soil',4,{
                autoAlpha:0,
                y:100,
                ease:Power3.easeInOut
            },{
                autoAlpha:1,
                y:0,
                ease:Power3.easeInOut
            })
            .from('#tree',8,{
                y:100,
                autoAlpha:0,
                ease:Power3.easeInOut
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

            
        }
    }
})