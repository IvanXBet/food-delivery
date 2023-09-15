import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import card from './modules/card';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () =>{
    const modalTimerId = setTimeout(()=> openModal(modalTimerId), 300000);

    tabs();
    timer();
    modal('[data-modal]', '.modal', modalTimerId);
    card();
    forms(modalTimerId);
    slider();
    calc();
});