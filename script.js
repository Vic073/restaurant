function setActive(element) {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => link.classList.remove("active"));
    element.classList.add("active");

}

function toggleMenu() {
    const navMenu = document.querySelector("nav ul");
    navMenu.classList.toggle("active");

}

function openModal(imgSrc, imgAlt) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImage.src = imgSrc;
    captionText.innerHTML = imgAlt;

}


function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
