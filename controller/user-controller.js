const User = require('../model/userSchema')
module.exports.signIn = (req, res) => {
    return res.render('signIn')
}

module.exports.signUp = (req, res) => {
    return res.render('signUp')
}

module.exports.createUser = async (req, res) => {

    if (req.body.password != req.body.confirm_password) {

        return res.redirect('back');
    }
    try {

        const user = await User.find({ email: req.body.email })

        if (user.length === 0) {

            await User.create(req.body)
                .then(() => {
                    return res.redirect('/user/signIn')
                })
                .catch((e) => {
                    console.log(e);
                    return res.redirect('back');
                })
        }

    } catch (error) {
        console.log(e);
        return res.redirect('back');
    }


}

module.exports.createSession = async (req, res) => {

    return res.redirect('/');
}

module.exports.destroySession = (req, res) => {

    req.logout(() => { });

    return res.redirect('/');
}