var myMap;
let coords;


// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init); //событие ready объекта ymaps

function init() {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });



    // var clusterer = new ymaps.Clusterer({
    //     clusterDisableClickZoom: true,
    //     clusterOpenBalloonOnClick: true,
    //     // Устанавливаем стандартный макет балуна кластера "Карусель".
    //     clusterBalloonContentLayout: 'cluster#balloonCarousel',
    //     // Устанавливаем собственный макет.
    //     clusterBalloonItemContentLayout: customItemContentLayout,
    //     // Устанавливаем режим открытия балуна. 
    //     // В данном примере балун никогда не будет открываться в режиме панели.
    //     clusterBalloonPanelMaxMapArea: 0,
    //     // Устанавливаем размеры макета контента балуна (в пикселях).
    //     clusterBalloonContentLayoutWidth: 200,
    //     clusterBalloonContentLayoutHeight: 130,
    //     // Устанавливаем максимальное количество элементов в нижней панели на одной странице
    //     clusterBalloonPagerSize: 5
    //     // Настройка внешнего вида нижней панели.
    //     // Режим marker рекомендуется использовать с небольшим количеством элементов.
    //     // clusterBalloonPagerType: 'marker',
    //     // Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
    //     // clusterBalloonCycling: false,
    //     // Можно отключить отображение меню навигации.
    //     // clusterBalloonPagerVisible: false
    // });

    // map.geoObjects.add(clusterer);


    addListeners();

    // myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    //     hintContent: 'Собственный значок метки',
    //     balloonContent: 'Это красивая метка'
    // }, {
    //     // Необходимо указать данный тип макета.
    //     iconLayout: 'default#image',
    //     // Своё изображение иконки метки.
    //     iconImageHref: 'images/myIcon.gif',
    //     // // Размеры метки.
    //     iconImageSize: [30, 42]
    // });
    // let myPlacemark1 = new ymaps.Placemark([56.76, 37.64], {
    //     // Необходимо указать данный тип макета.
    //     iconLayout: 'default#image',
    //     // Своё изображение иконки метки.
    //     iconImageHref: 'images/myIcon.gif',
    //     // Размеры метки.
    //     iconImageSize: [38, 50]
    // });
    // myMap.geoObjects.add(myPlacemark);
    // // myMap.geoObjects.add(myPlacemark1);



}



//дописать-------------------------------------------------
function validateForm() {
    return true;
}



function addListeners() {
    myMap.events.add('click', function (event) {
        openModal(event);
    });

    const form = document.getElementById('sendForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }

        myPlacemark = new ymaps.Placemark(coords, {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            // iconImageHref: 'images/myIcon.gif',
            // // Размеры метки.
            iconImageSize: [30, 42]
        });
        myMap.geoObjects.add(myPlacemark);

        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    })
}

function openModal(event) {
    let posX = event.getSourceEvent().originalEvent.domEvent.originalEvent.clientX;
    let posY = event.getSourceEvent().originalEvent.domEvent.originalEvent.clientY;
    coords = event.get('coords');//координаты пина

    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    modal.style.left = `${posX}px`;
    modal.style.top = `${posY}px`;


}