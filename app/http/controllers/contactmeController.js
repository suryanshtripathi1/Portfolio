const Contact = require('../../models/contact')

function contactmeController(){
    return{
        index(req,res){
            res.render('contactme')
        },
        postsend(req,res){
            const {name, email, message} = req.body
             //Request validation
             if (!name || !email ||!message) {
                req.flash('error', 'All fields are required!!')
                return res.redirect('/contactme')
            }
            //Store the message
            const contact = new Contact({
                name: name,
                email: email,
                message: message
            })
            contact.save().then((contact) => {
                return res.redirect('/')
            }).catch(err => {
                req.flash('error', 'Something is wrong!!')
                return res.redirect('contactme')
            })
        }
    }
}

module.exports = contactmeController