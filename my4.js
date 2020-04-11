let notesField = document.getElementById('notes');
let addNoteField = document.getElementById('add-note');
let addButton = document.getElementById('add-button');
let textarea = addNoteField.querySelector('textarea');
let notesArr = [];

if (localStorage.getItem('notes')){
	notesArr = JSON.parse(localStorage.getItem('notes'));
}

addButton.addEventListener('click', () => {
	addNewNote(textarea.value);
	textarea.value = '';
});
window.addEventListener('load', loadNotes);

function addNewNote(text){
	save(text);
	createNote(text);
}

function deleteNote(){
	let arr = Array.from(notesField.children);
	let i = arr.indexOf(this.parentElement);
	notesArr.splice(i,1);
	notesField.removeChild(this.parentElement);

	localStorage.setItem('notes', JSON.stringify(notesArr));
}

function save(text) {
	notesArr.push(text);
	localStorage.setItem('notes', JSON.stringify(notesArr));
}

function loadNotes() {
	if (notesArr.length)
		for (let i = 0; i < notesArr.length; i++)
			createNote(notesArr[i]);
}

function createNote(text){
	let div = document.createElement('div');
	let p = document.createElement('p');
	let a = document.createElement('a');

	let nowtime = new Date();

	div.classList.add('note');
	p.innerHTML = text + '<br>' +nowtime.toLocaleString();
	a.href = '#';
	a.innerHTML = 'Удалить';
	a.classList.add('close');

	a.addEventListener('click', deleteNote);

	notesField.appendChild(div);
	div.appendChild(a);
	div.appendChild(p);
}