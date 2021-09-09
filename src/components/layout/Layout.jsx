import NavigationBar from '../Navigation/NavigationBar';
import Footer from '../footer/Footer';

export default function Layout({children}){
    return(
        <>
        <NavigationBar />
        {children}
        <Footer />
        </>
    );
}