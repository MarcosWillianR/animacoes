import ScrollAnim from './modules/ScrollAnim';
import ModalMenu from './modules/ModalMenu';
import scrollSuave from './modules/ScrollSuave';

const scrollAnim = new ScrollAnim(['[data-anim]', '[data-anim-2]']);
scrollAnim.init();

const modalMenu = new ModalMenu('[data-mobile="container"]', '[data-mobile="button"]', '[data-mobile="content"]');
modalMenu.init();

scrollSuave();
