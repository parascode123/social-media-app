const menuItems=document.querySelectorAll(".menu-item");
const messagesNotification=document.querySelector("#message-notifications");
const messages=document.querySelector(".messages")
const message=messages.querySelectorAll(".message")
const messageSearch=document.querySelector("#message-search")
const theme=document.querySelector("#theme")
const thememodal=document.querySelector(".customize-theme")
const fontsizes=document.querySelectorAll(".choose-size span")
var root=document.querySelector(":root");
const colorPalette=document.querySelectorAll(".choose-color span")
const bg1=document.querySelector(".bg-1");
const bg2=document.querySelector(".bg-2");
const bg3=document.querySelector(".bg-3");




const changeActiveItem=()=>{
    menuItems.forEach(item=>{
        item.classList.remove("active");
    })
}

menuItems.forEach(item=>{
    item.addEventListener("click",()=>{
        changeActiveItem();
        item.classList.add("active") 
        if(item.id !="notifications") {
            document.querySelector(".notifications-popup").style.display="none";
        }else{
            document.querySelector(".notifications-popup").style.display="block";
            document.querySelector("#notifications .notification-count").style.display="none"
        }
    })
})

messagesNotification.addEventListener("click",()=>{
messages.style.boxShadow="0 0 1rem var(--color-primary)"
messagesNotification.querySelector(".notification-count").style.display="none"
setTimeout(()=>{
   messages.style.boxShadow="none"} ,2000
)
})

const searchmessage=()=>{
    const filter=messageSearch.value.toUpperCase();



    
message.forEach(chat=>{
    let name=chat.querySelector("h5").textContent.toUpperCase();
    if (name.indexOf(filter)>-1){
         chat.style.display="flex"
    }
    else{
       chat.style.display="none"
    }
})

}
messageSearch.addEventListener("keyup",searchmessage)



const openthememodal = ()=> {

    thememodal.style.display="grid";

}

const closemodal=(e)=>{
    if(e.target.classList.contains("customize-theme"))
   thememodal.style.display="none"
}



thememodal.addEventListener("click",closemodal);

theme.addEventListener("click",openthememodal);


const removeSizeSelector = () => {
    fontsizes.forEach(size => {
        size.classList.remove("active");
    })
}
fontsizes.forEach(size => {
  
    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontsize;
        size.classList.toggle("active");
if(size.classList.contains("font-size-1")){
fontsize="12px"
root.style.setProperty("--sticky-stop-left","5.4rem")
root.style.setProperty("--sticky-stop-right","5.4rem")
}
else if(size.classList.contains("font-size-2")){
fontsize="13px"
root.style.setProperty("--sticky-stop-left","5.4rem")
root.style.setProperty("--sticky-stop-right","-7rem")
}
else if(size.classList.contains("font-size-3")){
fontsize="14px"
root.style.setProperty("--sticky-stop-left","-2rem")
root.style.setProperty("--sticky-stop-right","-17rem")
}
else if(size.classList.contains("font-size-4")){
fontsize="15px"
root.style.setProperty("--sticky-stop-left","-5rem")
root.style.setProperty("--sticky-stop-right","-25rem")

}
else if(size.classList.contains("font-size-5")){
fontsize="16px"

root.style.setProperty("--sticky-stop-left","-10rem")
root.style.setProperty("--sticky-stop-right","-33rem")
}
document.querySelector("html").style.fontSize=fontsize;
})

    })

    const removeColorActive =()=>{
colorPalette.forEach(color=>{
    color.classList.remove("active")
})
    }

    colorPalette.forEach(color=>{


        color.addEventListener("click",() => {
            removeColorActive();
            let primaryhue;
            color.classList.toggle("active")
       if (color.classList.contains("color-1")){
        primaryhue=252;
       }
       else if(color.classList.contains("color-2")){
        primaryhue=52;
       }
       else if(color.classList.contains("color-3")){
        primaryhue=352;
       }
       else if(color.classList.contains("color-4")){
        primaryhue=152;
       }
       else if(color.classList.contains("color-5")){
        primaryhue=202;
       }
       root.style.setProperty("--primary-color-hue",primaryhue)
        })
    })

    let lightcolorlightness;
    let whitecolorlightness;
    let darkcolorlightness;

    const changeBG=()=>{
        root.style.setProperty("--white-color-lightness",whitecolorlightness);
        root.style.setProperty("--dark-color-lightness",darkcolorlightness);
        root.style.setProperty("--light-color-lightness",lightcolorlightness);
    }
    bg1.addEventListener("click",()=>{
    
        bg2.classList.remove("active")
        bg1.classList.add("active")
        bg3.classList.remove("active")
     window.location.reload();})
    bg3.addEventListener("click",()=>{
        lightcolorlightness="15%";
        whitecolorlightness="20%";
        darkcolorlightness="95%";
        bg2.classList.remove("active")
        bg1.classList.remove("active")
        bg3.classList.add("active")
        changeBG();
    })
    bg2.addEventListener("click",()=>{
        lightcolorlightness="0%";
        whitecolorlightness="10%";
        darkcolorlightness="95%";
        bg2.classList.add("active")
        bg1.classList.remove("active")
        bg3.classList.remove("active")
        changeBG();
    })