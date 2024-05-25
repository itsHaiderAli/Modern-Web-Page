Shery.imageEffect("#back", {
    style: 5, config: {
        "a": { "value": 1.49, "range": [0, 30] }, "b": { "value": -0.98, "range": [-1, 1] },
        "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.0721966205837172 },
        "gooey": { "value": true },
        "infiniteGooey": { "value": true }, "growSize": { "value": 3.66, "range": [1, 15] },
        "durationOut": { "value": 1, "range": [0.1, 5] },
        "durationIn": { "value": 0.99, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true },
        "maskVal": {
            "value": 1,
            "range": [1, 5]
        }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }
        ,
        "onMouse": { "value": 1 }, "noise_speed": { "value": 1.07, "range": [0, 10] }, "metaball": { "value": 0.2,
        "range": [0, 2], "_gsap": { "id": 3 } },
        "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] },
        "noise_height": { "value": 0.46, "range": [0, 2] }, "noise_scale": { "value": 12.15, "range": [0, 100] }  
    }, gooey: true
})

var h1s = document.querySelectorAll("h1")
var index = 0
document.querySelector("#main")
.addEventListener("click", function(){
  gsap.to(h1s[index],{
    top:"-=100%",
    ease: Expo.easeInOut,
    duration:1,
  });
   index++
   gsap.to(h1s[index], {
      top: "-=100%",
       ease: Expo.easeInOut
       
      })


})

