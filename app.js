monStockage = localStorage;

var mon_annuaire  = [
{
	genre : 'F',
	nom : "Kurowski",
	prenom : "Alexandra",
	age : '40',
	ville : 'Auch'
},
{
	genre : 'F',
	nom : "Segond",
	prenom : "Zakia",
	age : '36',
	ville : 'Auch'
}
];

//affichage tableau 
for (var i = 0 ; i < mon_annuaire.length ; i++)
{
	$('#body').append('<tr><td>'+ mon_annuaire[i].genre+'</td><td>'+ mon_annuaire[i].nom+ '</td><td>'+ mon_annuaire[i].prenom+ '</td><td>'+ mon_annuaire[i].age+ '</td><td>'+ mon_annuaire[i].ville+ '</td></tr>');

}

var new_genre = $('select').val();
var new_name = $('#name').val(); 
var new_surname = $('#surname').val();
var new_age = $('#birth').val();
var new_city = $('#city').val();
//Ajout de contact 
$('#enregistrer').click(function()
{
	$('#body').append('<tr><td>'+ new_genre +'</td><td>'+ new_name + '</td><td>'+ new_surname + '</td><td>'+ new_age+ '</td><td>'+ new_city + '</td></tr>');
	$('#exampleModalCenter').modal('hide');
});

var mon_annuaire_new = 

var mon_annuaire_json = JSON.stringify(mon_annuaire);
localStorage.setItem("objet",mon_annuaire_json);

var mon_annuaire_json = localStorage.getItem("objet");
var mon_annuaire = JSON.parse(mon_annuaire_json);
// Affichage dans la console
console.log(mon_annuaire);
