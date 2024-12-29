const cards = [
    { image: 'img/corgi.png', text: 'Прости, пупс, я погорячилась. Ты для меня так важен, и я хочу, чтобы ты это знал.' },
    { image: 'img/corgi2.png', text: 'Моё солнце, я знаю, что была неправа.Прости меня, пожалуйста.' },
    { image: 'img/corgi3.png', text: 'Прости, пупсик, что огорчила тебя. Мне очень жаль, и я обещаю быть лучше.' },
    { image: 'img/corgi4.png', text: 'Солнышко, мне тяжело это говорить, но я очень сожалею о том, что сделала.' },
    { image: 'img/corgi5.png', text: 'Мой пупс, я знаю, что иногда ошибаюсь. Ты можешь простить меня за это?' },
    { image: 'img/corgi6.png', text: 'Солнышко, ты моя радость, и я не хочу, чтобы между нами были обиды. Прости меня.' },
    { image: 'img/corgi7.png', text: 'Прости меня, пупсик, я не хотела тебя обидеть. Ты — мой свет в жизни.' },
    { image: 'img/corgi8.png', text: 'Моё солнце, извини, если я была грубой. Ты важен для меня больше всего на свете.' },
    { image: 'img/corgi9.png', text: 'Пупс, я была неправа. Пожалуйста, прими мои извинения, ты — моя любовь.' },
    { image: 'img/shiba10.png', text: 'Солнышко, я знаю, что это всего лишь слова, но мне искренне жаль.' },
    { image: 'img/corgi11.png', text: 'Мой милый пупс, я обещаю работать над собой. Прости меня за всё.' },
    { image: 'img/paws-colection.png', text: 'Солнышко, ты всегда для меня на первом месте. Прости, что иногда это выглядит иначе.' }
];


function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
}

window.onload = function () {
    const cardImageElement = document.getElementById('card-image');
    const cardTextElement = document.getElementById('card-text');

    const randomCard = getRandomCard();
    cardImageElement.src = randomCard.image;
    cardTextElement.textContent = randomCard.text;
};