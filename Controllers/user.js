const User = require("../models/user");

module.exports.renderSignupForm = (req,res)=>{
    res.render("user/signup.ejs");
};

module.exports.Signup = async(req,res)=>{
    try{
     const {username,email,password} = req.body;
     let newUser = new User({email,username});
     let registeredUser =await User.register(newUser,password);
    
     req.login(registeredUser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Welcome to WanderLust!");
        res.redirect("/listing");
     })
}catch(e){
    req.flash("error",e.message);
    res.redirect("/signup");
}
};

module.exports.renderLoginForm = (req,res)=>{
    res.render("user/login.ejs");
};

module.exports.Login = async(req,res)=>{
    req.flash("success","Welcome to WanderLust!");
    let redirectUrl = res.locals.redirectUrl || "/listing";
    res.redirect(redirectUrl);
};

module.exports.Logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You're logged out!");
        res.redirect("/listing");
    })
};