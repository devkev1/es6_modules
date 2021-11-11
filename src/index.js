import WishList from "./wishlist";

const removeBtn = document.getElementsByClassName("removeBtn")[0];

const form = document.getElementById("submitForm");

let wishList = new WishList();
form.addEventListener("submit", (e) => {
    e.preventDefault();
    wishList.add();
})

removeBtn.addEventListener("click", (e) => {
    wishList.remove(e.target.id);
})
