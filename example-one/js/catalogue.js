$(function(){
      	for (var i = 0; i < 10; i++)
      	{
      		let template = `<div class='col cat-card-background m-2'>
	      	<img class="cat-card-logo" src="img/logo2.png">
	      	<div class="cat-card-slogan">` + 'Здесь был результат POST запроса' +`</div>
	      	<a href="` + 'https://google.com' +`">
		      	<div class="cat-card-button">
		      		<div class="cat-card-button-logo-background">
		      			<div class="cat-card-button-logo fas fa-bolt"></div>
		      			<div class="cat-card-button-text">` + 'POST' + '|' + 'REQUEST' + `</div>
		      		</div>
		      	</div>
	      	</a>
	      	<div class="cat-card-time-background">
	      	<div class="cat-card-time-icon fas fa-hourglass"></div>	
	      	<div class="cat-card-time-text">29th of May, 2023</div>
	      	</div>
	      	</div>`
	      	$('.catalogue-cards-container').append(template)
      	}
});
