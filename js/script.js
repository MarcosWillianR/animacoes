import ModalMenu from './modules/ModalMenu.js';
import ScrollAnim from './modules/ScrollAnim.js';

const modalMenu = new ModalMenu('[data-mobile="container"]', '[data-mobile="button"]', '[data-mobile="content"]');
modalMenu.init();

const scrollAnim = new ScrollAnim(['[data-anim]', '[data-anim-2]']);
scrollAnim.init();
