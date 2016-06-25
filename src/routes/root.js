import App from '../components/App'

const ROUTE_ROOT = {
    path: '/',
    component: require('../components/App').default,

    indexRoute: {
        getComponent: (nextState, cb) => {
            return require.ensure([], (require) => {
              cb(null, require('../components/login').default)
            })
        }
    },
    childRoutes: [
        require('./page-not-found').default
    ]
}

export default ROUTE_ROOT
