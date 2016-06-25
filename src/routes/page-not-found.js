
const ROUTE_404 = {
    path: '*',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../components/page-not-found')).default
        })
    }
}

export default ROUTE_404
