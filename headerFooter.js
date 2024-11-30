
class specialHeader extends HTMLElement{

    connectedCallback(){
        this.innerHTML=`  <nav class="re_nav">
        <ul class="re_sidebar">
            <li class="re_xmark_icon"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="48px" fill="#5f6368"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></li>
           <li><a href="index.html"> Home </a> </li>
           <li><a  href="contact.html#about"> About us</a> </li>
            <li><a href="contact.html">Contact Us</a></li>
     
        </ul>
        <ul class="re_sidebarone">
            <li><a id="brandname" href="">Vicilla</a></li>
               <li class="re_removable"><a href="index.html"> Home </a> </li>
           <li class="re_removable"><a  href="contact.html#about"> About us </a> </li>
            <li class="re_removable"><button id="contact_btn"><a href="contact.html">Contact Us</a></button></li>
          
            <li class="re_menu_icon"><i class="fa-solid fa-bars fa-2xl" style="color: #ffffff;"></i></li>
        </ul>
    </nav>`
    }
}






class specialFooter extends HTMLElement{

    connectedCallback(){
        this.innerHTML=`    <section id="footer">

        <div id="footer-part-one">
         
            <div id="footer-first-box" class="footer-divs">
                <h1 id="footer-brand-name" >Vicilla</h1>
                <h3>Your Personal Shopping Assistant
                Curating the Best of Amazon</h3>
            </div>
            <div id="footer-second-box" class="footer-divs">
                <a href="contact.html#about">About us</a>
                <a href="contact.html">Contact</a>
                
                <a href="contact.html#terms">Terms and condition</a>
            </div>
      
        
            <div id="footer-fourth-box" class="footer-divs">
                <div> <h3>Social media</h3></div>
               <div id="footer-social-media-icons">  <a href=""> <i class="fa-brands fa-instagram"></i></a>
                <a href=""> <i class="fa-brands fa-square-facebook"></i></a>
               
                 <a href=""><i class="fa-brands fa-youtube"></i></a></div>
              
                
            </div>
    
        </div>
    
        <div id="footer-part-two">
     <h6>Copyright © 2024 Vicilla.<br>
        All Rights Reserved.</h6>
        </div>
       
    </section>`
    }
}

customElements.define("special-header",specialHeader)
customElements.define("special-footer",specialFooter)

let re_menu_icon=document.querySelector(".re_menu_icon")
let re_xmark_icon=document.querySelector(".re_xmark_icon")
let re_sidebar=document.querySelector(".re_sidebar")

re_menu_icon.addEventListener("click",()=>{
   
  re_sidebar.classList.add("re_show_sidebar")
})

re_xmark_icon.addEventListener("click",()=>{
   
    // re_sidebar.style.transform="translateX(20rem)"
    re_sidebar.classList.remove("re_show_sidebar")
})

document.addEventListener("click", (e) => {
    if (!re_sidebar.contains(e.target) && !re_menu_icon.contains(e.target)) {
        re_sidebar.classList.remove("re_show_sidebar");
    }
});

