var mysql = require ("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "ibad",
	password: "Ibad123",

	database: "Bamazon"

});

connection.connect(function(error){
	if (error) throw error;
	console.log("connected")
});

var start = function(){
	inquirer.prompt({
		name: "display",
		type: "list",
		message: "Do you want to display all items on sale?",
		choices: ["yes", "no"]
	}).then(function(answers){
		if(answers.display === "yes"){
			items();
		}
	})
}
start();

function items(){
	connection.query('SELECT * FROM products;', function(error, res)
	{
		// if (error) throw error;
		console.log("database connected:\n");
		console.log(res);
		inquirer.prompt({
			name:"ask",
			type:"list",
			message:"Do you want to buy an item?",
			choices:["yes","no"]
	}).then(function(answers){
		if(answers.ask === "yes"){
			buy();
		}
		else(console.log("See you soon!"))
	})
})
}

function buy(){
	inquirer.prompt([
					{
					name:"which",
					type:"input",
					message: "Enter the ID of item you would like to purchase"
			},
			{
					name:"amount",
					type:"input",
					message:"how many of this item would you like to purchase?"
			}
		]).then(function(answers){
			var item = parseInt(answers.which)
			var qty = parseInt(answers.amount)
			console.log(item);
			console.log(qty);
		connection.query("SELECT * FROM products WHERE id = ?", function(error, results){
			if (results.stock_quantity === qty){
				console.log("in stock")
			}

		})
})
};

// function buy(){
// 	connection.query("SELECT * FROM products WHERE id = ?", function(error, results)
// 		{inquirer.prompt([
// 			{
// 					name:"which",
// 					type:"input",
// 					message: "Enter the ID of item you would like to purchase"
// 			},
// 			{
// 				name:"amount",
// 				type:"input",
// 				message:"how many of this item would you like to purchase?"
// 		}]).then(function(answer)
// 				{

// 					if (stock_quantity >= parseInt(answer.amount)){
// 						console.log("you have purchased:" + answer.amount)
// 					}
// 					else
// 						{console.log("Insufficient quantity!")};
					
// 				})
// 			})
// }