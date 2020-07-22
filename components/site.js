import load from './load.js';

class Site {    
    static init() {
        const site = document.createElement('div');
        site.classList.add('site');

        document.body.appendChild(site);

        load('header')
        .then(function(module) {
            site.appendChild(module.default);

            load('nav')
            .then(function(module) {
            site.appendChild(module.default);

                load('main')
                .then(function(module) {
                    site.appendChild(module.default);

                    load('footer')
                    .then(function(module) {
                        site.appendChild(module.default);
                    });
                });
            });
        });
    };
}

Site.init();