const $container = document.getElementById("container");

const URL_API = "https://rickandmortyapi.com/api/character";


fetch(URL_API)
    .then((res) => res.json())
    .then((data) => {
        const characters = data.results;

        for (let character of characters) {
            console.log(character.name);
            $container.innerHTML +=
                ` 
              <div class= "card-description"> 
                  <img class = "img-character" src= "${character.image}" alt= "Imagen de ${character.name}"> 
                  <ul>
                     <li> Name: ${character.name}</li> 
                     <li> Species: ${character.species}</li> 
                     <li> Status: ${character.status}</li> 
                     <li> Location: ${character.location.name}</li> 
                  </ul>
                     
             </div>      
        `;
        
        };

    });
