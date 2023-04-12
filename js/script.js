//revealer
function revealer() {
    var button = document.getElementById('bpToggle')

    var toggle = function (element) {
        element.classList.toggle('is-visible');
    };

    document.addEventListener('click', function (event) {
        if (!event.target.classList.contains('toggle')) return;
        event.preventDefault();

        var content = document.querySelector(event.target.hash);
        if (!content) return;

        toggle(content);

    }, false);

    button.addEventListener('click', function handleClick(){
        var initialText = document.getElementById('bpToggle--text__collapsed').textContent;

        if (button.textContent.toLocaleLowerCase().includes(initialText.toLowerCase())) {
            button.textContent = document.getElementById('bpToggle--text__expanded').textContent;
        } else {
            button.textContent = initialText;
        }
    });
}; revealer();