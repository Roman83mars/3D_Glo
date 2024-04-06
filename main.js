import { timer } from './src/modules/timer.js';
import { menu } from './src/modules/menu.js';
import { modal } from './src/modules/modal.js';
import { valid } from './src/modules/valid.js';
import { tabs } from './src/modules/tabs.js';
import { slider } from './src/modules/slider.js';
import { calc } from './src/modules/calc.js';
import { sendForm } from './src/modules/sendForm.js';

timer("8 april 2024")
menu()
modal()
valid()
tabs()
slider()
calc(100)
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendForm({
    formId: 'form3',
})
sendForm({
    formId: 'form2',
})