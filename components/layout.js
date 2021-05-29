import Footer from './footer'
import Header from './header'
import NavBar from './navbar'

const Layout = props => (
    <>
        <div>
            <Header />
            <NavBar />
                <div style={{marginTop: "0%"}}>
                    {props.children}
                </div>
            <Footer />
        </div>
        <script src="/vendor/jquery/jquery.min.js"></script>
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/js/jqBootstrapValidation.js"></script>
        <script src="/js/contact_me.js"></script>
        <script src="/vendor/slick-master/slick/slick.js" type="text/javascript" charSet="utf-8"></script>
        <script src="/vendor/lightgallery-master/dist/js/lightgallery-all.min.js"></script>
        <script src="/vendor/select2/js/select2.min.js"></script>
        <script src="/js/custom.js"></script>


    </>
);

export default Layout;