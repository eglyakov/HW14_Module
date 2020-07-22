class Main {
    constructor() {
        this.elem = document.createElement('main');
        this.elem.classList.add('main');
    }

    async get(page) {
        const self = this;

        return await fetch('/data/pages.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if(!data) return;
            data = data[page];

            self.elem.innerHTML = `
                <div class="container">
                    ${data.content}
                </div>
            `;
        });
    }

    init() {
        const self = this;

        let hash = location.hash.replace('#', '') || 'home';
        
        this.get(hash);

        window.addEventListener('hashchange', function() {
            hash = location.hash.replace('#', '');
            self.get(hash);
        });

        return this.elem;
    };
}

export default new Main().init();