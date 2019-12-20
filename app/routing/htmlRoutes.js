var path = require("path");

module.exports = function(app) {
	// For survey in URL or survey button
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// For homepage
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    
    // If no matching route is found default to home
    app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};