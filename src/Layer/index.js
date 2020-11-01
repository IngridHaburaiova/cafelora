'use strict'

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