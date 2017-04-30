
module.exports = {
	get: function (req, res) {
		res.render("index", { kiran: "respond with a resource", title: "hoye galo" })
	},
}
