import './styles.scss';

// eslint-disable-next-line import/extensions
import { vaccins } from './src/data.js';

const app = document.getElementById('app');

function render() {
  const titreSite = '<div class="titre1"><h1>/// Les vaccins du Paradise Pre Order ///</h1></div>';

  // partie header
  let top = '<header  class="containerTop">';
  top += `
            <div class="boutons"><button class="btn-prix">Classer par prix</button>
            <button class="btn-non">Vaccin Non Approuvé</button>
            <button class="btn-tous">Tous les vaccins</button>
            </div>
        
        `;

  top += '</header>';

  // partie main
  let imageVaccin = '<main id="preorder" class="containerMiddle">';

  for (let i = 0; i < vaccins.length; i++) {
    imageVaccin += `
    <div class="card" id="${i}" >
    <h2 class="card-text">Vaccin: ${vaccins[i].nom}</h2>
         <img src="images/${vaccins[i].image}" class="card-img-top" alt="ImageVaccin">
            <div class="card-body">
                <p class="card-text"><u>Inventeur(s)</u>: ${vaccins[i].inventeurs}</p>
                <p class="card-text"><u>Lieux de production</u>: ${vaccins[i].lieux_de_production}</p>
                <p class="card-text"><u>Technologie</u>: ${vaccins[i].technologie}</p>
                <p class="card-text"><u>Quantité</u>: ${vaccins[i].quantite}</p>
                <p class="card-text"><u>Prix unitaire</u>: ${vaccins[i].prix_unitaire} dollards</p>
                <p class="card-text"><u>Approuvé</u>: ${vaccins[i].approuve ? 'Oui' : 'Non'}</p>
                <div class="containerQuantite">
                <div class="souscontainerQuantite">
                <form name="fomulaire">Quantité
                    <input type="text"id="${i} id="quantite" name="input" value="0" minlength="1" maxlength="10" size="8">
                    <button  class="btn-reserver">Réserver</button>                    
                </form> 
                </div>
                </div>
            </div>
    </div>
    `;
  }
  imageVaccin += '</main>';

  // partie footer
  let down = '<footer class="containerDown">';
  down += `
            <div class="souscontainer">
            <div class="card-body">
            <h3 class="titreCommande">Récapitulatif de la Commande: </h3>
            <button class="btn-commande">Passer la commande</button>
            </div>
            </div>
        `;
  down += '</footer>';

  app.innerHTML = titreSite + top + imageVaccin + down;
}
render();

// Fonction Popup sur le bouton commande

function popUpCommande() {
  // délégation d'évenement : on click sur les img de films = affiche popUp d'infos
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('.btn-commande')) {
      // console.log(e.target)
      let popUpcommande = '';
      popUpcommande += `
            <div class="fondPopUp">
            <div id="popUpInfos" class="popUp">
            <div id="un"><i class="far fa-times-circle" ></i></div>
              <p class="en-cours"> *** Votre commande est en cours *** </p>
             
              </div>
            </div> `;

      app.innerHTML += popUpcommande;
      // console.log(popUpInfosFilm);
    } else if (e.target.matches('.far')) {
      const popupInfoToRemove = document.querySelector('.fondPopUp');
      popupInfoToRemove.remove();
    }
  });
}

popUpCommande();

// Vaccin non approuvé
document.body.addEventListener('click', (ele) => {
  if (ele.target.matches('.btn-non')) {
    const nonApprouve = app.querySelectorAll('.card');
    // console.log(nonApprouve);
    for (let i = 0; i < vaccins.length; i++) {
      if (vaccins[i].approuve === false) {
        console.log(vaccins[i].approuve);
        nonApprouve[i].style.display = 'none';
      }
    }
  }
});

// Tous les vaccins

document.body.addEventListener('click', (ele) => {
  if (ele.target.matches('.btn-tous')) {
    const nonApprouve = app.querySelectorAll('.card');
    // console.log(nonApprouve);
    for (let i = 0; i < vaccins.length; i++) {
      if (vaccins[i].approuve === false) {
        console.log(vaccins[i].approuve);
        nonApprouve[i].style.display = 'block';
      }
    }
  }
});
