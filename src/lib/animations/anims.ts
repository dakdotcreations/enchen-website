import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";


gsap.registerPlugin(ScrollTrigger, SplitText);


export function observeText(start: string = 'top 80%', end: string = 'top 20%', scrub: boolean = true) {
    const split_types = document.querySelectorAll('.reveal-type') as NodeList

    split_types.forEach((char: any) => {
        const text = new SplitText(char, { type: 'chars,words' })

        gsap.from(text.words, {
            scrollTrigger: {
                trigger: char,
                start: start,
                end: end,
                scrub: scrub,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: 0.01,
            scaleY: 0,
            y: 10,
            transformOrigin: 'bottom',
            stagger: 0.1,
            ease: "power1.out"
        })
    })
}

export function slideIn(
    parent: HTMLElement,
    { top = 200, start = 'top 80%', end = 'top 20%', markers = false } = {}
) {
    const sliders = parent.querySelectorAll('.slide-in') as NodeListOf<HTMLElement>

    gsap.from(sliders, {
        scrollTrigger: {
            trigger: parent,
            toggleActions: 'play play reverse reverse',
            start,
            end,
            scrub: 1,
            markers,
        },
        opacity: 0,
        top,
        duration: 1,
        stagger: 0.5,
        ease: "power1.out"
    })
}

export function fadeIn() {
    const faders = document.querySelectorAll('.fade-in') as NodeListOf<HTMLElement>

    faders.forEach((fader: HTMLElement) => {
        gsap.from(fader, {
            scrollTrigger: {
                trigger: fader,
                toggleActions: 'play play reverse reverse',
                start: 'top 80%',
                end: 'top center',
                scrub: true,
                markers: false
            },
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            ease: "power1.out"
        })
    })
}