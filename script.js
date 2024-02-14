
var tl = gsap.timeline()
.set('#Footer_group_1_', {autoAlpha: 1})
.fromTo( ['#Stem16_1_','#Stem1_1_'], {drawSVG: "0% 0%" }, {duration:1.5, drawSVG: "0% 100%" }, 'start')
.fromTo('#BaseGroup16_1_ path', {autoAlpha: 1, scale: 0, transformOrigin: '-10% 130%'}, {duration:1, scale:1}, 1.2, 'flower1')
.fromTo('#PinkFlowerGroup16_1_', {autoAlpha: 1, scale: 0, transformOrigin: '35% 110%'}, {duration:2, scale:1}, 'flower1-=0.55')
.fromTo('#BaseGroup1_1_ path', {autoAlpha: 1, scale: 0, transformOrigin: '90% 130%'}, {duration:1, scale:1}, 1.2, 'flower1')
.fromTo('#PinkFlowerGroup1_1_', {autoAlpha: 1, scale: 0, transformOrigin: '65% 110%'}, {duration:2, scale:1}, 'flower1-=0.55')
.fromTo( ['#Stem9_1_','#Stem25_1_'], {drawSVG: "0% 0%",  autoAlpha: 1 }, {duration:2, drawSVG: "0% 100%" }, 'flower1+=0.5')
.fromTo('#BaseGroup9_1_ path', {autoAlpha: 1, scale: 0, transformOrigin: '-10% 130%'}, {duration:1, scale:1}, 'flower2-=0.5')
.fromTo('#PinkFlowerGroup9_1_', {autoAlpha: 1, scale: 0, transformOrigin: '5% 110%'}, {duration:2, scale:1}, 'flower2')
.fromTo('#BaseGroup25_1_ path', {autoAlpha: 1, scale: 0, transformOrigin: '105% 130%'}, {duration:1, scale:1}, 'flower2-=0.5')
.fromTo('#PinkFlowerGroup25_1_', {autoAlpha: 1, scale: 0, transformOrigin: '95% 110%'}, {duration:2, scale:1}, 'flower2')

//stems
.fromTo(stemGroup1, stemVarsFrom, stemVarsTo, 'start+=0.1')
.fromTo(stemGroup2, stemVarsFrom, stemVarsTo, 'start+=0.1')
.fromTo(stemGroup3, stemVarsFrom, stemVarsTo, 'flower2-=1.5')
.fromTo(stemGroup4, stemVarsFrom, stemVarsTo, 'flower2-=1.5')
.fromTo(stemGroup5, stemVarsFrom, stemVarsTo, 'flower3-=1')
.fromTo(stemGroup6, stemVarsFrom, stemVarsTo, 'flower3-=1')

//leaves
.fromTo(leafGroup1, {autoAlpha: 1, scale: 0, transformOrigin:gsap.utils.wrap(["80% 45%", "20% 45%"]) }, {duration:2, scale:1}, 'flower1-=1')
.fromTo(leafGroup2, {autoAlpha: 1, scale: 0, transformOrigin:gsap.utils.wrap(["80% 25%", "60% 35%", "70% 75%"]) }, {duration:2, stagger:0.5, scale:1}, 'flower1')
.fromTo(leafGroup3, {autoAlpha: 1, scale: 0, transformOrigin:gsap.utils.wrap(["20% 25%", "40% 35%", "30% 75%"]) }, {duration:2, stagger:0.5, scale:1}, 'flower1')
.fromTo(leafGroup4, {autoAlpha: 1, scale: 0, transformOrigin:gsap.utils.wrap(["90% 70%", "100% 100%", "0% 90%"]) }, {duration:2, stagger:0.5, scale:1}, 'flower2')
.fromTo(leafGroup5, {autoAlpha: 1, scale: 0, transformOrigin:gsap.utils.wrap(["10% 70%", "0% 100%", "100% 90%"]) }, {duration:2, stagger:0.5, scale:1}, 'flower2')
.fromTo(leafGroup6, {autoAlpha: 1, scale: 0, transformOrigin:gsap.utils.wrap(["0% 90%", "10% 50%", "70% 60%"]) }, {duration:2, stagger:0.5, scale:1}, 'flower3')
.fromTo(leafGroup7, {autoAlpha: 1, scale: 0, transformOrigin:gsap.utils.wrap(["100% 90%", "90% 50%", "30% 60%"]) }, {duration:2, stagger:0.5, scale:1}, 'flower3')

//buds
.fromTo(budGroup1, {autoAlpha: 1, scale: 0, transformOrigin:gsap.utils.wrap(['220% -10%', '55% 100%']) }, {duration:2, scale:1, stagger:2.75}, 'flower1-=0.75')
.fromTo(budGroup2, {autoAlpha: 1, scale: 0, transformOrigin:gsap.utils.wrap(['-120% -10%', '45% 100%']) }, {duration:2, scale:1, stagger:2.75}, 'flower1-=0.75')
.fromTo(budGroup3, {autoAlpha: 1, scale: 0, transformOrigin:gsap.utils.wrap(['10% 110%', '0% 100%', '0% 100%', '80% 100%']) }, {duration:2, scale:1, stagger:0.5},  'flower2')
.fromTo(budGroup4, {autoAlpha: 1, scale: 0, transformOrigin:gsap.utils.wrap(['90% 110%', '100% 100%', '100% 100%', '20% 100%']) }, {duration:2, scale:1, stagger:0.5}, 'flower2')
.fromTo(budGroup5, {autoAlpha: 1, scale: 0, transformOrigin:gsap.utils.wrap(['-50% 120%', '150% 120%']) }, {duration:2, scale:1},  'flower2-=0.5')

//strokes
.fromTo(strokesLeftBottom, stemVarsFrom, { drawSVG: "0% 100%", duration:2, stagger:1 }, 1)
.fromTo(strokesRightBottom, stemVarsFrom, { drawSVG: "0% 100%", duration:2, stagger:1 }, 1)
.fromTo(strokesLeftTop, stemVarsFrom, { drawSVG: "0% 100%", duration:2, stagger:1 }, 'flower1+=0.5')
.fromTo(strokesRightTop, stemVarsFrom, { drawSVG: "0% 100%", duration:2, stagger:1 }, 'flower1+=0.5')

//dots
.fromTo(dots, 6, {autoAlpha: 0}, {autoAlpha: 1, ease: Expo.easeOut}, 'flower3+=1')
.fromTo(dots, 5, {scale: 0, transformOrigin: '50% 50%' }, {scale: 1, ease: Expo.easeOut}, 'flower3')
