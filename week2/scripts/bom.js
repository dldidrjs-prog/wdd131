// 변수들 선택, 할당. input, button, list
const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('#list')


button.addEventListener('click', function() {
	if (input.value.trim() !== '') {

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);

        input.value = '';
        // 입력 후, 입력창이 초기화됨. 이건 입력할때만 작동. 
        // 삭제랑 상관이 없는부분이라.

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
            // 삭제후, 입력창에 포커스가 가도록 함.(커서)
        });



	}

    input.focus();
    // if문 밖에 있으면, 공백만 입력시에도 커서가 입력창에 유지(입력이 잘 됐던 안됐던 상관없음)
    // if문 안에 있으면, 입력이 잘 됐을떄만 커서가 입력창에 유지
    // 즉 공백 입력했으면 커서가 입력창이 아닌 버튼에 가있음.


});
