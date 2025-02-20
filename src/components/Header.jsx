import logo from "../assets/img/dc-logo.png";
import NavBar from "./NavBar"

const navLinks = [
    { id: 1, a: "#", text: "Characters" },
    { id: 2, a: "#", text: "Comics" },
    { id: 3, a: "#", text: "Movies" },
    { id: 4, a: "#", text: "TV" },
    { id: 5, a: "#", text: "Games" },
    { id: 6, a: "#", text: "Collectibles" },
    { id: 7, a: "#", text: "Videos" },
    { id: 8, a: "#", text: "Fans" },
    { id: 9, a: "#", text: "News" },
    { id: 10, a: "#", text: "Shop" },
]

const Header = function () {
    return (
        <header>
            <div className="container flex">

                <figure>
                    <img src={logo} alt="Logo" />
                </figure>
                <NavBar links={navLinks} />
            </div>
        </header>
    )
}

export default Header