window.onscroll =function subziro_fall()
{
	document.getElementById("subziro").remove();

		var subziro_fall = document.createElement('div');
			 subziro_fall.className = "subziro_fall";
  			document.body.appendChild(subziro_fall);
}
function subziro_fight()
{
	document.getElementById("subziro").remove();

		var subziro_fight = document.createElement('div');
			 subziro_fight.className = 'subziro_fight';
  			document.body.appendChild(subziro_fight);
  			document.getElementById("b1").style.animation='swing 1s 1 1s';
  			setTimeout("var subziro_win = document.createElement('div'); subziro_win.className ='subziro_win';	document.body.appendChild(subziro_win);",1300);
  			}
