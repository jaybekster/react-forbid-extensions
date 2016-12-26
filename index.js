(function() {
    const global = this;

    if (typeof (global.__REACT_DEVTOOLS_GLOBAL_HOOK__) === 'object') {
        Object.keys(global.__REACT_DEVTOOLS_GLOBAL_HOOK__).forEach((key) => {
            delete global.__REACT_DEVTOOLS_GLOBAL_HOOK__[key];
        });
    }
})();
