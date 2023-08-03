import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../components/page/home/Home';
import { NavBar } from '../components/UI/organisms/navbar/NavBar';
import { Login } from '../components/page/login/Login'
import { Footer } from '../components/UI/organisms/footer/Footer';

const PublicRouter = () => {
    return (
        <>
            <NavBar/>
            <Routes >
                <Route path='/' element={<Home />}/>
                <Route path='/Login' element={<Login />}/>
                <Route path='*' element={<Navigate to={"/"} /> }/>
            </Routes>
            <Footer />
        </>
    );
}

export default PublicRouter;