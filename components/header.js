class Header {
    init() {
        const elem = document.createElement('header');
        elem.classList.add('header');

        elem.innerHTML = `
            <div class="container">
                <div class="wrapper">

                    <div class="logo">
                        <a href="index.html"><img src="img/logo.png" alt="Лого компании"></a>
                    </div>

                    <div class="name_company"><h3>DJ Equipment</h3></div>

                    <div class="contacts">
                        <h4>Контакты:</h4>
                        <p>A1: +375-44-791-07-77<br /> 
                        Life: +375-25-602-06-66<br /> 
                        МТС: +375-33-391-88-88</p>
                    </div>

                </div>
            </div>
        `;

        return elem;
    };
}

export default new Header().init();