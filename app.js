
// add to cart
let productsCountEl = document.getElementById("products-count");

let addToCartButtons = document.querySelectorAll(".button");

for ( let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click",function() {
        // let prevProductCount = +productsCountEl.textContent;
        // productsCountEl.textContent = prevProductCount + 1;
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}





// // // modal

let modal = document.querySelector(".modal");
let moreDetailsButtons = document.querySelectorAll(".moreDetails");
let closeBtn = document.querySelector(".btn-close");

moreDetailsButtons.forEach (item => {
    item.addEventListener("click",openModal)}
)
function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}
function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}
closeBtn.addEventListener("click",closeModal)

modal.addEventListener("click",function(e) {
    if(e.target === modal) {
        closeModal()
    }
})

// Show modal by scroll

function showModalByScroll () {
    if(window.pageYOffset > document.documentElement.scrollHeight/2) {
        openModal()
        window.removeEventListener("scroll",showModalByScroll)
    }
}

window.addEventListener("scroll",showModalByScroll)

// like

let userTouchLike = document.querySelectorAll(".like");
 
userTouchLike.forEach(like => {
    like.addEventListener("click",function() {
        // if (like.classList.contains("userTouch")) {
        //     like.classList.remove("userTouch")
        // } else {
        //     like.classList.add("userTouch")
        // }

        like.classList.toggle("userTouch")
    })
});


// counter

let decrementButton = document.querySelectorAll(".decrement-button");
let incrementButton = document.querySelectorAll(".increment-button");
let quantityValue = document.querySelectorAll(".product-quanity input");

function Counter (incrementButton,decrementButton,inputField,minCount = 1,maxCount = 10) {
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField,
    }

        this.toggleButtonState = function() {
            const count = this.domRefs.inputField.value;
            this.domRefs.decrementButton.disabled = count <= minCount;
            this.domRefs.incrementButton.disabled = count >= maxCount;
        }

        this.toggleButtonState();

        this.increment = function() {
            this.domRefs.inputField.value = +this.domRefs.inputField.value  + 1;
            this.toggleButtonState();
        }
        this.decrement = function() {
            this.domRefs.inputField.value = +this.domRefs.inputField.value  - 1;
            this.toggleButtonState();
        }

        this.domRefs.incrementButton.addEventListener("click",this.increment.bind(this));
        this.domRefs.decrementButton.addEventListener("click",this.decrement.bind(this));
}   

// slick slider

$('.slider-block').slick({
    // autoplay:true,
    dots:true
});


// let everyCounter = document.querySelectorAll(".every");

// for (let i = 0; i < everyCounter.length; i++) {
//     everyCounter[i].addEventListener("click",Counter)
    
// }

// let productsCountEl = document.getElementById("products-count");

// let addToCartButtons = document.querySelectorAll(".button");

// for ( let i = 0; i < addToCartButtons.length; i++) {
//     addToCartButtons[i].addEventListener("click",function() {
//         // let prevProductCount = +productsCountEl.textContent;
//         // productsCountEl.textContent = prevProductCount + 1;
//         productsCountEl.textContent = +productsCountEl.textContent + 1;
//     })
// }


// let counter1 = new Counter(incrementButton,decrementButton,quantityValue)









   
