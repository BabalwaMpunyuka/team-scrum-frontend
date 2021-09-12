import { useContext } from 'react';
import AppContext from '../../store/appContext';

import NavigationBar from '../Navigation/NavigationBar';
import Footer from '../footer/Footer';

export default function Layout({children}){
    const {isAuth}=useContext(AppContext);
    return(
        <div>
        <NavigationBar />
        {children}
        <Footer />
        </div>
    );
}