import dc from "/src/assets/img/buy-comics-digital-comics.png"
import merch from "/src/assets/img/buy-comics-merchandise.png"
import shop from "/src/assets/img/buy-comics-shop-locator.png"
import sub from "/src/assets/img/buy-comics-subscriptions.png"
import buy from "/src/assets/img/buy-dc-power-visa.svg"

const Main = function () {
    return (
        <main>
            <section id="top-main">
                <div className="container">
                    <p>--Content goes here--</p>

                </div>
            </section>
            <section id="bottom-main">
                <div className="container flex">
                    <figure>
                        <img src={dc} alt="dc" />
                        <span>DIGITAL COMICS</span>
                    </figure>

                    <figure>
                        <img src={merch} alt="merch" />
                        <span>DC MERCHANDISE</span>
                    </figure>

                    <figure>
                        <img src={sub} alt="sub" />
                        <span>SUBSCRIPTION</span>
                    </figure>

                    <figure>
                        <img src={shop} alt="shop" />
                        <span>COMIC SHOP LOCATOR</span>
                    </figure>

                    <figure>
                        <img src={buy} alt="buy" />
                        <span>DC POWER VISA</span>
                    </figure>

                </div>

            </section>
        </main>
    )

}

export default Main