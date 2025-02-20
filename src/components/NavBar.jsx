const NavBar = (props) => {
    const arrayLinks = props.links
    return (
        <nav>
            <ul>
                {
                    arrayLinks.map((link) => {
                        const { id, a, text } = link
                        return (
                            <li key={id}><a href={a}>{text}</a></li>
                        )
                    }
                    )
                }
            </ul>
        </nav>
    )
}

export default NavBar