import {Layer} from "../Layer/index.js";

//7.1 Vytvořte komponentu Drink, která očekává props v následujícím tvaru.
const Drinkdata={
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};
//Komponentu napište tak, aby vracela DOM element. Jak už jsme zvyklí, vytvořte pro komponentu vlastní složku s vlastním index.js a style.css.
/*
const Drink = (props)=> {
  let result=`<div class="drink"> 
  <div> ${id} </div>
  <div>  ${name} </div>
  <div>  ${ordered} </div`

   for (let i = 0; i < props.layers.length; i ++) {
    result += `<div class="layer">
    <div
    class="layer__color"
    style="background-color: ${props.layers[i].color}"
  ></div>
  <div class="layer__label">${props.layers[i].label}</div>
  </div>
  </div>`;
   }
  result += "</div>";
  return result;
};
*/

//7.2 Uvnitř vaší komponenty bude potřeba použít komponentu Layers. Dejte si pozor, abyse ji správně importovali.
//7.3 Název obrázku, který se má zobrazit, můžete vzít z vlastnosti id. Je tak pouze potřeba sestavit správnou cestu pro atribut src.
/*
const Drink = (props)=> {
  let result=`
  <div class="drink__product"> 
    <div class="drink__cup">
      <img src="/assets/cups/${props.id}.png" />
    </div>
    <div class="drink__info"></div>
    <h3>  ${props.name} </h3>
    <div>  ${props.ordered} </div`
  result += Layer (props.layers);
  result += "</div>";
  return result;
};*/

//7.4 Zprovozněte tlačítko pro objedávání tak, aby veškerý kód byl součástí komponenty. V tomto případě se budeme muset zbavit globální proměnné ordered. Ke stejnému účelu však můžeme využít vlastnost ordered, která je obsažena v každém objektu nápoje. Tak zaručíme, že každý nápoj bude mít svoji vlastní informaci o tom, zde je objednaný či nikoliv.

const Drink = (props)=> {
  const element=document.createElement ('div');
  element.className='drink';

  element.innerHTML=`
  <div class="drink__product"> 
    <div class="drink__cup">
      <img src="/assets/cups/${props.id}.png" />
    </div>
    <div class="drink__info">
    <h3>  ${props.name} </h3>`+
   // ${props.layers.map((layer) => Layer(layer))}
   Layer(props.layers) +
   `</div>
   </div>
    <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>`;
  return element;
};

//7.5 Zobrazte na stránce nápoj dle dat uvedených výše. Použijte funkci appendChild, neboť naše komponenta vrací DOM element. Vyzkoušejte, že funguje objednávání.

const pridani=document.querySelector(".drinks-list");
pridani.appendChild(Drink(Drinkdata));


