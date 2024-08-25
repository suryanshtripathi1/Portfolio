const contactmeController = require('../app/http/controllers/contactmeController')
const homeController = require('../app/http/controllers/homeController')

function initRoutes(app) {
    app.get('/', homeController().index)

    app.get('/contactme', contactmeController().index)
    app.post('/contactme', contactmeController().postsend)

    app.get('/about', homeController().about)

    app.get('/experience', homeController().experience)

    app.get('/projects', homeController().projects)

}

module.exports = initRoutes