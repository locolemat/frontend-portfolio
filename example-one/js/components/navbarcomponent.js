NavbarComponent = {
    template: `<nav class="navbar navbar-expand-lg navbar-light mt-2"
    style="border-radius: 0.75em;     background-color: rgba(255,255,255, 0.3) !important;">
    <div class="container-fluid">
        <a class="navbar-brand d-inline-flex flex-row text-white " href="index.html">
            <img src="img/logo.png">
            <h5 class="mx-2  align-self-center">Time Studio</h5>
        </a>
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
            <span class="navbar-toggler-icon  text-white "></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">

            <ul class="navbar-nav ml-auto  mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="#">О нас</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="catalogue.html">Проекты</a>
                </li>

            </ul>

        </div>
    </div>
</nav>`
}