
var httpRequest = new XMLHttpRequest();
var url = "http://localhost/info2180-lab4/superheroes.php";

window.onload = function (){ 
	var btn = document.querySelector(".btn");
	
	btn.addEventListener('click', function(element) {
		element.preventDefault();
		fetch('http://localhost/info2180-lab4/superheroes.php')
			.then(response => response.text())
			.then(data => {
				alert(data)
			})
			.catch(error => {
				console.log(error);
			});
	})
}