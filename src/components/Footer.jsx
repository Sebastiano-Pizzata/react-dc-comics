import fb from "/src/assets/img/footer-facebook.png"
import pr from "/src/assets/img/footer-periscope.png"
import pn from "/src/assets/img/footer-pinterest.png"
import tw from "/src/assets/img/footer-twitter.png"
import yt from "/src/assets/img/footer-youtube.png"



const Footer = function () {
    return (
        <footer>

            <section id="footer-top">
                <div className="container bg-logo">
                    <div>
                        <ul>
                            <li><a className="white" href="#">DC COMICS</a></li>
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Cimics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">News</a></li>
                            <li><a className="white" href="#">SHOP</a></li>
                            <li><a href="#">Shop DC</a></li>
                            <li><a href="#">Shop DC Collectibles</a></li>
                        </ul>
                    </div>





                    <div>
                        <ul>
                            <li><a className="white" href="#">DC</a></li>
                            <li><a href="#">Terms of use</a></li>
                            <li><a href="#">Privacy policy(New)</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Subscriptions</a></li>
                            <li><a href="#">Talent Workshops</a></li>
                            <li><a href="#">CPSC Certificates</a></li>
                            <li><a href="#">Ratings</a></li>
                            <li><a href="#">Shop Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a className="white" href="#">SITES</a></li>
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="footer-bottom">
                <div className="container flex">
                    <button>SIGN UP NOW!</button>

                    <ul>
                        <li><a href="#">FOLLOW US</a></li>
                        <figure>
                            <a href="#"><img src={fb} alt="fb" /></a>
                        </figure>
                        <figure>
                            <a href="#"><img src={tw} alt="tw" /></a>
                        </figure>
                        <figure>
                            <a href="#"><img src={yt} alt="yt" /></a>
                        </figure>
                        <figure>
                            <a href="#"><img src={pn} alt="pn" /></a>
                        </figure>
                        <figure>
                            <a href="#"><img src={pr} alt="pr" /></a>
                        </figure>

                    </ul>

                </div>
            </section>


        </footer>
    )
}

export default Footer