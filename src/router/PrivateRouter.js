import { Route, Routes} from 'react-router-dom';
import { HomeUser } from '../components/page/homeuser/HomeUser';


const PrivateRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={ <HomeUser /> }/>
            </Routes>
        </>
    );
}

export default PrivateRouter;