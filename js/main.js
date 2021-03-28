var menu = document.getElementById('hamburger-menu');
        var nav = document.getElementById('nav');
        var close = document.getElementById('close');

        close.addEventListener('click', function(e){
            nav.classList.add('hide-nav-mobile');
            e.preventDefault();
        });

        menu.addEventListener('click', function(e){
            nav.classList.toggle('hide-nav-mobile');
            e.preventDefault();
        });