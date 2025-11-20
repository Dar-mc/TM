const logo_cards = document.getElementById("logo-cards");
const logo_cards_2 = document.getElementById("logo-cards-2");
let name = "face.png";
let secret_cheat = false; // Reload la page jusqu'à ce qu'il y ait un Blackjack dans le logo.
let card1_value = 1+Math.floor(Math.random()*10);
let card2_value = 1+Math.floor(Math.random()*10);
let logo_blackjack_secret = ((card1_value == 1 || card2_value == 1) && card1_value+card2_value == 11)
function _tocard(nombre,symbol) {
	// symbol = "testgame/"+symbol;
	//return `"><img class="logo-suit-symbol" src="testgame/${symbol}_suit.png" alt="${name}"`+`style="width:25%;">`;
	switch(nombre) {
		case 1: return `">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:25%;">`;
		case 2: return `;flex-direction: column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:25%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:25%;">`
		case 3: return `;flex-direction: column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:25%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:25%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:25%;">`
		case 4: return `;display: flex;flex-direction: row">`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;"> </div>`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;"></div>`
		case 5: return `;display: flex;flex-direction: row">`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"> </div>`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"></div>`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"></div>`
		case 6: return `;display: flex;flex-direction: row">`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;"> </div>`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;"></div>`
		case 7: return `;display: flex;flex-direction: row">`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;"> </div>`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:25%;">`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;"></div>`
		case 8: return `;display: flex;flex-direction: row">`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;"> </div>`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;"></div>`
		case 9: return `;display: flex;flex-direction: row">`+
			`<div style="width:34%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"> </div>`+
			`<div style="width:32%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"></div>`+
			`<div style="width:34%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"></div>`
		case 10: return `;display: flex;flex-direction: row">`+
			`<div style="width:34%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"> </div>`+
			`<div style="width:32%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"></div>`+
			`<div style="width:34%;height:100%;display: flex;flex-direction:column">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="logo-suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"></div>`
		default: break
	}
}

function carte(nombre,symbol,name="face.png", rotation) {
	let _card_front_side = _tocard(nombre,symbol) /*nombre,symbol,name*/
	let border_effect = (logo_blackjack_secret) ? "style=\"border-style:double;\"" : ""
	return `<div class="logo-card-tilt" style="transform: rotate(${rotation});"><div class="logo-card-single">
  <div class="logo-card-inner" ${border_effect}>
    <div class="logo-card-front" style="background-image:url('${name}')${_card_front_side}
    </div>
    <div class="logo-card-back">
    </div>
  </div>
</div>
</div>`
}
logo_cards.style = "width:50px; height:10px; position:absolute; top:10px; left:49.5%"
logo_cards_2.style = "width:50px; height:10px; position:absolute; top:10px; right:49.5%"
logo_cards.innerHTML = carte(card1_value,Math.floor(Math.random()*4),"face.png","30deg");
logo_cards_2.innerHTML = carte(card2_value,Math.floor(Math.random()*4),"face.png","-30deg");

//logo_cards.innerHTML = `<p>${card1_value}+${card2_value}: ${logo_blackjack_secret}</p>`
if ((!logo_blackjack_secret) && secret_cheat) {
	location.reload()
}