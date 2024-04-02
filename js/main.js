window.onload = function() {
    //gnb
    const menuOpen = document.querySelector('.menuOpen');
    const menuBox = document.querySelector('.menuBox');
    
    menuOpen.addEventListener('click', () => {
        menuBox.classList.toggle('on');
    })

    //스크롤 트리거 등록
    gsap.registerPlugin(ScrollTrigger);

    //1.main
    gsap.timeline({
        scrollTrigger: {
            trigger: '.main',
            start: '100% 100%',
            end: '100% 0%',
            scrub: 1,
            //markers: 1,
        }
    })
    .to('.logoWrap #q', {x:-150, y:250, rotate:20, ease: 'none', duration: 5}, 0)
    .to('.logoWrap #u', {x:-30, y:150, rotate:-10, ease: 'none', duration: 5}, 0)
    .to('.logoWrap #d', {x:0, y:400, rotate:-20, ease: 'none', duration: 5}, 0)
    .to('.logoWrap #e', {x:150, y:250, rotate:20, ease: 'none', duration: 5}, 0)

    //2..mainTextBox .title
    gsap.utils.toArray('.mainTextBox .title i').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '100% 100%',
                end: '100% 100%',
                scrub: 1,
                //markers: true
            }
        })
        .fromTo(selector, {overflow: 'hidden', y: 150}, {y: 0, ease: 'none', duration: 5}, 0)
    })

    //3. subText p
    gsap.utils.toArray('.subText p').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '100% 100%',
                end: '100% 100%',
                scrub: 1,
                //markers: true
            }
        })
        .fromTo(selector, {opacity: 0, y: 100}, {opacity:1, y:0, ease: 0, duration: 5}, 0)
    })

    //4. textAni change
    let textAniList = document.querySelectorAll('.con1 .textAni li');
    let textAni = gsap.timeline({repeat: -1});

    for( i = 0; i < textAniList.length; i++) {
        textAni.to(textAniList[i], 0.8, {opacity: 1, repeat: 1, dalay: 0, x: 0, yoyo: true, ease: "power4.out"})
    }
    textAni.play();

    //5. con4 listBox animation
    gsap.utils.toArray('.con4 .listBox .box').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '0 20%',
                end: '0% 0%',
                scrub: 1,
                //markers: true
            }
        })
        .to(selector, {transform: 'rotateX(-10deg) scale(0.9)', transformOrigin: 'top', filter: 'brightness(0.3)'}, 0)
    })

    //6. con3 card animation
    gsap.utils.toArray('.con3 .listBox li').forEach((selector, t) => {
        ScrollTrigger.create({
            trigger: selector,
            start: '30% 50%',
            onEnter: () => {
                gsap.set(selector, {
                    rotationX: '-65deg',
                    z: '-500px',
                    opacity: 0
                }),
                gsap.to(selector, {
                    rotationX: 0,
                    z: 0,
                    opacity: 1,
                    delay: t % 3 * .05
                })
            }
        })
    })

    //7. con5 listBox hover
    let listBox = document.querySelectorAll('.con5 .listBox li');
    let imgBox = document.querySelector('.con5 .imgBox');
    let img = document.querySelector('.con5 .imgBox img');

    for( let i = 0; i < listBox.length; i++) {
        listBox[i].addEventListener('mouseover', () => {
            img.src = `images/img${i}.jpg`;
            gsap.set(imgBox, {scale: 0, opacity: 0, duration: .3}),
            gsap.to(imgBox, {scale:1, opacity: 1, duration: .3})
        })
        listBox[i].addEventListener('mousemove', (e) => {
            let imgBoxX = e.pageX + 20;
            let imgBoxY = e.pageY - 20;
            imgBox.style.left = `${imgBoxX}px`;
            imgBox.style.top = `${imgBoxY}px`;
        })
        listBox[i].addEventListener('mouseout',() => {
            gsap.to(imgBox, {scale:0, opacity:0, duration: .3})
        })
    }

    gsap.timeline({
        scrollTrigger: {
            trigger: '.con5',
            start: '0% 100%',
            end: '100% 0%',
            toggleClass: {target:'.wrap', className: 'on'}
        }
    })

    //8.footer .logoWrap 
    gsap.timeline({
        scrollTrigger: {
            trigger: 'footer',
            start: '0% 100%',
            end: '100% 0%',
            scrub: 1,
            //markers: true
        }
    })
    .to('.logoWrap', { top: '20%', ease: 'none', duration: 5}, 0)
}