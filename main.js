function averageGrade(){

	var sub1 = parseInt(document.getElementById('Math').value);
	var sub2 = parseInt(document.getElementById('SocialStudies').value);
	var sub3 = parseInt(document.getElementById('Science').value);

	var ave = (sub1+sub2+sub3) /3;

	// if-else statements
    if (ave >= 70 && ave < 74.99) {
        document.getElementById("yes").innerHTML = "Your grade is " + ave + ", poor." 
    } 
    else if (ave>= 75 && ave <= 79.99) {
        document.getElementById("yes").innerHTML = "Your grade is " + ave + ", which  does need improvement." 
    }
     else if (ave>= 80 && ave <= 86.99) {
        document.getElementById("yes").innerHTML = "Your grade is " + ave + ", which is satisfactory." 
    }
     else if (ave>= 87 && ave <= 93.99) {
        document.getElementById("yes").innerHTML = "Your grade is " + ave + ", which is above satisfactory!" 
    }
     else if (ave>= 94 && ave <= 100) {
        document.getElementById("yes").innerHTML = "Your grade is " + ave + ", which is excellent!" 
    }
    else {
        document.getElementById('yes').innerHTML = ("Invalid grade. Check your inputs.");
    }
}