import { useContext, useEffect } from 'react';
import AppContext from '../../store/appContext';

import Layout from './Layout';
import LoggedInLayout from './LoggedInLayout';
import PopupList from '../message/PopupList';

export default function GlobalLayout({children}){
    const {messages, isAuth,login}=useContext(AppContext);
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isAuth");
        if(!isAuth && isLoggedIn){
            const user = JSON.parse(localStorage.getItem("user"));
            login(user);
        }
        // eslint-disable-next-line
    }, [])
    console.log(isAuth);
    return(
        <div>
         <PopupList popups={messages}/>
        {!isAuth ? <Layout>{children}</Layout>
        :<LoggedInLayout>{children}</LoggedInLayout>}
        </div>
    );
}