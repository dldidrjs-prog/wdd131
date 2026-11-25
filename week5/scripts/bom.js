const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('#list')


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});


button.addEventListener('click', () => {
	if (input.value.trim() !== '') {

        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
	}
});

function displayList(item) {
    // 1. 요소 생성
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    // 2. 내용 입력
    li.textContent = item;
    deleteButton.textContent = '❌';

    // 3. 스타일 적용
    deleteButton.classList.add('delete');

    // 4. 요소 연결 및 화면에 표시
    li.append(deleteButton);
    list.append(li);

    // 5. 삭제 기능 구현
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}