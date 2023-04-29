const Event = require('../model/eventSchema')
const User = require('../model/userSchema')
module.exports.eventPage = async (req, res) => {
    try {
        console.log(res.locals.user.role);
        const eventFetchedDb = await Event.find({});
        const userFetchedDb = await User.find({});
        if (eventFetchedDb) {
            return res.render('event', {
                events: eventFetchedDb,
                userrole: res.locals.user.role,

            });
        }
    } catch (error) {
        console.log(error);
        return res.redirect('/')
    }

}

module.exports.create = async (req, res) => {
    try {
        console.log(req.body);
        const eventFetchedDb = await Event.create(req.body);
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return res.redirect('back')
    }
}

module.exports.filter = async (req, res) => {
    console.log("filter loaded");
    try {
        const eventFetchedDb = await Event.find({ department: req.params.id })
        return res.render('event', {
            events: eventFetchedDb,
            userrole: res.locals.user.role
        })
    } catch (error) {
        console.log(error);
        return res.redirect('back')
    }
}

module.exports.handleRegistration = async (req, res) => {
    try {

        const eventFetchedDb = await Event.findById(req.params.id1);
        if (eventFetchedDb) {
            const num = eventFetchedDb.participants;
            eventFetchedDb.participants = num + 1;
            const finalres = await eventFetchedDb.save();
            const userFetchedDb = await User.findById(req.params.id2);
            console.log(userFetchedDb.id);

            eventFetchedDb.users.push(userFetchedDb.id);
            const res = await eventFetchedDb.save();

        }
        return res.redirect('back')
    } catch (error) {
        console.log(error);
    }
}

module.exports.deleteEvent = async (req, res) => {
    try {

        const eventFetchedDb = await Event.findByIdAndDelete(req.params.id);
        return res.redirect('back');
    } catch (error) {
        console.log(error);
    }
}