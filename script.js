
var navLinks = document.getElementById("navLinks")

function showMenu(){
    navLinks.style.right ="0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}
const navLinksItems = navLinks.querySelectorAll('a'); 
    navLinksItems.forEach(link => {
        link.addEventListener('click', hideMenu); 
    });
    

    const productItems = document.querySelectorAll('.product-item');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('closeModal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    
  
    productItems.forEach(item => {
        item.addEventListener('click', function() {
            const productInfo = this.getAttribute('data-info').split(', ');
    
            modalImage.src = this.querySelector('img').src; 
            modalTitle.textContent = this.querySelector('p').textContent;
            modalDescription.textContent = productInfo[0]; 
            modalPrice.textContent = productInfo[1]; 
    
            modalOverlay.style.display = 'flex'; 
        });
    });
    
    closeModal.addEventListener('click', () => {
        modalOverlay.style.display = 'none'; 
    });
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.style.display = 'none'; 
        }
    });


    document.addEventListener('DOMContentLoaded', () => {
        const modalOverlay = document.getElementById('modalOverlay');
        const closeModal = document.getElementById('closeModal');
        const mobileCloseModal = document.getElementById('mobileCloseModal');

        function closeOverlay() {
            modalOverlay.style.display = 'none';
        }
 
        closeModal.addEventListener('click', closeOverlay);
  
        mobileCloseModal.addEventListener('click', closeOverlay);
 
        window.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeOverlay();
            }
        });
    });
    
    
window.onscroll = function() {
    var navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};


