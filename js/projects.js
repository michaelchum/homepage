var projects = [
{
	title: "Shows Alert",
	info: "Webapp which lets you subscribe to the latest T.V. shows. Whenever a new episode is available, you will get notified by e-mail and/or SMS. Built with Django.",
	image: "assets/showsalert.png",
	link: "http://shows-alert.com",
	github: "https://github.com/michaelchum/shows-alert"
},
{
	title: "R Score",
	info: "iOS app which calculates the R Score according to the grade, class average and standard deviation. The R Score (or CRC score) is a score that classifies college (CEGEP) students in Québec.",
	image: "assets/rscore.png",
	appstore: "https://itunes.apple.com/us/app/r-score/id792573930?mt=8",
	github: "https://github.com/michaelchum/r-score-calculator",
	style: "height:350px; width:350px; border:none"
},
{
	title: "Sudoku Speed Solver",
	info: "Extremely quick sudoku solver implemented in Java. Solves the hardest 3x3 grids at a maximum of 30ms! Can also solve 4x4 and 5x5 grids. The algorithm involves backtracking and heuristics optimized for speed.",
	image: "assets/sudoku.png",
	github: "https://github.com/michaelchum/sudoku-java",
	style: "height:350px; width:350px;"

},
{
	title: "BaZooka",
	info: "NXT Mindstorm robot capable of playing a basket-ball-like game one versus one. Has an accuracy of 90% and achieved second position in terms of scoring at McGill's Design Principles and Method Robotics competition. Built using the LeJOS framework in Java.",
	image: "assets/bazooka.png",
	github: "https://github.com/michaelchum/BaZooka"
},
{
	title: "Scavengers",
	info: "Multiplayer game on iOS which involves physically walking around until you reach a pre-determined waypoint in your area and gain points. Can be played in multiplayer mode where each player have to find eachother. Built with objective-C and NodeJS.",
	image: "assets/scavengers.png",
	github: "https://github.com/michaelchum/scavengers-ios",
	style: "height:350px; width:350px; border:none"
},];

var projectSection = document.getElementById('projects');

for (var i = 0; i < projects.length; i++) {
	var project = document.createElement('div');
	$(project).addClass('project');
	var container = document.createElement('div');
	// image & link
	$(container).addClass('container');
	var img = document.createElement('img');
	$(img).attr("src", projects[i].image);
	if (projects[i].style) {
		$(img).attr("style", projects[i].style);
	}
	var anchor = document.createElement('a');
	if (projects[i].link) {
		$(anchor).attr("href", projects[i].link);
	} else if (projects[i].github) {
		$(anchor).attr("href", projects[i].github);
	} else if (projects[i].appstore) {
		$(anchor).attr("href", projects[i].appstore);
	}
	$(anchor).attr("target", "_blank");
	$(anchor).append(img);
	$(container).append(anchor);
	// title
	var title = document.createElement('h2');
	$(title).text(projects[i].title);
	$(container).append(title);
	// info
	var info = document.createElement('p');
	$(info).html(projects[i].info);
	$(container).append(info);
	// buttons
	var buttons = document.createElement('div');
	$(buttons).addClass('buttons');
	if (projects[i].link) {
		var projectLink = document.createElement('a');
		$(projectLink).addClass('button');
		$(projectLink).attr("href", projects[i].link);
		$(projectLink).text("View Project");
		$(projectLink).attr("target", "_blank");
		$(buttons).append(projectLink);
	}
	if (projects[i].github) {
		var githubLink = document.createElement('a');
		$(githubLink).addClass('button');
		$(githubLink).attr("href", projects[i].github);
		$(githubLink).text("View GitHub");
		$(githubLink).attr("target", "_blank");
		$(buttons).append(githubLink);
	}
	if (projects[i].appstore) {
		var appstoreLink = document.createElement('a');
		$(appstoreLink).addClass('button');
		$(appstoreLink).attr("href", projects[i].appstore);
		$(appstoreLink).text("Get on AppStore");
		$(appstoreLink).attr("target", "_blank");
		$(buttons).append(appstoreLink);
	}
	$(container).append(buttons);
	$(project).append(container);
	if (i % 2 === 0) {
		$(project).addClass('right');
	} else {
		$(project).addClass('left');
	}
	$(projectSection).append(project);
}

// more projects
var moreProjects = document.createElement('div');
$(moreProjects).text("More projects coming soon");
$(moreProjects).addClass('gray');
$(moreProjects).addClass('center');
$(projectSection).append(moreProjects);