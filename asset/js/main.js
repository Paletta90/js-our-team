// Variabile del div container
let container = document.getElementById("container");
//Variabile per le card
let containerCard = document.getElementById("containerCard");

// Array di oggetti contenete i vari membri del team
let listMembers = [{
        'Nome': 'Wayne Barrett',
        'Ruolo': 'Founders & CO',
        'Immagine': 'new-team-member-04.jpg'

    },
    {
        'Nome': 'Angela Caroll',
        'Ruolo': 'Chief Editor',
        'Immagine': 'angela-caroll-chief-editor.jpg'

    },
    {
        'Nome': 'Barbara Ramos',
        'Ruolo': 'Graphic Designer',
        'Immagine': 'barbara-ramos-graphic-designer.jpg'

    },
    {
        'Nome': 'Scott Estrada',
        'Ruolo': 'Developer',
        'Immagine': 'scott-estrada-developer.jpg'

    },
    {
        'Nome': 'Walter Gordon',
        'Ruolo': 'Office Manager',
        'Immagine': 'walter-gordon-office-manager.jpg'

    },
    {
        'Nome': 'Angela Lopez',
        'Ruolo': 'Social Media',
        'Immagine': 'angela-lopez-social-media-manager.jpg'

    }
];

// Stampo tutti i rispettivi dati dei vari oggetti contenuti nell'array di oggetti
for (let i = 0; i < listMembers.length; i++) {

    for (let key in listMembers[i]) {

        console.log(`${key}: ${listMembers[i][key]}`)

    }

}

// Stampo i vari dati dei mebri a video
for (let i = 0; i < listMembers.length; i++) {

    // Creo un div per ogni membro del team
    let containerMembers = document.createElement('div');
    containerMembers.innerHTML += `<h4>Membro numero ${i}:</h4>`
    for (let key in listMembers[i]) {

        // In ogni div stampo i dati del mebro del team
        containerMembers.innerHTML += `<p>- ${key}: ${listMembers[i][key]}</p>`

        // Appendo il div al div container
        container.appendChild(containerMembers);

    }

}

// Stampo a video le relative card
for (let i = 0; i < listMembers.length; i++) {

    containerCard.innerHTML += `
        
            <div class="col">
                <div class="card h-100 text-center">
                    <img src="./asset/img/${listMembers[i].Immagine}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${listMembers[i].Nome}</h4>
                        <p class="card-text">${listMembers[i].Ruolo}</p>
                    </div>
                </div>
            </div>`

}