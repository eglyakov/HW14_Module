class Footer {
    init() {
        const elem = document.createElement('footer');
        elem.classList.add('footer');
        
        elem.innerHTML = `
            <div class="container">
                <div class="wrapper">

                    <div class="logo">
                        <a href="index.html"><img src="img/logo.png" alt="Лого компании"></a>
                    </div>

                    <p>Пн—пт: 10:00 - 19:00<br />
                    Сб—вс: 10:00 - 18:00<br />
                    Доставка товаров: 10:00-18:00</p>

                    <p>A1: +375-44-791-07-77<br /> 
                    Life: +375-25-602-06-66<br /> 
                    МТС: +375-33-391-88-88</p>

                    <p>Свидетельство о гос. регистрации № 1012445555,<br /> 
                    решение от 26.07.2007г., выдано Минским городским<br /> 
                    исполнительным комитетом 08.08.2007г. УНП 101246655</p>

                </div>
            </div>
        `;

        return elem;
    };
}

export default new Footer().init();