let resourceHTML = "";

// Funksjon for å oppdatere innholdet basert på kategori
function updateContent(category) {
    const resourceContent = document.getElementById("resourceContent");
    const selectedResource = resources.find(resource => resource.category === category);

    if (selectedResource) {
        const titleURL = selectedResource.sources.map(source => `
            <p><a href="${source.url}" target="_blank">${source.title}</a></p>
        `).join('');

        resourceContent.innerHTML = `
            <h2>${selectedResource.category}</h2>
            <p>${selectedResource.text}</p>
            ${titleURL}
        `;
    }
}

// Funksjon for knappetrykk
function buttonClick(category) {
    console.log( `Button clicked for category: ${category}`);
    updateContent(category);
}


// Generer HTML for ressurslisten
resources.forEach((resource) => {
    resourceHTML += `
        <li><a href="#"><button onclick="buttonClick('${resource.category}')">${resource.category}</button></a></li>
    `;
});

// Sett HTML for ressurslisten
const resourceList = document.getElementById("resourceList");
resourceList.innerHTML = resourceHTML;

// Vis innholdet for første kategori som standard
if (resources.length > 0) {
    updateContent(resources[0].category);
}
