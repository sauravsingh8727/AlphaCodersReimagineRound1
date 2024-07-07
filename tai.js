var main = document.querySelector(".main");
var cursor = document.querySelector(".crsr");
function navani(){
    gsap.to("nav",{
        backgroundColor:"#d1ae6c96",
        height:"9.8vw",
        duration:3,
        scrollTrigger:{
            trigger:"nav",
            scroller:"body",
            start:"top -10%",
            end:"top 11%",
            scrub:1
        },
    });
}

function page2ani(){


    
    main.addEventListener("mousemove",function(hii){
        gsap.to (cursor,{
            x:hii.x,
            y:hii.y,
            duration:1,
            scale:0.8,
            ease: "back.out(5)",
            })
    });
}

page2ani()
var img = document.querySelector(".imga")

main.addEventListener("mousemove",function(hii){
    gsap.to (cursor,{
        x:hii.x,
        y:hii.y,
        duration:1,
        ease: "expoScale(0.5,9,none)",
        })
})

img.addEventListener("mouseenter",function(hi){
    gsap.to(cursor,{
        scale:3,
    })
})




img.addEventListener("mouseleave",function(hi){
    gsap.to(cursor,{
        scale:1,
    })
})

function part1(){
    gsap.to(".page2 .part1 h1",{
        opacity:0,
        transform:"translateY(200%)",
        scrollTrigger:{
            trigger:".page2 part1",
            start:"top 0%",
            end:"top -150%",
            //markers:true,
            scrub:1,
            pin:true,//is cheez ko scroll kre bina age badega nai page ya scroll
        }
    })  
}

part1()

var card = document.querySelector(".card");

const cardAnimation = gsap.from(".card", {
    opacity: 0,
    y: 150,
    duration: 1,
    // markers: true,
    delay: 0.5,
    stagger: 0.25,
    scrub:1,
    scrollTrigger: {
      trigger: ".page2 part1",
      start: "top -90%",
      end: "top -200%",
      pin:true,
    }
  });

const Animation=gsap.from(".imga",{
    opacity:0,
    scrollTrigger: {
        trigger: ".page2 .imga",
        start: "top 60%",
        end: "top -200%",
      }
})

card.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:4,
    })
})




card.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:1,
    })
})
