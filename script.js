let simbolsButton = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'del', 'caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter', 'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593;', ' shift', 'ctrl', 'win', 'alt', 'space', 'alt', '&#8592;', '&#8595;', '&#8594;', 'ctrl']

function doKeyboerdOnLoad() {
    let buttonsInKeyboard = ""
    for (let i = 0; i < simbolsButton.length; i++) {
        const regex = '[А-Яа-яЁё0-9\-\=]'
            // if (i == 14 | i == 28 || i == 41 || i == 54) {
            //     buttonsInKeyboard += `<div class = "clearfix"> </div>`
            // }


        if (simbolsButton[i].match(regex)) {
            buttonsInKeyboard += ` <div class="square-button button" data-letter="${simbolsButton[i]}">${simbolsButton[i]}</div>`
        } else if (simbolsButton[i] == 'backspace' || simbolsButton[i] == 'caps lock' || simbolsButton[i] == 'enter' || simbolsButton[i] == 'shift') {
            buttonsInKeyboard += ` <div class="double-button button" data-letter="${simbolsButton[i]}">${simbolsButton[i]}</div>`
        } else if (simbolsButton[i] == 'space') {
            buttonsInKeyboard += ` <div class="space-button button" data-letter="${simbolsButton[i]}">${simbolsButton[i]}</div>`
        } else {
            buttonsInKeyboard += ` <div class="square-button button" data-letter="${simbolsButton[i]}">${simbolsButton[i]}</div>`
        }

    }
    document.querySelector('.KEYBOARD').insertAdjacentHTML("beforeend", buttonsInKeyboard);
}

function doTextarea() {
    // document.querySelector('body').innerHTML = '<textarea name="text" id="text" class="textarea" cols="150" rows="10"></textarea>';
    document.querySelector('body').insertAdjacentHTML("beforebegin", '<div class="title"> RSS Виртуальная клавиатура </div><textarea name="text" id="text" class="textarea" cols="150" rows="10"></textarea><div class="KEYBOARD"></div>')
}

function doKeyboader() {

}

function loading() {
    doTextarea();
    doKeyboader();
    doKeyboerdOnLoad();
}
//document.addEventListener()
// class button {

//     constructor(buttonCode) {
//         this.buttonCode = String.fromCharCode(code);
//     }
// }
loading()