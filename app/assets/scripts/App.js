import '../styles/styles.css'
import MobileMenu from './module/MobileMenu'
import StickyHeader from './module/StickyHeader'
import RevealOnScroll from './module/RevealOnScroll'

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
let c=new MobileMenu();
let d= new StickyHeader();
if(module.hot){
    module.hot.accept()
}