Router.configure({
    layoutTemplate: 'appLayout', 
});

Router.route('/', {
    action: function () {
        return this.render('mapa');
    },
});

Router.route('/hospital', {
    action: function () {
        return this.render('hospital');
    },
});