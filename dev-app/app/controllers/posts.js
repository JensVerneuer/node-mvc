var di = require('../../../'), // mvcjs as node package
    Core = di.load('@{controllersPath}/core'),
    Promise = di.load('promise'),
    Posts;



Posts = Core.inherit({}, {
    before_create: function Posts_beforecreate(params) {
        // example model call
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                params.title = 'THIS IS AN MODEL CALL EXAMPLE';
                resolve(params);
            }, 0);
        });
    },
    action_create: function Core_create(params, data) {
        // currently
        var template, d1, d2;
        params.arr = new Array(40);
        if (params.id) {
            params.arr = new Array(parseInt(params.id));
        }
        d1 = new Date();
        template = this.renderFile('posts/index', params);
        d2 = new Date();
        template += ' Performance test: ' + (d2.getTime() - d1.getTime()) + 'ms';
        return template;
    },
    after_create: function (params, data) {


        return data;
    }


});


module.exports = Posts;