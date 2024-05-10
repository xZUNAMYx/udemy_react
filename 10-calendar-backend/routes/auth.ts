/* 
    Rutas de usuarios / auth
    login=host + /api/auth    
    register=host + /api/auth/register
    renew=host + /api/auth/renew
*/

const { Router } = require('express');
const router = Router();

const { crearUsuario, loginUsuario, revalidarUsuario } = require('../controllers/auth');

router.post('/register', crearUsuario);

router.post('/', loginUsuario);

router.get('/renew', revalidarUsuario);

module.exports = router;
