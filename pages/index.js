function ListWrapper() {
	function addItem() {
		let item = ListItem(title, text);
		console.log(item);
		document.getElementById('list').appendChild(item);
	}

	return (
		<>
			<h1>TO-DO List</h1>
			<Adder addItem={addItem}></Adder>
			<br></br>
			<hr></hr>
			<List></List>
		</>
	);
}

function Adder(props) {
	function changeList() {
		props.addItem(document.getElementById('title').value, document.getElementById('text').value);
	}

	return (
		<div>
			<input type='text' placeholder='Title' id='title'></input>
			<input type='text' placeholder='Text' id='text'></input>
			<button onClick={changeList}>Add</button>
		</div>
	);
}

function List() {
	return <ul id='list'></ul>;
}

function ListItem(title, text) {
	let titleItem = document.createElement('h3');

	titleItem.id = title.value;
	titleItem.innerText = title.value;

	let textItem = document.createElement('p');

	textItem.id = text.value;
	textItem.innerText = text.value;

	let item = document.createElement('li');
	let br = document.createElement('br');
	let hr = document.createElement('hr');

	item.id = title.value;
	item.appendChild(titleItem);
	item.appendChild(textItem);
	item.appendChild(br);
	item.appendChild(hr);
	item.appendChild(br);

	return item;
}

function WebPage() {
	return <ListWrapper></ListWrapper>;
}

export default WebPage;
