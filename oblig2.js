let resourceHTML = "";

// Dette er da en funksjon for å da oppdatere innholdet basert på kategori
function updateContent(category) {
    const resourceContent = document.getElementById("resourceContent");

    const selectedResource = resources.find(resource => resource.category === category);

    //Bruke li tag for å få punkliste i urlene
    if (selectedResource) {
        const titleURL = selectedResource.sources.map(source => `
            <li><a href="${source.url}" target="_blank">${source.title}</a></li>
        `).join('');

        resourceContent.innerHTML = `
            <h2>${selectedResource.category}</h2>
            <p>${selectedResource.text}</p>
            ${titleURL}
        `;
    }
}


// Vi generer HTML for ressurslisten
resources.forEach((resource) => {
    resourceHTML += `
        <li><a href="#"><button onclick="buttonClick('${resource.category}')">${resource.category}</button></a></li>
    `;
});


// Sette HTML for ressurslisten
const resourceList = document.getElementById("resourceList");
resourceList.innerHTML = resourceHTML;


// Lager en funksjon for knappetrykk
function buttonClick(category) {
    console.log( `Button clicked for category: ${category}`);
    updateContent(category);
}


// Her skal den vise innholdet for første kategori som standard, altså den html.
if (resources.length > 0) {
    updateContent(resources[0].category);
}


