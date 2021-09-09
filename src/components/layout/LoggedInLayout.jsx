import LoggedInNavigationBar from '../Navigation/LoggedInNavigationBar';

export default function LoggedInLayout({children}){
    return(
        <>
        <LoggedInNavigationBar />
        {children}
        </>
    );
}