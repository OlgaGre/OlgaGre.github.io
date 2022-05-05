let simbolsButton = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'del', 'caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter', 'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593;', ' shift', 'ctrl', 'win', 'alt', 'space', 'alt', '&#8592;', '&#8595;', '&#8594;', 'ctrl']
let letterArr = [];
let simbolArr = [];
let controlKeys = [];

function doKeyboerdOnLoad() {
    let buttonsInKeyboard = ""
    for (let i = 0; i < simbolsButton.length; i++) {
        const regexLetter = '[А-Яа-яЁё]';
        const regextNum = '[0-9\-\=]'
        if (simbolsButton[i].match(regexLetter)) {
            buttonsInKeyboard += ` <div class="square-button button letter" data-letter="${simbolsButton[i]}">${simbolsButton[i]}</div>`
        } else if (simbolsButton[i].match(regextNum)) {
            buttonsInKeyboard += ` <div class="square-button button number" data-letter="${simbolsButton[i]}">${simbolsButton[i]}</div>`
        } else if (simbolsButton[i] == 'backspace' || simbolsButton[i] == 'caps lock' || simbolsButton[i] == 'enter' || simbolsButton[i] == 'shift') {
            buttonsInKeyboard += ` <div class="double-button button" data-letter="${simbolsButton[i]}">${simbolsButton[i]}</div>`
        } else if (simbolsButton[i] == 'space') {
            buttonsInKeyboard += ` <div class="space-button button" data-letter="${simbolsButton[i]}">${simbolsButton[i]}</div>`
        } else {
            buttonsInKeyboard += ` <div class="square-button button" data-letter="${simbolsButton[i]}">${simbolsButton[i]}</div>`
        }

    }
    letterArr = document.getElementsByClassName('letter')
    document.querySelector('.KEYBOARD').insertAdjacentHTML("beforeend", buttonsInKeyboard);
}

function doTextarea() {
    // document.querySelector('body').innerHTML = '<textarea name="text" id="text" class="textarea" cols="150" rows="10"></textarea>';
    document.querySelector('body').insertAdjacentHTML("afterbegin", '<div class="title"> RSS Виртуальная клавиатура </div><textarea name="text" id="text" class="textarea" cols="150" rows="10"></textarea><div class="KEYBOARD"></div>')
}


function loading() {
    doTextarea();
    doKeyboerdOnLoad();
}

function addActiveClass(letterArr) {

}
loading()
    //console.log(letterArr);