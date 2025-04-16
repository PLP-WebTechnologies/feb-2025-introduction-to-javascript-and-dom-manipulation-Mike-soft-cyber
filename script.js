const review = document.querySelector('.review');
const paragraph = document.querySelector('h3');
const container = document.querySelector('.container');

review.addEventListener('click', () => {
    paragraph.textContent = "BOOK COLLECTION";
    paragraph.classList.add('font-size');
    container.innerHTML = `
    <div class ="books">
    <img src = "https://miro.medium.com/v2/resize:fit:720/format:webp/1*bnFw4veQYr0H8puJg1KX4Q.jpeg">
    <img src="https://coffeebookshelves.com/wp-content/uploads/2021/08/black-boy-teen-books2.jpg?w=840">
    <img src ="https://cor-cdn-static.bibliocommons.com/list_jacket_covers/live/1555808904.png">
    </div>
    `;
})