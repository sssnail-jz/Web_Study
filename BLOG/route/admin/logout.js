module.exports = function(req,res){
	req.session.destroy(function(){
		res.clearCookie('connect.sid');
		res.redirect('/admin/login');
		req.app.locals.userInfo = null;
	});
}