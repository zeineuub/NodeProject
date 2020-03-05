//cration of a MangoClient Object
var MongoClient = require('mongodb').MongoClient;
//creation of url
var url = "mongodb://localhost:27017/mydb";
//connection to database
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created well done!");


  //creating a collection
  var dbo=db.db("mydb");
  dbo.createCollection("login",function(err,res){
  	if (err) throw err;
  	console.log("collection created well done");
  	
  //Insert request
  //creation de ma table et champs
  //bish yethat fil file JSON
  var myOb1={	name:"ghada",
  				lastname:"malek",
  				age:"20",
  				email:"ghada.malek@gmail.com",
  				tel:"54559866"
  			  };
	var myob2={ 
				name:"zieneb",
				lastname:"malek",
				age:"21",
				email:"zeineb.male@gmail.com",
				tel:"95855888"
				
			  };
  //inseritou fil table
	  dbo.collection("authentifiction").insertOne(myOb1,function(err,res){ 

	  	if (err)throw err;
	  	console.log("1 document insert");

	  });
	   dbo.collection("authentifiction").insertOne(myOb2,function(err,res){ 

	  	if (err)throw err;
	  	console.log("1 document insert");

	  });


	dbo.collection("authentifiction").findOne({},function(err,re){ 
	if (err) throw err;
	console.log("Return only the fisrt document");
	});

db.close();
  });
 });
  