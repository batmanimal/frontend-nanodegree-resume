var name = "Jennie Kim Eldon";
var role = "Project Manager";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); // prepend to show at the beginning of the header tag

var skills = ["Project Management", "Communication", "International Affairs", "Data Analysis", "JavaScript", ""];


var bio = {
	"name": name,
	"role": role,
	"contacts": {
		"email": "thejenniekim@gmail.com",
		"github": "batmanimal",
		"location": "San Francisco, CA"
	},
	"welcomeMessage" : "Hi, I'm Jennie! I'm very friendly. Like a dog.",
	"skills": skills,
	"bioPic" : "images/jk.jpg"
};

var education = {
	"schools": [
		{ 
			"name": "Stanford University",
			"dates": "2005",
			"degree": "B.A. in History",
			"majors": ["History"],
			"location": "Stanford, CA"
		},
		{
			"name": "George Washington University",
			"dates": "2007",
			"degree": "M.A. in Media and Public Affairs",
			"majors": ["Media and Public Affairs"],
			"location": "Washington, DC"
		}
	],
	onlineCourses: []
};

function addCourse (title, school, url) {
	var courseObject = {title: title, school: school, url: url};
	education.onlineCourses.push(courseObject);
}

addCourse("JavaScript Basics", "Udacity", "http://www.udacity.com/course/ud804");
addCourse("Object-Oriented JavaScript", "Udacity", "http://www.udacity.com/course/ud015");
addCourse("JavaScript Roadtrip, Parts 1-3", "Codeschool", "http://javascript-roadtrip-part3.codeschool.com");
addCourse("Interactive Web Pages with JavaScript", "Treehouse", "http://teamtreehouse.com/library/interactive-web-pages-with-javascript");
addCourse("Programming Foundations in Python", "Udacity", "http://www.udacity.com/course/ud036");
addCourse("Exploratory Data Analysis with R", "Udacity", "http://www.udacity.com/course/ud651");
addCourse("Intro to HTML and CSS", "Udacity", "https://www.udacity.com/course/ud304");
addCourse("Build a Simple Android App", "Treehouse", "http://teamtreehouse.com/library/build-a-simple-android-app");
addCourse("Version Control with Git and Github", "Udacity", "https://www.udacity.com/course/ud775");
addCourse("The Data Scientist's Toolbox", "Coursera", "https://www.coursera.org/course/datascitoolbox");

// console.log(education.onlineCourses);


function displayEducation() {
	for(var key in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[key].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[key].degree);
		var formattedSchoolAndDegree = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchoolAndDegree);

	} 

	$(".education-entry:last").append(HTMLonlineClasses);

	for(var key in education.onlineCourses) {

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[key].title);
		var formattedOnlineSchool= HTMLonlineSchool.replace("%data%", education.onlineCourses[key].school);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[key].url);
		var formattedTitleAndSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedTitleAndSchool);

	} 
}

displayEducation();


var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.contacts);

var formattedContacts = formattedEmail + formattedGithub;

$("#header").append(formattedBioPic);



var work = {
	"jobs": [
		{
			"title": "Project Manager",
			"employer": "Udacity",
			"location": "Mountain View, CA",
			"years": "1.5",
			"dates": "2013-present",
			"description": "Currently manage the Android track of courses for Udacity. Managed and led the launch of the Georgia Tech Online Master of Science in Computer Science."
		},
		{
			"title": "Afghanistan Program Officer",
			"employer": "U.S. Department of State",
			"location": "Washington, DC",
			"years": "4",
			"dates": "2008-2013",
			"description": "Managed over $30M in foreign assistance to Afghanistan, and led the Gender Justice portfolio at the Bureau of International Narcotics and Law Enforcement"
		},
		{
			"title": "Program Officer",
			"employer": "U.S. Embassy Kabul",
			"location": "Kabul, Afghanistan",
			"years": "0.3",
			"dates": "Temporary Duty Rotations in 2008, 2009, 2010, 2011 and 2012",
			"description": "Helped establish and sustain 14 women's shelters, and organized U.S. efforts to support legal aid offices and educational initiatives for women and girls in Afghanistan."
		},
		{
			"title": "Public Diplomacy Officer",
			"employer": "U.S. Embassy Pristina",
			"location": "Pristina, Kosovo",
			"years": "0.4",
			"dates": "May-Oct. 2010",
			"description": "Managed and monitored over 30 local grants, and served as the Assistant Public Affairs Officer."
		},
		{
			"title": "Program Officer",
			"employer": "U.S. Consulate Jerusalem",
			"location": "Jerusalem, Israel",
			"years": "0.4",
			"dates": "May-Oct. 2009",
			"description": "Developed and implemented a public affairs strategy to promote U.S. foreign assistance to the Palestinian Authority Security Forces."
		}

	]
};


if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
}

for (var i = 0; i < bio.skills.length; i++) {
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
}

function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

displayWork();



$("#main").append(work.position);

$("#mapDiv").append(googleMap);

//$("#mapDiv").append(googleMap);


$("#letsConnect").append(formattedContacts);


