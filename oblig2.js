let resourceHTML = ''; // Use let instead of const

console.log(resourceHTML);

resources.map(resource => resourceHTML += `<article>
<img src="website_images/PROD_${resource.imagefile}" alt="${resource.title}" />
<a href="#">${resource.category}</a>
<h3>${resource.title}</h3>
</article>`);


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM er lastet.");

    // Koble til klikkhendelse for hver knapp
    const buttons = document.querySelectorAll('button');
    console.log("Antall knapper: " + buttons.length);

    buttons.forEach(button => {
        console.log("Legger til hendelseslytter for knapp: " + button.textContent);
        button.addEventListener('click', function (event) {
            const category = event.target.textContent;
            console.log("Klikket på knapp: " + category);
            handleButtonClick(category);
        });
    });
});

function handleButtonClick(category) {
    console.log("HandleButtonClick kalt for kategori: " + category);

    const allCategories = document.querySelectorAll('.category-content');
    allCategories.forEach(categoryElement => {
        categoryElement.style.display = 'none';
    });

    const selectedCategory = document.getElementById(category);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
}
