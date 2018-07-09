// var mon_array  = [
// {
// 	genre : 'F',
// 	nom : "Kurowski",
// 	prenom : "Alexandra",
// 	age : '40',
// 	ville : 'Auch'				// TEST TABLEAU
// },
// {
// 	genre : 'F',
// 	nom : "Segond",
// 	prenom : "Zakia",
// 	age : '36',
// 	ville : 'Auch'
// }
// ];
var annuaire = JSON.parse(localStorage.getItem('objet'));

for (var i = 0 ; i < annuaire.length ; i++)
		{
		$('#body').append('<tr><td>'+ annuaire[i].genre+'</td><td>'+ annuaire[i].nom+ '</td><td>'+ annuaire[i].prenom+ '</td><td>'+ annuaire[i].age+ '</td><td>'+ annuaire[i].ville+ '</td><td><button id="modify">+</button></td><td><button type="button" id="del">-</button></td></tr>');
		}

//Fonction nouveau contact

$('#enregistrer').click(function()
{

	var new_genre = $('select').val();
	var new_name = $('#name').val(); 
	var new_surname = $('#surname').val();
	var new_age = $('#birth').val();
	var new_city = $('#city').val();

	var array = 
	{
	genre : new_genre,
	nom : new_name,
	prenom : new_surname,
	age : new_age,
	ville : new_city
	}
		

		$('#body').append('<tr><td>'+ new_genre+'</td><td>'+ new_name+ '</td><td>'+ new_surname+ '</td><td>'+ new_age+ '</td><td>'+ new_city+ '</td><td><button id="modify">+</button></td><td><button type="button" id="del">-</button></td></tr>');
		
		//cache la pop-up et vide les input
		$('#exampleModalCenter').modal('hide');
		new_name = $('#name').val(''); 
		new_surname = $('#surname').val('') ; 
		new_age = $('#birth').val(''); 
		new_city = $('#city').val('');
		
		annuaire.push(array);


		// ENVOI SUR LS
		var annuaire_json = JSON.stringify(annuaire); //transforme le tableau asso en chaine de caractère via Json pour local
		localStorage.setItem("objet",annuaire_json); //envoi la chaine créée sur le local storage
	
		console.log(annuaire);

});

// Rechercher un contact

$('#searching').click(function()
{
	var recherche = $('#recherche').val();
	var contain = $('table tr:contains('+recherche+')')
	
	
	if(recherche != '' && contain.length==1 )
	{
		$('#ShowAlert').hide();
		$('tbody tr').hide();
		$('table tr:contains('+recherche+')').show();
	}
	else
	{
		$('#ShowAlert').show();
	}

});

// Supprimer un contact




		

















