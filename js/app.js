console.log('App was loaded...');

const a = document.querySelectorAll('ul.list-unstyled.main a');
const ul = document.querySelectorAll('ul.list-unstyled.main ul');
let temp, flag = false;

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

    e.target.previousElementSibling ? temp === e.target.previousElementSibling && flag ? (e.target.previousElementSibling.classList.remove('open'), flag = false) : (e.target.previousElementSibling.classList.add('open'), flag = true) : null;
    e.target.classList.add('selected');
    temp = e.target.previousElementSibling;
}));
