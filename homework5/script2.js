function createFlex(){
             document.getElementById("parent").remove();

			 var parent1 = document.createElement('div');
			 parent1.className = "parent1";
  			document.body.appendChild(parent1);

  			var logo = document.createElement('div');
			 logo.className = "logo";
			 logo.innerHTML = 'Logo';
  			parent1.appendChild(logo);

  			var search = document.createElement('div');
			 search.className = "search";
			 search.innerHTML = 'search';
  			parent1.appendChild(search);


  			var parent2 = document.createElement('div');
			 parent2.className = "parent2";
  			document.body.appendChild(parent2);

  			var punkt1 = document.createElement('div');
			 punkt1.className = "punkt1";
			 punkt1.innerHTML = 'Пункт1';
  			parent2.appendChild(punkt1);

  			var punkt2 = document.createElement('div');
			 punkt2.className = "punkt2";
			 punkt2.innerHTML = 'Пункт2';
  			parent2.appendChild(punkt2);

  			var punkt3 = document.createElement('div');
			 punkt3.className = "punkt3";
			 punkt3.innerHTML = 'Пункт3';
  			parent2.appendChild(punkt3);

  			var punkt4 = document.createElement('div');
			 punkt4.className = "punkt4";
			 punkt4.innerHTML = 'Пункт4';
  			parent2.appendChild(punkt4);

  			var punkt5 = document.createElement('div');
			 punkt5.className = "punkt5";
			 punkt5.innerHTML = 'Пункт5';
  			parent2.appendChild(punkt5);

  			var punkt6 = document.createElement('div');
			 punkt6.className = "punkt6";
			 punkt6.innerHTML = 'Пункт6';
  			parent2.appendChild(punkt6);


			var center = document.createElement('div');
			 center.className = "center";
  			document.body.appendChild(center);


  			var grandparent1 = document.createElement('div');
			 grandparent1.className = "grandparent1";
  			center.appendChild(grandparent1);

  			var parent3 = document.createElement('div');
			 parent3.className = "parent3";
  			grandparent1.appendChild(parent3);

  			var block1 = document.createElement('div');
			 block1.className = "block1";
			 block1.innerHTML = 'block1';
  			parent3.appendChild(block1);

  			var block2 = document.createElement('div');
			 block2.className = "block2";
			 block2.innerHTML = 'block2';
  			parent3.appendChild(block2);

  			var block3 = document.createElement('div');
			 block3.className = "block3";
			 block3.innerHTML = 'block3';
  			parent3.appendChild(block3);

  			var block4 = document.createElement('div');
			 block4.className = "block4";
			 block4.innerHTML = 'block4';
  			parent3.appendChild(block4);

  			var block5 = document.createElement('div');
			 block5.className = "block5";
			 block5.innerHTML = 'block5';
  			parent3.appendChild(block5);


			var grandparent2 = document.createElement('div');
			 grandparent2.className = "grandparent2";
  			center.appendChild(grandparent2);

  			var parent4 = document.createElement('div');
			 parent4.className = "parent4";
  			grandparent2.appendChild(parent4);

  			var photo1 = document.createElement('div');
			 photo1.className = "photo1";
			 photo1.innerHTML = 'Фото1';
  			parent4.appendChild(photo1);

  			var img1 = document.createElement('img');
  			img1.setAttribute("src", "1.jpg");
  			photo1.appendChild(img1);

  			var photo2 = document.createElement('div');
			 photo2.className = "photo2";
			 photo2.innerHTML = 'Фото2';
  			parent4.appendChild(photo2);

  			var img2 = document.createElement('img');
  			img2.setAttribute("src", "2.jpg");
  			photo2.appendChild(img2);

  			var photo3 = document.createElement('div');
			 photo3.className = "photo3";
			 photo3.innerHTML = 'Фото3';
  			parent4.appendChild(photo3);

  			var img3 = document.createElement('img');
  			img3.setAttribute("src", "3.jpg");
  			photo3.appendChild(img3);

  			var photo4 = document.createElement('div');
			 photo4.className = "photo4";
			 photo4.innerHTML = 'Фото4';
  			parent4.appendChild(photo4);

  			var img4 = document.createElement('img');
  			img4.setAttribute("src", "4.jpg");
  			photo4.appendChild(img4);

  			var photo5 = document.createElement('div');
			 photo5.className = "photo5";
			 photo5.innerHTML = 'Фото5';
  			parent4.appendChild(photo5);

  			var img5 = document.createElement('img');
  			img5.setAttribute("src", "5.jpg");
  			photo5.appendChild(img5);

  			var photo6 = document.createElement('div');
			 photo6.className = "photo6";
			 photo6.innerHTML = 'Фото6';
  			parent4.appendChild(photo6);

  			var img6 = document.createElement('img');
  			img6.setAttribute("src", "6.jpg");
  			photo6.appendChild(img6);


			var footer = document.createElement('div');
			 footer.className = "footer";
			 footer.innerHTML = 'Подвал';
  			document.body.appendChild(footer);


           }