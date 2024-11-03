/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    // Debounce function to prevent rapid, successive clicks
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Menu toggle function
    function toggleMenu(event) {
        event.preventDefault();
        const menu = document.getElementById('menu');
        const menuToggle = document.querySelector('.menuToggle');
        
        if (menu && menuToggle) {
            menu.classList.toggle('is-active');
            menuToggle.classList.toggle('is-active');
            // Optional: Toggle aria-expanded for accessibility
            menuToggle.setAttribute('aria-expanded', menu.classList.contains('is-active'));
        }
    }

    // Use event delegation on body to handle menu toggle clicks
    document.body.addEventListener('click', debounce(function(event) {
        const target = event.target.closest('.menuToggle');
        if (target) {
            toggleMenu(event);
        }
    }, 250)); // 250ms debounce time

    // Optional: Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const menu = document.getElementById('menu');
        const menuToggle = document.querySelector('.menuToggle');
        if (menu && menu.classList.contains('is-active') && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
            toggleMenu(event);
        }
    });

    // Optional: Handle escape key to close menu
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const menu = document.getElementById('menu');
            if (menu && menu.classList.contains('is-active')) {
                toggleMenu(event);
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var logoLink = document.getElementById('logo-link');
    
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // This enables smooth scrolling
            });
        });
    }
});