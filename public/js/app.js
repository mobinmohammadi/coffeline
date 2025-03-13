import { nameHomePages } from '../js/utils/index.js'
import { getMe, meNod  } from './utils/me.js'
import { showSwal } from './utils/utils.js'



window.addEventListener("load" , () => {
    getMe(),
    meNod()
})


let menuOpenBtn = document.querySelector("#menu-click ")
let layer = document.querySelector("#layer")

let submenuSub = document.querySelector("#submenu-sub svg")
let menuMobile = document.querySelector("#menu-mobile")

let submenuSubOpen = document.querySelector(".submenu-sub__open")
let submenuSubOpenActive = document.querySelector(".submenu-sub__open-active")


let saveIcon = document.querySelectorAll("#save-icon")
let saveNotIcon = document.querySelectorAll("#save-not-icon")
let showResultSave = document.querySelector(".show-result__save")


let openUserBasketBtn = document.querySelector("#open-user__basket")
let boxBasket = document.querySelector("#box-basket")
let layerBasket = document.querySelector("#layer-basket")

let wrapperBoxModalUser = document.querySelector("#box-modal__user")
let openUsermodal = document.querySelector("#open-user__modal")


let closeMenu = document.querySelector("#close-menu")

menuOpenBtn.addEventListener("click" , () => {
        layer.style.transition = 'all 0.5 ease-in-out'
        layer.classList.add("active-layer")
        menuMobile.style.right = "0"
        menuMobile.style.transition = 'all 0.5s ease'

})

layer.addEventListener("click" , () => {
    layer.style.transition = 'all 0.5s ease-in-out'
    layer.classList.remove("active-layer")
    menuMobile.style.right = "-320px"
    menuMobile.style.transition = 'all 0.5s ease'
    boxBasket.style.left = "-20rem"
    wrapperBoxModalUser.classList.remove("active-modal__user")
    openUsermodal.classList.remove("z-index__custom")
    wrapperBoxModalUser.classList.add("hidden")




})

submenuSub.addEventListener("click" , () => {
    submenuSub.classList.toggle("rotate-svg")
    submenuSubOpen.classList.toggle("submenu-sub__open-active")
})

closeMenu.addEventListener("click" , () => {
    menuMobile.style.right = "-320px"
    menuMobile.style.transition = 'all 0.5s ease'
    layer.classList.remove("active-layer")
    boxBasket.style.left = "-20rem"



})


// saveNotIcon.addEventListener("click" , () => {
//     saveIcons()
// })

let saveIcons = () => {
    saveIcon.classList.remove("hidden")
    saveNotIcon.classList.add("hidden")
    showResultSave.style.right = "18px"
    showResultSave.textContent = "عملیات ذخیره لغو شد"
    setTimeout(() => {
        showResultSave.style.right = "30px"

    }, 2000);

    setTimeout(() => {
        showResultSave.style.right = ""
        showResultSave.style.transition = "all 0.3s ease"

    }, 2500);
    
    
}

openUserBasketBtn.addEventListener("click" , () => {
    boxBasket.style.left = "0rem"
    layer.classList.add("active-layer")
    boxBasket.style.transition = "all 0.5s ease"
    layer.style.transition = 'all 0.5s ease-in-out'

    
})

const signOutHandler = (e) =>{
    const signOutBtn = document.querySelector(".sign-out")
    signOutBtn.addEventListener("click" , () => {
        showSwal("آیا میخواهید از حساب کاربری خود خارج شوید؟!",
            "warning",
            ["خیر" ,"بله"],
            (res) => {
                if(res) {
                    showSwal("با موفقیت از حساب خود خارج شدید",
                        "success",
                        "ممنونم",
                        () => {
                            localStorage.removeItem("name")
                            location.reload()
                        }
                    )
                }
            }
        )
        
    })
    
    
}

window.addEventListener("load" , () => {
    nameHomePages()
    signOutHandler()
})




const activePanel = () => {
    openUsermodal.addEventListener("click" , () => {
        wrapperBoxModalUser.classList.remove("hidden")
        wrapperBoxModalUser.classList.remove("opacity-0")
        wrapperBoxModalUser.classList.add("active-modal__user")
        wrapperBoxModalUser.style.transition = 'all 10s ease-in-out'
        openUsermodal.classList.add("z-index__custom")
        layer.style.transition = 'all .3s ease-in-out'
        layer.classList.add("active-layer")
        
    })

}



export { activePanel  }




