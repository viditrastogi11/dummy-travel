import '../styles/styles.css'
import MobileMenu from './module/MobileMenu'
import StickyHeader from './module/StickyHeader'
import RevealOnScroll from './module/RevealOnScroll'

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
new MobileMenu();
new StickyHeader();
let modal;

document.querySelectorAll(".open-modal").forEach(el=>{
    el.addEventListener('click',e=>{
        e.preventDefault()
        if(typeof modal=="undefined"){
            import('./module/Modal').then((x)=>{
                modal = new x.default()
                setTimeout(()=>modal.openModal(),20)
            }).catch(()=>{
                console.log('error')
            })
        } 
        else{
            modal.openModal();
        }
    })
})


if(module.hot){
    module.hot.accept()
}