console.log('App was loaded...');

const a = document.querySelectorAll('ul.list-unstyled.main a');
const ul = document.querySelectorAll('ul.list-unstyled.main ul');

[].map.call(a, (el) => el.addEventListener('click', (e) => {
    e.preventDefault();
    [...a].map(el => el.classList.remove('selected'));
    !e.target.parentNode.parentNode.classList.contains('open')
        ?
        [...ul].map(el => el.classList.remove('open'))
        :
        [...ul].map(el => el === e.target.parentNode.parentNode
            ?
            [...el.children].map(elem => [...elem.children].map(element => element.previousElementSibling
                ? (
                    element.previousElementSibling.classList.remove('open'),
                    [...element.previousElementSibling.children].map(el => [...el.children].map(elem => elem.previousElementSibling ? elem.previousElementSibling.classList.remove('open') : null))
                ) :
                null))
            :
            null);

    e.target.previousElementSibling ? e.target.previousElementSibling.classList.add('open') : null;
    e.target.classList.add('selected');
}));
