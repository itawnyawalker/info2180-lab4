


window.onload = function (){ 
	var btn = document.querySelector(".btn");
	var input = document.querySelector(".input");
	var result = document.querySelector("#result");
	
	btn.addEventListener('click', function(element) {
		element.preventDefault();
		fetch('http://localhost/info2180-lab4/superheroes.php?query='+ input.value.trim(), {method: 'GET'})
			.then(response => response.text())
			.then(data => {
				result.innerHTML = data
			})
			.catch(error => {
				console.log(error);
			});
	})
}