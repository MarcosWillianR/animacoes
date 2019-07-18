import Loading from './modules/loading.js';
import initTextOpacity from './modules/textOpacity.js';

const loading = new Loading('[data-container]', '3');
loading.init();

initTextOpacity();
