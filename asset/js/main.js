let listMembers = [
    {
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
for(let i = 0; i < listMembers.length; i++){

    for(let key in listMembers[i]){

        console.log(`${key}: ${listMembers[i][key]}`)

    }

}