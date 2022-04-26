import faker from 'faker';

const mount = (el) => {
    let message = `<div>You have 5 items in your card.</div>`;

    el.innerHTML = message;
};

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-card');

    if (el) {
        mount(el)
    }
}

export { mount };
