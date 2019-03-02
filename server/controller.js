const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const { session } = req;
        const db = req.app.get('db');
        let takenUsername = await db.check_username({username});
        takenUsername = +takenUsername[0].count;

        if(takenUsername !== 0){
            return (res.sendStatus(409))
        }
        
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let user = await db.register(
            {username, password: hash});
            user = user[0];
            session.user = user;
        
        res.status(200).send('connected to our servers curator')
    },
    login: async (req, res) =>{
        const {username, password} = req.body
            const {session} = req;
            const db = req.app.get("db");
            let user = await db.login({username})
            user = user[0]
            if (!user) {
                return (res.sendStatus(404))
            }
            let authenticated = bcrypt.compareSync(password, user.password);
            console.log({authenticated})
            if (authenticated) {
                delete user.password;
                session.user = user;
                console.log(session)
                res.status(200).send(session.user);
            } else {
                res.sendStatus(401);
            }
        },


    getUser: (req, res) => {
            const {user} = req.session;
            if (user){
                res.status(200).send(user)
            } else {
                res.sendStatus(401)
            }
        },



    destroySession: (req, res) => {
        console.log(req.session)
            req.session.destroy();
            console.log(req.session)

            res.sendStatus(200)
    }
}