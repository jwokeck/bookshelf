// let book;
let books = document.querySelectorAll('.book');
let bookFile = [
	'Lord of the Flies',
	'Romeo and Juliet',
	'The Book Thief',
	'To Kill a Mockingbird',
	'1984',
	"Alice's Adventures in Wonderland",
	'Les Misérables',
	'The Odyssey',
	'The Grapes of Wrath',
	'A Tale of Two Cities',
];

for (const book of bookFile) {
	addBookFromFile(book);
}

function addBook() {
	let title = document.getElementById('input').value;
	let book = document.createElement('li');
	book.className = 'ui-state-default book';
	book.style.fontFamily = getFontFamily();
	let bookColors = getBookColors();
	book.style.color = bookColors[0];
	book.style.background = bookColors[1];
	book.style.borderColor = bookColors[1];
	book.style.minHeight = Math.floor(Math.random() * 51 + 150) + 'px';
	book.style.minWidth = Math.floor(Math.random() * 21 + 20) + 'px';
	book.innerHTML = title;
	document.querySelector('#inventory').appendChild(book);
}

function addBookFromFile(title) {
	let book = document.createElement('li');
	book.className = 'ui-state-default book';
	book.style.fontFamily = getFontFamily();
	let bookColors = getBookColors();
	book.style.color = bookColors[0];
	book.style.background = bookColors[1];
	book.style.borderColor = bookColors[1];
	book.style.minHeight = Math.floor(Math.random() * 51 + 150) + 'px';
	book.style.minWidth = Math.floor(Math.random() * 21 + 20) + 'px';
	book.innerHTML = title;
	document.querySelector('#inventory').appendChild(book);
}

// fonts are from Google Fonts imported on style.css
function getFontFamily() {
	const fontFamilyList = [
		'Andada Pro',
		'Chewy',
		'Cinzel Decorative',
		'Fredericka the Great',
		'Limelight',
		'Megrim',
		'Skranji',
		'Special Elite',
	];
	return fontFamilyList[Math.floor(Math.random() * fontFamilyList.length)];
}

// color lists go together
function getBookColors() {
	let num = Math.floor(Math.random() * 8);
	const bookColorList = [
		'DarkOliveGreen',
		'LightPink',
		'LightSeaGreen',
		'Maroon',
		'RoyalBlue',
		'Plum',
		'OldLace',
		'PeachPuff',
	];
	const fontColorList = [
		'GhostWhite',
		'DarkSlateGray',
		'MintCream',
		'GhostWhite',
		'AliceBlue',
		'Black',
		'DarkViolet',
		'MidnightBlue',
	];
	return [fontColorList[num], bookColorList[num]];
}

// allows you to drag books between shelves
$(function () {
	$('.shelf')
		.sortable({
			connectWith: '.shelf',
		})
		.disableSelection();
});

// allows you to drag a book over trashcan to delete
$(function () {
	$('#trash').droppable({
		drop: function (event, ui) {
			if (confirm('Do you want to delete this book?')) {
				ui.draggable.remove();
			}
		},
	});
});

const deleteShelf = document.querySelector('.fa-square-minus');
deleteShelf.addEventListener('click', () => {
	let shelves = document.querySelectorAll('#bookshelf .shelf');
	let num = shelves.length;
	if (confirm('Do you want to remove this shelf and all of its books?')) {
		document.querySelector('#bookshelf').removeChild(shelves[num - 1]);
	}
});

const addShelf = document.querySelector('.fa-square-plus');
addShelf.addEventListener('click', () => {
	let shelf = document.createElement('ul');
	shelf.className = 'shelf';
	document.querySelector('#bookshelf').appendChild(shelf);
	$(function () {
		$('.shelf')
			.sortable({
				connectWith: '.shelf',
			})
			.disableSelection();
	});
});
