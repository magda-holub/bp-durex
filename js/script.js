$("#layout_switch button").on("click", function () {
    $("#testLayout").removeClass("layout-0").removeClass("layout-1");
    $("body").addClass("mobile");
    console.log('mobile layout');
});
$("#layout_switch button:nth-child(2)").on("click", function () {
    $("#testLayout").addClass("layout-0");
    $("body.mobile").removeClass("mobile");
    console.log('3 column layout');
});
$("#layout_switch button:nth-child(3)").on("click", function () {
    $("#testLayout").addClass("layout-1");
    $("body.mobile").removeClass("mobile");
    console.log('4 column layout');
});

function revealer() {
    let button = document.getElementById('bp-revealer')
    let content = document.getElementById('bp-content')

    let toggle = function (element) {
        element.classList.toggle('is-visible');
    };

    document.addEventListener('click', function (event) {
        if (!event.target.classList.contains('toggle')) return;
        event.preventDefault();

        let content = document.querySelector(event.target.hash);
        if (!content) return;

        toggle(content);

    }, false);

    button.addEventListener('click', function handleClick(){
        let initialText = 'Zobrazit více';

        if (button.textContent.toLocaleLowerCase().includes(initialText.toLowerCase())) {
            button.textContent = 'Zobrazit méně';
        } else {
            button.textContent = initialText;
        }
    });
}; revealer()