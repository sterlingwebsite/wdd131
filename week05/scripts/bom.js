const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// W05 Learning Activity: JavaScript localStorage
button.addEventListener('click', () => {
    if (input.value !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();

        // const li = document.createElement('li');
        // const deleteButton = document.createElement('button');

        // // attributes, properties
        // li.textContent = input.value;
        // deleteButton.textContent = '❌';
        // deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        // // removes the li element when clicked
        // deleteButton.addEventListener('click', function () {
        //     list.removeChild(li);
        //     input.focus();
        // });

        // // Appended children
        // li.append(deleteButton);
        // list.append(li);

        // // clears the input value
        // input.value = '';

        // // focus (active cursor) sent to the input element
        // input.focus();
    }
});

// Create the displayList defined function that receives one parameter named item. Put all the code that builds a list item from the previous button click event listener into this new displayList function and use the item parameter as the input. A deleteChapter function will need to be called within the delete button click event to remove the chapter from the array and localStorage.
function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });
    console.log('I like to type out code myself to help me understand. Thank you. :)')
}

// Define the getChapterList function to get the localStorage item. No parameter is needed. Since this function returns to an awaiting array, you will need to use JSON.parse on the string.
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList
let chaptersArray = getChapterList() || [];

// Now populate the displayed list of chapters. Use a forEach on the chaptersArray to process each entry named chapter. Use an arrow function within the loop to call a new defined function named displayList and pass it the argument of chapter. That way each entry will be processed (i.e., appended to the list).
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Define the setChapterList function to set the localStorage item that you have already named. Use JSON.stringify() to stringify the array.
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Finally, define the deleteChapter function with a parameter named chapter that does three things. Reformat the chapter parameter to get rid of the ❌ that is passed on the end of the chapter string when you called the deleteChapter function. Use string.slice() method to extract the last character. Redefine the chaptersArray array using the array.filter method to return everything except the chapter to be removed. Call the setChapterList function to update the localStorage item.
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}