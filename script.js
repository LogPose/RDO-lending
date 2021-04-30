const welcomeBlock = document.querySelector('#welcomeBlock')
const headBlock = document.querySelector('#headBlock')

const letView = new Promise (
    function showBox() {
        setTimeout(() => {
            headBlock.classList.remove('hide')
        }, 700)
    }
)
.then (setTimeout(() => {headBlock.style.marginTop = 15 + 'px'},720))
.then (setTimeout(() => {headBlock.style.marginTop = 14 + 'px'},740))
.then (setTimeout(() => {headBlock.style.marginTop = 13 + 'px'},760))
.then (setTimeout(() => {headBlock.style.marginTop = 12 + 'px'},780))
.then (setTimeout(() => {headBlock.style.marginTop = 11 + 'px'},800))
.then (setTimeout(() => {headBlock.style.marginTop = 10 + 'px'},820))
.then (setTimeout(() => {headBlock.style.marginTop = 9 + 'px'},840))
.then (setTimeout(() => {headBlock.style.marginTop = 8 + 'px'},860))
.then (setTimeout(() => {headBlock.style.marginTop = 7 + 'px'},880))
.then (setTimeout(() => {headBlock.style.marginTop = 6 + 'px'},900))
.then (setTimeout(() => {headBlock.style.marginTop = 5 + 'px'},920))
.then (setTimeout(() => {headBlock.style.marginTop = 4 + 'px'},940))
.then (setTimeout(() => {headBlock.style.marginTop = 3 + 'px'},960))
.then (setTimeout(() => {headBlock.style.marginTop = 2 + 'px'},980))
.then (setTimeout(() => {headBlock.style.marginTop = 1 + 'px'},1000))
.then (setTimeout(() => {headBlock.style.marginTop = 0 + 'px'},1020))

const welcomeView = new Promise (
    function showBox() {
        setTimeout(() => {
            welcomeBlock.classList.remove('hide')
        }, 1000)
    }
)
.then (setTimeout(() => {welcomeBlock.style.marginTop = -265 + 'px'
                        welcomeBlock.style.opacity = 0.55},1000))
.then (setTimeout(() => {welcomeBlock.style.marginTop = -264 + 'px'
                        welcomeBlock.style.opacity = 0.60},1020))
.then (setTimeout(() => {welcomeBlock.style.marginTop = -263 + 'px'
                        welcomeBlock.style.opacity = 0.65},1040))
.then (setTimeout(() => {welcomeBlock.style.marginTop = -262 + 'px'
                        welcomeBlock.style.opacity = 0.70},1060))
.then (setTimeout(() => {welcomeBlock.style.marginTop = -261 + 'px'
                        welcomeBlock.style.opacity = 0.75},1080))
.then (setTimeout(() => {welcomeBlock.style.marginTop = -260 + 'px'
                        welcomeBlock.style.opacity = 0.80},1100))
.then (setTimeout(() => {welcomeBlock.style.marginTop = -259 + 'px'
                        welcomeBlock.style.opacity = 0.85},1120))
.then (setTimeout(() => {welcomeBlock.style.marginTop = -258 + 'px'
                        welcomeBlock.style.opacity = 0.90},1140))
.then (setTimeout(() => {welcomeBlock.style.marginTop = -257 + 'px'
                        welcomeBlock.style.opacity = 0.95},1160))
.then (setTimeout(() => {welcomeBlock.style.marginTop = -256 + 'px'
                        welcomeBlock.style.opacity = 1.0},1180))
.then (setTimeout(() => {welcomeBlock.style.marginTop = -255 + 'px'},1200))
.then (setTimeout(() => {welcomeBlock.style.marginTop = -254 + 'px'},1220))
.then (setTimeout(() => {welcomeBlock.style.marginTop = -253 + 'px'},1240))
.then (setTimeout(() => {welcomeBlock.style.marginTop = -252 + 'px'},1260))
.then (setTimeout(() => {welcomeBlock.style.marginTop = -251 + 'px'},1280))
.then (setTimeout(() => {welcomeBlock.style.marginTop = -250 + 'px'},1300))

let moonshiner = document.querySelector('#moonshiner')
moonshiner.addEventListener('click', showMoonshinerBar)
let collector = document.querySelector('#collector')
collector.addEventListener('click', showCollectorBar)
let bountyHunter = document.querySelector('#bountyHunter')
bountyHunter.addEventListener('click', showBountyHunterBar)
let trader = document.querySelector('#trader')  
trader.addEventListener('click', showTraderBar)
let naturalist = document.querySelector('#naturalist')
naturalist.addEventListener('click', showNaturalistBar)

function showMoonshinerBar() {
    document.querySelector('#moonshinerBar').style.animationName = 'getRise'
    document.querySelector('#collectorBar').style.animationName = 'getGone'  
    document.querySelector('#bountyHunterBar').style.animationName = 'getGone'
    document.querySelector('#traderBar').style.animationName = 'getGone'
    document.querySelector('#naturalistBar').style.animationName = 'getGone'
}

function showCollectorBar() {
    document.querySelector('#collectorBar').style.animationName = 'getRise'
    document.querySelector('#moonshinerBar').style.animationName = 'getGone'
    document.querySelector('#bountyHunterBar').style.animationName = 'getGone'
    document.querySelector('#traderBar').style.animationName = 'getGone'
    document.querySelector('#naturalistBar').style.animationName = 'getGone'
}

function showBountyHunterBar() {
    document.querySelector('#bountyHunterBar').style.animationName = 'getRise'
    document.querySelector('#moonshinerBar').style.animationName = 'getGone'
    document.querySelector('#collectorBar').style.animationName = 'getGone'
    document.querySelector('#traderBar').style.animationName = 'getGone'
    document.querySelector('#naturalistBar').style.animationName = 'getGone'
}

function showTraderBar() {
    document.querySelector('#traderBar').style.animationName = 'getRise'
    document.querySelector('#moonshinerBar').style.animationName = 'getGone'
    document.querySelector('#collectorBar').style.animationName = 'getGone'
    document.querySelector('#bountyHunterBar').style.animationName = 'getGone'
    document.querySelector('#naturalistBar').style.animationName = 'getGone'
}

function showNaturalistBar() {
    document.querySelector('#naturalistBar').style.animationName = 'getRise'
    document.querySelector('#moonshinerBar').style.animationName = 'getGone'
    document.querySelector('#collectorBar').style.animationName = 'getGone'
    document.querySelector('#bountyHunterBar').style.animationName = 'getGone'
    document.querySelector('#traderBar').style.animationName = 'getGone'
}

let pveDescription = document.querySelector('#pveDescription')
let pvpDescription = document.querySelector('#pvpDescription')
pveDescription.addEventListener('mouseover', bigBoxPVE)
pveDescription.addEventListener('mouseout', smallBoxPVE)
pvpDescription.addEventListener('mouseover', bigBoxPVP)
pvpDescription.addEventListener('mouseout', smallBoxPVP)

function bigBoxPVE() {
    pveDescription.style.animationName = 'bigBox'
    pvpDescription.style.animationName = 'smallBox'
}

function smallBoxPVE() {
    pveDescription.style.animationName = 'backToNormalFromBig'
    pvpDescription.style.animationName = 'backToNormalFromSmall'
}

function bigBoxPVP() {
    pveDescription.style.animationName = 'smallBox'
    pvpDescription.style.animationName = 'bigBox'
}

function smallBoxPVP() {
    pveDescription.style.animationName = 'backToNormalFromSmall'
    pvpDescription.style.animationName = 'backToNormalFromBig'
}

document.querySelector('#findMe').addEventListener('mouseover', showCharacter)
function showCharacter() {document.querySelector('#myCharacter').classList.remove('hide')}
document.querySelector('#findMe').addEventListener('mouseout', closeCharacter)
function closeCharacter() {document.querySelector('#myCharacter').classList.add('hide')}