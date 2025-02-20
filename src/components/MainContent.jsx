const Comics = (props) => {
    const arrayComics = props.albi
    return (
        <section id="top-main">
            <div className="products">
                {
                    arrayComics.map((albo) => {
                        return (
                            <div className="card" key={albo.id}>
                                <a href="#"><img src={albo.thumb} alt="dc" /></a>
                                <h3>{albo.series}</h3>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}


export default Comics