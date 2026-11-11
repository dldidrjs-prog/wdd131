// 변수들 선택, 할당. input, button, list
const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('#list')

button.addEventListener('click', function() {
	if (input.value.trim() !== '') {

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        deleteButton.textContent = '❌';

        li.textContent = input.value;


        // li에 저장된 입력값에 x 버튼 추가하기.
        // 즉 li와 deletebutton이 합쳐진 하나의 요소가됨.
        li.append(deleteButton);


        // 하나가 된 li를 list(ul)에 추가한다.
        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
            // 삭제후, 입력창에 포커스가 가도록 함.(커서)
        });
        
        input.value = '';
        // 입력 후, 입력창이 초기화됨. 이건 입력할때만 작동. 
        // 삭제랑 상관이 없는부분이라.


	}

    input.focus();
    // if문 밖에 있으면, 공백만 입력시에도 커서가 입력창에 유지(입력이 잘 됐던 안됐던 상관없음)
    // if문 안에 있으면, 입력이 잘 됐을떄만 커서가 입력창에 유지
    // 즉 공백 입력했으면 커서가 입력창이 아닌 버튼에 가있음.


});
