const emailRegex = require('../helpers/emailRegex');
const passwordRegex = require('../helpers/passwordRegex')

const registrationController = (req, res) => {

    let { userName, email, password } = req.body;

    console.log(req.body.userName);
    console.log(req.body.email);
    console.log(req.body.password);

    // User Name Validation
    if (!userName) {
        return res.status(400).send("User Name Required");
    }

    // Email Validation
    else if (!email) {
        return res.status(400).send("Unique Email Required");
    }

    // Email Format Validation
    else if (!emailRegex(email)) {
        return res.status(400).send("Valid Email Required");
    }

    // Password Validation
    else if (!password) {
        return res.status(400).send("Password Required");
    }

    // Password Format Validation
    else if (!passwordRegex(password)){
        return res.status(400).send("Create Strong Password")
    }

    // Registration Successful
    else {
        return res.status(200).send("Registration Successful");
    }

};

module.exports = registrationController;
