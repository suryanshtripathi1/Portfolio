function homeController() {
    return{
        index(req,res){
            res.render('home')
        },
        
        about(req,res){
            res.render('about')
        },

        projects(req,res){
            res.render('projects')
        },

        experience(req,res){
            res.render('experience')
        }
    }
}

module.exports = homeController