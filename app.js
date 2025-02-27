function App() {
    try {
        return (
            <div className="portfolio-container" data-name="app">
                <Header />
                <CategoryList />
                <Profile />
                <div className="flex gap-14 mt-12">
                    <div className="w-1/2" data-name="left-column">
                        <Education />
                        <Skills />
                    </div>
                    <div className="w-1/2" data-name="right-column">
                        <Experience />
                    </div>
                </div>
                <Portfolio />
                <Contact />
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
