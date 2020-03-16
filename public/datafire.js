var db = firebase.firestore();



function StoreDatta(){
window.alert("on essaye");	
db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
    window.alert("Success");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
    window.alert("Error");
});
}

function Boutonn(){
	window.alert("bravo");
}