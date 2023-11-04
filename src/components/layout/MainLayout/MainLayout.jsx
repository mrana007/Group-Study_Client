import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const MainLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;