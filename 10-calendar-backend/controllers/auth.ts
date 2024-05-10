const { response } = require('express');

const crearUsuario = (req: any, res: any = response) => {  
    const { name, email, password } = req.body;

    if(name.length <= 3){
        return res.status(400).json({
            ok: false,
            msg: 'El nombre debe ser de 3 letras'
        })
    }

    res.json({
        ok: true,
        msg: 'Registro',
        name,
        email,
        password
    })
}

const loginUsuario = (req: any, res: any = response) => {  
    const { email, password } = req.body;

    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}

const revalidarUsuario = (req: any, res: any = response) => {  
    res.json({
        ok: true,
        msg: 'Renew'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarUsuario,
}