// importar archivos para crear rutas
import Header from '../templates/Header';
import Home from  '../pages/Home';
import Coktel from '../pages/Coktel';
import Error404 from '../pages/Error404';

//crear rutas
//generar obj para definir las rutas
const routes = {
    '/': Home,
    '/:id': Coktel,
    '/contact': 'Contact',
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
};

export default router;