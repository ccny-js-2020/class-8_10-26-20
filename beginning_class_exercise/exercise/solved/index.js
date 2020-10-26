/*

//1
 - change the dolphin to the whale, and make the whale larger

//2
 - when the button is clicked, add the text from the input box to the html to bold and uppercase

//3
 - create an array of objects.
 - loop through the array of objects
 - console.log one of the properties values for each of the objects
 - append all of the objects and their properties to the table

*/

//1
$("#animal-image").click(function(){
	$("#animal-image").attr("src", "whale.jpeg").attr("height", 200).attr("width", 200);
});


//2
$("#word-button").click(function(){
	var inputValue = $("#word-input").val();
	var strong = $("<strong>");
	strong.text(inputValue.toUpperCase());
	$("#add-word-to-me").append(strong);
});

//3
var movies =
[
	{
		title: "Goodfellas",
		performers: "Robert Deniro, Joe Pesci"
	},
	{
		title: "Casino",
		performers: "Robert Deniro, Sharon Stone, Joe Pesci"
	},
	{
		title: "Carlito's Way",
		performers: "Al Pacino, Sean Penn"
	}
];

var table = $("<table>");

var headerTr = $("<tr>");

var titleHeader = $("<th>");
titleHeader.text("Title");

var performersHeader = $("<th>");
performersHeader.text("Performers")

headerTr.append(titleHeader).append(performersHeader);

table.append(headerTr);

for(var i = 0; i < movies.length; i++){
	var movieTr = $("<tr>");

	var movieTitleTd = $("<td>");
	movieTitleTd.text(movies[i].title)
	movieTr.append(movieTitleTd);

	var moviePerformersTd = $("<td>");
	moviePerformersTd.text(movies[i].performers);
	movieTr.append(moviePerformersTd);

	table.append(movieTr);
}

$("#table-to-add-to").append(table);

// This is one way to do it. With an html string and vanilla javascript
// var str = "<table><tr><th>Title</th><th>Actors</th></tr>";
// var tdTag = document.getElementById("table-to-add-to");
// for(var i = 0; i < movies.length; i++){
// 	str += "<tr><td>" + movies[i].title + "</td><td>" + movies[i].actors + "</td>"
// }
// tdTag.innerHTML = str + "</tr></tr></table>";
