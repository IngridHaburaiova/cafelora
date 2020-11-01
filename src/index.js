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