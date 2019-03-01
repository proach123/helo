const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const { session } = req;
        const db = req.app.get('db');
        let takenUsername = await db.auth.check_username({username});
        takenUsername = +takenUsername[0].count;

        if(takenUsername !== 0){
            return (res.sendStatus(409))
        }
        
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let user = await db.auth.register(
            {username, password: hash});
            user = user[0];
            session.user = user;
        
        res.status(200).send('connected to our servers curator')
    }
}