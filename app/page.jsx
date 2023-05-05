import Feed from '@components/Feed'

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">AI-Powered Promps</span>
            </h1>
            <p className="desc text-center">
                PromptsGalore is an open-source AI prompting tool
            </p>
            <Feed />

        </section>
    )
}

export default Home