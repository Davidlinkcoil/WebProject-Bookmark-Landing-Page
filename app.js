// Item Carusale in the Features Section 
const featuresLiItems = document.querySelectorAll(".features ul li");
for (item of featuresLiItems){
    item.addEventListener('click',(e)=>{
        if (e.target.classList[0]=="orange-hover"){
            // Orange underline switch when clicked
            let oldOrange = document.querySelector('.features ul li.orange_underline');
            oldOrange.classList.replace('orange_underline','orange-hover');
            e.target.classList.replace('orange-hover','orange_underline'); 
            // Rotate the Carusle to the correct head line
            let showItem = document.querySelector(".features article.show_item");
            showItem.classList.replace('show_item','hide_item');
            let itemTitle = (e.target.innerHTML).split(" ").join('__').toLowerCase();
            let activeItem = document.querySelector(`.${itemTitle}`);
            activeItem.classList.replace('hide_item', 'show_item'); 
        }
    })
}
// FAQ section show\hide answers 
const faqAnswer = document.querySelectorAll(".faq div>img");
for (item of faqAnswer){
    item.addEventListener('click',(e)=>{
        e.target.nextElementSibling.classList.toggle("answer-show");
        e.target.classList.toggle('img-rev')
        // console.log(e.target.nextElementSibling.classList);
    })
}
