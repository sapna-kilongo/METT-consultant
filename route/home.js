const router = require("express").Router();
const sendMail = require('./mail');

router.get("/", (req, res) => {


    res.render('home')




});


router.post('/', (req, res) => {
    const { name, email, phone, message } = req.body;
    sendMail(email, name, phone, message, function (err, data) {
        if (err) {
            console.log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        console.log('Email sent!!!');
        return res.redirect("/METT")
    });


    // res.redirect('/METT')


})

module.exports = router;