const element_card = document.getElementById("test");
const element_hand = document.getElementById("card-hand");
const element_house = document.getElementById("house-hand");
const score_text = document.getElementById("text_score");
const ending_text = document.getElementById("text_ending");
const score_house = document.getElementById("house-score");
const button_hit = document.getElementById("button-hit");
const button_stand = document.getElementById("button-stand");
const button_retry = document.getElementById("button-retry");
const card_face = "face.png";
const game_speed = 777; // delais (ms) entre la plupart des actions
let score_temp = 0;
let score = 100
if (localStorage.getItem("score") == null) {
	score = 100;
} else {
	score = localStorage.getItem("score");
}
let bet = 10;
const hand = [];
const house_hand = [];
const button_display = "inline";
let temp_cardnum = Math.floor(Math.random()*4);
let temp_card = 0;
let game_phase = 0;
const attribute_class = document.createAttribute("class");
function _tocard(nombre,symbol,name="wind.png") {
	switch(nombre) {
	case 1: return `">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:25%;">`
	case 2: return `;flex-direction: column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:25%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:25%;">`
	case 3: return `;flex-direction: column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:25%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:25%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:25%;">`
	case 4: return `;display: flex;flex-direction: row">`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;"> </div>`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;"></div>`
	case 5: return `;display: flex;flex-direction: row">`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"> </div>`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"></div>`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"></div>`
	case 6: return `;display: flex;flex-direction: row">`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;"> </div>`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;"></div>`
	case 7: return `;display: flex;flex-direction: row">`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;"> </div>`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:25%;">`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;"></div>`
	case 8: return `;display: flex;flex-direction: row">`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;"> </div>`+
			`<div style="width:50%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:50%;"></div>`
	case 9: return `;display: flex;flex-direction: row">`+
			`<div style="width:34%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"> </div>`+
			`<div style="width:32%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"></div>`+
			`<div style="width:34%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"></div>`
	case 10: return `;display: flex;flex-direction: row">`+
			`<div style="width:34%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"> </div>`+
			`<div style="width:32%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"></div>`+
			`<div style="width:34%;height:100%;display: flex;flex-direction:column">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}"`+
			`style="width:67%;"></div>`
	case 11: return `"><img class="suit-symbol" src="${symbol}_suit.png" alt="${name}" style="width:15%;`+
			`position:absolute; left:8%; top:6%">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}" style="width:15%;`+
			`position:absolute; left:8%; bottom:6%">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}" style="width:15%;`+
			`position:absolute; right:8%; top:6%">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}" style="width:15%;`+
			`position:absolute; right:8%; bottom:6%">`+
			`<img class="suit-symbol" src="J_${symbol}.png" alt="${name}"`+
			`style="width:42%;">`
	case 12: return `"><img class="suit-symbol" src="${symbol}_suit.png" alt="${name}" style="width:15%;`+
			`position:absolute; left:8%; top:6%">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}" style="width:15%;`+
			`position:absolute; left:8%; bottom:6%">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}" style="width:15%;`+
			`position:absolute; right:8%; top:6%">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}" style="width:15%;`+
			`position:absolute; right:8%; bottom:6%">`+
			`<img class="suit-symbol" src="Q_${symbol}.png" alt="${name}"`+
			`style="width:42%;">`
	case 13: return `"><img class="suit-symbol" src="${symbol}_suit.png" alt="${name}" style="width:15%;`+
			`position:absolute; left:8%; top:6%">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}" style="width:15%;`+
			`position:absolute; left:8%; bottom:6%">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}" style="width:15%;`+
			`position:absolute; right:8%; top:6%">`+
			`<img class="suit-symbol" src="${symbol}_suit.png" alt="${name}" style="width:15%;`+
			`position:absolute; right:8%; bottom:6%">`+
			`<img class="suit-symbol" src="K_${symbol}.png" alt="${name}"`+
			`style="width:42%;">`
	default: break
	}
}
// Fonction de generation de carte - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function carte(nombre,symbol,name="wind.png", visibility=true) {
	_card_front_side = _tocard(nombre,symbol,name)
	return `<div class="${(visibility) ? "drama-card" : "hidden-card"}">
  <div class="flip-card-inner">
    <div class="flip-card-front" style="background-image:url('${name}')${_card_front_side}
    </div>
    <div class="flip-card-back">
    </div>
  </div>
</div>`
}

function player_score() {
	let x = 0;
	let temp_hand = [];
	let bonus = 0;
	console.log('test');
	console.log(temp_hand);
	for (let i in hand) {
		temp_hand.push(hand[i][0]);
	}
	console.log(temp_hand)
	for (let i in temp_hand) {
		if (temp_hand[i] == 1) {
			bonus++
		} else {
			if (temp_hand[i] > 10) {
				x += 10
			} else {
				x += temp_hand[i]
			}
		}
	}
	console.log(x)
	while (bonus > 0) {
		if (x < (12 - bonus)) {
			x += 11
		} else {
			x += 1
		}
		bonus--
	}
	console.log('^v Pre/Post Ace');
	console.log(x)
	return x
}

function house_score() {
	let tempvar_house_score = 0;
	let house_bonus = 0;
	for (let i in house_hand) {
		if (house_hand[i][0]>10) {
			tempvar_house_score += 10;
		} else if (house_hand[i][0]==1) {
			house_bonus++
		} else {
			tempvar_house_score += house_hand[i][0];
		}
	}
	while (house_bonus > 0) {
		if (tempvar_house_score < (12 - house_bonus)) {
			tempvar_house_score += 11
		} else {
			tempvar_house_score += 1
		}
		house_bonus--
	}
	return tempvar_house_score
}
function update_board() {
	let tempvar = "";
	let tempvar_hand_score = 0;
	for (let i in hand) {
		tempvar += hand[i][0].toString() + "/" + hand[i][1].toString() + "  "
	}
	if (game_phase == 0) {
		for (let i in house_hand) { // § ??? Fonctionne pas sans la for loop ???
			if (house_hand[0][0]>10) {
				tempvar_hand_score = 10;
			} else if (house_hand[0][0]==1) {
				tempvar_hand_score = 11;
			} else {
				tempvar_hand_score = house_hand[0][0];
			}
			break
		}
	} else {
		tempvar_hand_score = house_score();
	}
	tempscore = player_score()
	tempvar += "| "+tempscore
	document.getElementById("hand").innerText = `Joueur: ${tempscore}`;
	score_text.innerText = `Score: ${score}`;
	score_house.innerText = `Maison: ${tempvar_hand_score}`;
	if (player_score()>21) {
		ending_lose()
	}
}
function randomcard() {
	return [1+Math.floor(Math.random()*13),Math.floor(Math.random()*4)]
}
function card_draw(x) {
	if (x < 1) {return;}
	temp_card = randomcard()
	console.log(temp_card)
	/*element_card.innerHTML = carte(temp_card[0],temp_card[1],card_face); // § Faire la carte apparaitre 1 doit etre temp_card[0]*/
	element_hand.innerHTML = element_hand.innerHTML+carte(temp_card[0],temp_card[1],card_face)
	hand.push(temp_card);
	card_draw(x-1);
	update_board();
}
card_draw(2)

function card_draw_house(x) {
	if (x < 1) {return;}
	temp_card = randomcard()
	console.log(temp_card)
	element_house.innerHTML = element_house.innerHTML+carte(temp_card[0],temp_card[1],card_face)
	house_hand.push(temp_card);
	card_draw_house(x-1);
	update_board();
}
function house_hand_start() {
	temp_card = randomcard();
	console.log(temp_card);
	element_house.innerHTML = element_house.innerHTML+carte(temp_card[0],temp_card[1],card_face);
	house_hand.push(temp_card);
	temp_card = randomcard();
	element_house.innerHTML = element_house.innerHTML+carte(temp_card[0],temp_card[1],card_face, false);
	house_hand.push(temp_card);
	update_board();
	if (player_score() == 21) {
		if (house_score() == 21) {
			house_hand_reveal();
			ending_stalemate();
		} else {
			ending_blackjack();
		}
	} else {
		player_turn();
	}
}
function card_dramatic_reveal() {
	const dramaticards = document.getElementsByClassName("drama-card");
	console.log(dramaticards);
	console.log("TEST");
	for (let i = 0; i < dramaticards.length+1; i++) {
		for (let i of dramaticards) {
			console.log(i);
			i.className = "flip-card";
		}
	}
	
	update_board()
}
function house_hand_reveal() {
	attribute_class.value = "flip-card";
	const house_hiddens = document.getElementsByClassName("hidden-card");
	for (let i of house_hiddens) {
		i.setAttributeNode(attribute_class);
	}
	game_phase = 1;
	update_board()
}
function show_actions() {
	button_hit.style.display = button_display;
	button_stand.style.display = button_display;
}
function hide_actions() {
	button_hit.style.display = "none";
	button_stand.style.display = "none";
}
function player_turn() {
	show_actions()
}
function action_hit() {
	card_draw(1)
}
function action_stand() {
	dealer_turn()
}
function dealer_turn() {
	hide_actions();
	house_hand_reveal();
	if (house_score() > 21) {
		ending_win();
	} else if (house_score()>16) { // 16
		versus();
	} else {
		setTimeout(dealer_draw, game_speed);
	}
}
function dealer_draw() {
	temp_card = randomcard();
	console.log(temp_card);
	element_house.innerHTML = element_house.innerHTML+carte(temp_card[0],temp_card[1],card_face,true); //§
	house_hand.push(temp_card);
	house_hand_reveal();
	update_board();
	dealer_turn();
}
function versus() {
	if (player_score() < house_score()) {
		ending_lose()
	} else if (player_score() > house_score()) {
		ending_win()
	} else {
		ending_stalemate()
	}
}
function ending_stalemate() {
	hide_actions();
	ending_text.innerText = "Égalité."
	score_set(Number(score))
	setTimeout(try_again, game_speed);
}
function ending_blackjack() {
	hide_actions();
	ending_text.innerText = "Blackjack !!!"
	score_set(Number(score) + 25)
	setTimeout(try_again, game_speed);
}
function ending_lose() {
	hide_actions();
	ending_text.innerText = "Défaite."
	if (score > 10) {
		score_set(Number(score) - 10)
	} else {
		score_set(0)
	}
	setTimeout(try_again, game_speed);
}
function ending_win() {
	hide_actions();
	ending_text.innerText = "Victoire du joueur."
	score_set(Number(score) + 10)
	score_text.innerText = `Score: ${score}`;
	setTimeout(try_again, game_speed);
}
function try_again() {
	button_retry.style.display = button_display;
}
function score_reset() {
	score_set(100);
}
function score_set(x) {
	localStorage.setItem("score", x);
	score = x;
	score_text.innerText = `Score: ${score}`;
}
house_hand_start();
setTimeout(card_dramatic_reveal, 10);
console.log(player_score())