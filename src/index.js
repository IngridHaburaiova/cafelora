import './index.html';
import './style.css';
import './Layer/index.js';
import './Layer/style.css';
import './Drink/index.js';

console.log('funguju!');

//3.1 V JavaScriptu vyberte ze stránky ikonku #nav-btn. Připojte k ní posluchač události click. Tento posluchač odebere nebo přidá třídu nav-closed na prvku nav. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.

document.getElementById("nav-btn").addEventListener('click', () => {
  document.getElementById("navId").classList.toggle("nav-closed");
});

//3.2 Připojte posluchač události také na všechny položky navigace. Zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala. Zde se vám jistě bude hodit metoda querySelectorAll.

  const pole = document.querySelectorAll("a");
  for (let i = 0; i < pole.length; i++) {
    pole[i].addEventListener('click', () => {
      document.getElementById("navId").classList.toggle("nav-closed");
    });
  }

  //4.1 Na tlačíko .order-btn pověste posluchač, který při kliknutí přidá na prvek .drink__cup třídu .drink__cup--selected. Zároveň změní nápis na tlačítku na Zrušit.

/*document.querySelector(".order-btn").addEventListener('click', () => {
  document.querySelector(".drink__cup").classList.add(".drink__cup--selected");
  document.querySelector(".order-btn").textContent="Zrušit"
});
*/

//4.2 Při opětovném kliknutí na tlačítko chceme zařídit, aby se objednávka zrušila a nápis na tlačítku se vrátil zpět na Objednat. Tohoto můžete docílit například tak, že si vytvoříte globální proměnnou ordered, která bude obsahovat true nebo false podle toho, zde je nápoj objednaný či nikoliv.


let ordered=false;

const zmena = () => {
  document.querySelector(".drink__cup").classList.toggle("drink__cup--selected");
  if (ordered===true) {
    document.querySelector(".order-btn").textContent="Zrušit";
    ordered = false; 
  } else {
    document.querySelector(".order-btn").textContent="Objednat";
    ordered = true;
  }
};

document.querySelector(".order-btn").addEventListener('click', zmena);

//6.1 Uvnitř hlavního index.js si vytvořte následujicí globální proměnnou.

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

//6.2 Použijte cyklus for nebo forEach, projděte seznam ingrediencí položku po položce a pomocí komponenty Layer je zobrazte každou ingredienci na stránce.

/*
layers.forEach((color,label)=> {
  console.log (layers.Laye);
});*/


