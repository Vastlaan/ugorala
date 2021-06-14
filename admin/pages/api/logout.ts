import { withIronSession } from "next-iron-session";

async function logout(req, res){
    req.session.destroy()
    res.redirect(307, '/')
}

export default withIronSession(logout, {
    password: process.env.SESSION_SECRET,
    cookieName: 'ugorala_session',
    cookieOptions: {
        secure: process.env.NODE_ENV==='production'
    }
})