const article = document.querySelector('article');
// article이란 변수명을 설정, document.querySelector('article')를 통해 
// HTML 문서에서 article 요소를 선택하여 변수에 할당

article.innerHTML = 'innerHTML supports <strong>HTML</strong> tags. The textContent property does not.';
// .innerHTML은 HTML 태그를 지원하지만, .textContent는 HTML 태그를 지원하지 않음
// 그리고 내용을 바꿀 때, innerHTML은 기존의 내용을 지우고 새로 작성하지만, 
// textContent는 기존의 내용을 지우지 않고 새로 작성함 
article.style.textAlign = 'right';
// style은 CSS 속성을 직접적으로 조작할 수 있음.
// .style.속성명 = '값' 형식으로 사용가능
article.classList.add('active');
// classList는 HTML 요소의 class 속성을 조작할 수 있음
// 즉, classList.add('클래스명')으로 해당 요소에 클래스를 추가할 수 있음


const paragraph = document.createElement('p');
article.append(paragraph, 'Hello World Addition!');
// article.remove(); it removes the element(article oneself) from the DOM
// 즉, article 자체를 DOM에서 제거함

// article.removeChild(paragraph); it removes only the child element from the DOM
// 즉, article 안에 있는 paragraph만 제거하고 article은 그대로 남아있음