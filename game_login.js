function add_User(){
      player1_name = document.getElementById("player_1_input").value;
	  player2_name = document.getElementById("player_2_input").value;
	  localStorage.setItem("player_1_input", player_1_input);
	  localStorage.setItem("player_2_input", player_2_input);
	  window.location = "quiz_game_page.html";
}