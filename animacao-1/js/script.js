import Loading from './modules/loading.js';
import TextLoading from './modules/textLoading.js';

const loading = new Loading('[data-container]', '3');
loading.init();

const textLoading = new TextLoading('[data-text-container]', '6');
textLoading.init();