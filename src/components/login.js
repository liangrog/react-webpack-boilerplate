import React from 'react'
import ReactDom from 'react-dom'
import Rx from 'rx-lite'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            message: ''
        }

        //react recommended way of scope binding
        //although arrow function can do the same
        this.setEmail = this.setEmail.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.setMessage = this.setMessage.bind(this)
        this.rxBindSubmit = this.rxBindSubmit.bind(this)
    }
    setEmail(e) {
        this.setState({email: e.target.value})
    }

    setPassword(e) {
        this.setState({password: e.target.value})
    }

    setMessage(type) {
        switch (type) {
            case 'error':
                this.setState({message: "The email and password you entered don't match."})
                break
            default:
                this.setState({message: ''})
        }
    }

    componentDidMount() {
        this.rxBindSubmit()
    }

    rxBindSubmit() {
        var loginBtn = document.getElementById('login')
        var clickStream = Rx.Observable.fromEvent(loginBtn, 'click')
        clickStream.subscribe(e => {
            this.setMessage();
            //put your login methods here, e.g. auth.login(this.state.email, this.state.password)
            if (true) {
                this.context.router.push('/');
            } else {
                this.setMessage('error');
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="absolute-center login-form">
                        <div className="col-sm-12 col-md-10 col-md-offset-1">
                        {this.state.message ? <div className='alert alert-info'>{this.state.message}</div> : ''}
                            <form id="login-form">
                                <div className="form-group input-group">
                                    <span className="input-group-addon">
                                        <i className="glyphicon glyphicon-envelope"></i>
                                    </span>
                                    <input className="form-control"
                                        onChange={this.setEmail}
                                        type="text"
                                        name="email"
                                        value={this.state.email}
                                        placeholder="Email"/>
                                </div>
                                <div className="form-group input-group">
                                    <span className="input-group-addon">
                                        <i className="glyphicon glyphicon-lock"></i>
                                    </span>
                                    <input className="form-control"
                                        onChange={this.setPassword}
                                        type="password"
                                        name="password"
                                        placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <button type="button" id="login" className="btn btn-def btn-block">Login</button>
                                </div>
                                <div className="form-group text-center">
                                    <a href="#">Forgot Password</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.contextTypes= {
    router: React.PropTypes.object
}

/**
 * three ways to redirect in modules:
 * 1. import browserHistory then browserHistory.push but if using different history will require code change
 * 2. use withRouter then access via this.props.router
 * 3. use context as above
 */

export default Login;
