import './index.html';
import './style.css';

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


let ordered=true;
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


 // 5.1 Vytvořte komponentu Layer, která očekává props v následujícím tvaru.
 // {
//    color: '#feeeca',
//    label: 'mléčná pěna',
//  }
 // Komponenta nechť vrací řetězec obsahující výsledné HTML.

 const Layer = (props)=> {
  let result='';
  for (let i = 0; i < props.length; i ++) {
    result += `<div class="layer">
    <div
    class="layer__color"
    style="background-color: ${props[i].color}"
  ></div>
  <div class="layer__label">${props[i].label}</div>
  </div>
  </div>`
  }
  return result;
};

//5.2 Použijte vaši komponentu a pomocí vlastnosti innerHTML zapojte do stránky tři ingredience pro cappuccino. Stránka by měla pro uživatele vypadat stejně jako na začátku.

const ingredience = [
  {
  color:'#feeeca',
  label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
{
  color: '#613916',
  label: 'espresso',
}];

const element=document.querySelector(".drink__info");
element.innerHTML= `<h3>CAPPUCCINO</h3>` + Layer(ingredience);