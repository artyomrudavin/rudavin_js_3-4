// alert('hello world!');

var test = {
	createTitle: function() {
		var title = document.createElement('h3');
		title.classList.add('title');
		title.innerHTML = 'Тест по программированию';
		title.style.textAlign = 'center';
		title.style.marginTop = '20px';
		title.style.marginBottom = '50px';
		
		var body = document.body;
		body.insertBefore(title, body.children[0]);
	},

	createForm: function() {
		var form = document.createElement('form');
		form.setAttribute('action', '#');
		form.classList.add('form');
		
		var body = document.body;
		body.insertBefore(form, body.children[1]);
	},

	createQuestions: function() {
		var questionList = document.createElement('ol');
		questionList.style.marginLeft = '15%';

		var parent = document.querySelector('form');
		parent.appendChild(questionList);

		var question1 = document.createElement('li');
		question1.innerHTML = '<h5>Вопрос №1</h5>';
		var question2 = document.createElement('li');
		question2.innerHTML = '<h5>Вопрос №2</h5>';
		var question3 = document.createElement('li');
		question3.innerHTML = '<h5>Вопрос №3</h5>';

		questionList.appendChild(question1);
		questionList.appendChild(question2);
		questionList.appendChild(question3);
	},

	createAnswers: function() {
		var answer = document.createElement('div');
		answer.style.marginTop = '20px';
		answer.style.marginBottom = '20px';

		for (var i = 1; i <= 3; i++) {
			var label = document.createElement('label');
			var br = document.createElement('br');
			var input = document.createElement('input');
			input.type = 'checkbox';
			input.classList = 'checkbox';
			input.style.marginRight = '10px'
			var text = document.createTextNode('Вариант ответа №' + i);
			label.appendChild(input);
			label.appendChild(text);
			answer.appendChild(label);
			answer.appendChild(br);
		}

		var questionList = document.querySelectorAll('li');
		questionList[0].appendChild(answer);
		questionList[1].appendChild( answer.cloneNode(true) );
		questionList[2].appendChild( answer.cloneNode(true) );
	},

	createButton: function() {
		var button = document.createElement('button');
		button.innerHTML = 'Проверить мои результаты';
		button.classList = 'btn btn-primary';
		button.style.marginLeft = '40%';
		button.style.marginBottom = '50px';
		
		var parent = document.querySelector('form');
		parent.appendChild(button);
	}
}

test.createTitle();
test.createForm();
test.createQuestions();
test.createAnswers();
test.createButton();