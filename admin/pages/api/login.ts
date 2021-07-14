import { withIronSession} from 'next-iron-session'


async function handler(req, res){

    const {email, password} = req.body

    try{    

        const response = await fetch(`${process.env.STRAPI_URL}/auth/local/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({identifier: email, password})
        })

        const user = await response.json()
        
        if(!user){
            return res.status(200).json({status: "Error, wrong credentials"})
        }

        req.session.set('user', {
            jwt: user.jwt,
            username: user.user.username
        })
        await req.session.save();

        return res.status(200).json({user: {jwt: user.jwt, isLogged: true, username: user.user.username}})

    }catch(e){
        console.error(e)
        res.status(200).json({status: "Success"})

    }
}

export default withIronSession(handler, {
    password: process.env.SESSION_SECRET,
    cookieName: 'ugorala_session',
    cookieOptions: {
        secure: false   // should be: process.env.NODE_ENV==='production'
    }
})