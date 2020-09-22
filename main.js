var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
            } 

            const sections = [
                document.getElementById('intro'),
                document.getElementById('info'),
                document.getElementById('reviews'),
                document.getElementById('contact')
            ]

            const getActiveSection = () => {

            let sectionNum = sections[0];

            let rectValue = 1000000;

            for ( let section of sections ) {

                let rect = section.getBoundingClientRect();

                if ( rect.top > -300 & rect.top < rectValue ) {

                    rectValue = rect.top;

                    sectionNum = section;

            }

            }

            return sectionNum;

            };

            const addActiveClass = () => {

            window.addEventListener('scroll', function(){

            // Add Active Class To Section

            let _section = getActiveSection();

            _section.classList.add('active-section');

            for ( let section of sections ) {

                if ( section.id != _section.id && section.classList.contains('active-section') ) {

                section.classList.remove('active-section');

                }

            }

            // Add Active Class To Navigation Links

            const links = document.querySelectorAll('.nav-btn');

            let _link = document.querySelector(`a[data-nav='${_section.id}']`);

            _link.classList.add('active-link');

            for ( let link of links ) {

                if ( link.dataset.nav != _link.dataset.nav && link.classList.contains('active-link') ) {
                
                link.classList.remove('active-link');
                
                }

            }

            })

            }


            // Scroll to anchor ID using scrollTO event

            const clickToScroll = () => {

            for ( let _section of sections ){

            const listId = _section.id;

            let _link = document.querySelector(`a[data-nav='${listId}']`);

            _link.addEventListener("click", function() {

            _section.scrollIntoView ({

                behavior: 'smooth'

                });

            });

            }

            }
            getActiveSection();
            addActiveClass();
            clickToScroll();

            window.addEventListener('scroll', function(){
                var nav = document.getElementById('nav');
                nav.classList.toggle('active-nav', window.scrollY > 200)
            })
            window.addEventListener('scroll', function(){
                var nav = document.getElementById('nav');
                nav.classList.toggle('scale', window.scrollY > 120 && window.scrollY < 200)
            })