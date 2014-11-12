// TODO: Try combining all objects into a single JSON object that can be passed through a resume builder like jsonresume.org   

// create skills array to display in the header that will be referenced in the bio object
var skills = ["Project Management", "Communication", "International Affairs", "Data Analysis", "JavaScript"];

// create bio object to store personal attributes 
var bio = {
	"name": "Jennie Kim Eldon",
	"role": "Project Manager",
	"contacts": {
		"email": "thejenniekim@gmail.com",
		"github": "batmanimal",
		"blog": "www.batmanimal.com",
		"location": "San Francisco, CA"
	},
	"welcomeMessage" : "Hi, I'm Jennie! I'm very friendly. Like a dog.",
	"skills": skills,
	"bioPic" : "images/jk.jpg"
};

// create education object to store colleges and online coursework 
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
	// online courses will be stored as objects in this array
	"onlineCourses": []
};


// Adds new course objects to the onlineCourses array in the education object
function addCourse (title, school, url) {
	var courseObject = {title: title, school: school, url: url};
	education.onlineCourses.push(courseObject);
}

// invoke addCourse function to push new course objects into the onlineCourses array 
addCourse("JavaScript Basics", "Udacity", "http://www.udacity.com/course/ud804");
addCourse("Object-Oriented JavaScript", "Udacity", "http://www.udacity.com/course/ud015");
addCourse("JavaScript Roadtrip, Parts 1-3", "Codeschool", "http://javascript-roadtrip-part3.codeschool.com");
addCourse("Interactive Web Pages with JavaScript", "Treehouse", "http://teamtreehouse.com/library/interactive-web-pages-with-javascript");
addCourse("Programming Foundations in Python", "Udacity", "http://www.udacity.com/course/ud036");
addCourse("Exploratory Data Analysis with R", "Udacity", "http://www.udacity.com/course/ud651");
addCourse("Intro to HTML and CSS", "Udacity", "https://www.udacity.com/course/ud304");
addCourse("Version Control with Git and Github", "Udacity", "https://www.udacity.com/course/ud775");

// create work object to store job objects within an array
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

// create object to store projects within an array
var projects = {
	"projects": [
		{
			"title": "Todo App",
			"description": "Simple todo app for Treehouse Interactive Web Pages course",
			"images": ["images/todo-app.jpg"]
		}
	]
}

// build function to display the header with data from the bio object
function displayHeader() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);	
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName); 

	for (var contact in bio.contacts) {
		var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
		formattedContact = formattedContact.replace("%contact%", contact);
		$("#topContacts").append(formattedContact);
	}

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedDescription = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedDescription);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
	}
	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}

}

// build function to display work history with data from work object
function displayWork() {
	for(job in work.jobs) {
		// create new div for work experience 
		$("#workExperience").append(HTMLworkStart);
		// concat employer and title 
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

// build function to display project portfolio with data from the projects object
function displayProjects() {
	for (var key in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[key].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[key].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[key].images.length > 0) {
			for (var image in projects.projects[key].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[key].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

// build function to display education and online course info with data from the education object 
function displayEducation() {
	for(var school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolAndDegree = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchoolAndDegree);
		
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		
		for (var major in education.schools[school].majors) {
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedMajor);
		}
	}
	// adds online courses under the education field 
	$("#education").append(HTMLonlineClasses);

	for(var key in education.onlineCourses) {
		$("#education").append(HTMLonlineClassesStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[key].title);
		var formattedOnlineSchool= HTMLonlineSchool.replace("%data%", education.onlineCourses[key].school);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[key].url);
		var formattedTitleAndSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedTitleAndSchool);
	} 
}

// build function to display contact info in the footer with data from the bio.contacts object 
function displayFooter () {
	for (var contact in bio.contacts) {
		var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
		formattedContact = formattedContact.replace("%contact%", contact);
		$("#footerContacts").append(formattedContact);
	}
}

// invoke display functions 
displayEducation();
displayHeader();
displayWork();
displayProjects();
displayFooter();

// 
//$("#main").append(work.position);

$("#mapDiv").append(googleMap);

$("#letsConnect").append(formattedContacts);

