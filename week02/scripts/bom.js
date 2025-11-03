const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // attributes, properties
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        // removes the li element when clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Appended children
        li.append(deleteButton);
        list.append(li);

        // clears the input value
        input.value = '';

        // focus (active cursor) sent to the input element
        input.focus();
    }
});