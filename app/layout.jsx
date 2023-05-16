import '@styles/global.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metdata = {
    title: "Promptopia",
    description: 'Discover and Share AI Prompts'
}

const RootLayout = ({ children }) => {
    return (
        <html>
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>

                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout