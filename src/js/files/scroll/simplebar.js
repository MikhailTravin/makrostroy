// Подключение плагина из node_modules
import SimpleBar from 'simplebar';
// Подключение стилей из node_modules
import 'simplebar/dist/simplebar.css';

// Добавляем к блоку атрибут data-simplebar

//Simplebar
const simpleBarElement = document.querySelector(".spollers-menu__simplebar");
const mediaQuery = window.matchMedia("(max-width: 991.98px)");

function handleMediaQueryChange(e) {
	if (e.matches) {
		new SimpleBar(simpleBarElement, {
			autoHide: true,
			scrollbarMaxSize: 20
		});
	} else {
		if (simpleBarElement.SimpleBar) {
			simpleBarElement.SimpleBar.unMount();
		}
	}
}

handleMediaQueryChange(mediaQuery);
mediaQuery.addEventListener("change", handleMediaQueryChange);