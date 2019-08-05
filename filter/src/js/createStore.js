function createStore (state) {
    var innerState = state || {};
    var list = [];

    function getState (prop) {
        return innerState[prop];
    }

    function dispatch(action) {
        innerState[action.type] = action.value;
        list.forEach(function (ele) {
            ele();
        })
    }

    function subscribe (func) {
        list.push(func);
    }

    function unSubscribe (func) {
        list = list.filter(function (ele) {
            if (ele == func) {
                return false;
            }
            return true;
        })
    }

    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe,
        unSubscribe: unSubscribe
    }

}

var Store = createStore( { text: '', sex: 'a' } );
