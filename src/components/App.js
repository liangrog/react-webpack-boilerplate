import React from 'react'

require('../assets/sass/main.scss')

class App extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

export default App;
