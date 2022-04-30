const app = () => {
  const $ = (element) => document.querySelector(element)

  // 메뉴 추가 입력
  const inputEl = $('#espresso-menu-name')
  const formEl = $('#espresso-menu-form')
  const ulEl = $('#espresso-menu-list')
  const menuCount = $('.menu-count')
  const count = []

  // 페이지 새로고침 막기
  formEl.addEventListener('submit', (e) => {
    e.preventDefault()
  })

  // Enter 눌렀을 때 이벤트
  inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputEl.value.length > 0) {
      const menuName = inputEl.value

      const menuItemListTemplate = (item) => {
        return `<li class='menu-list d-flex items-center py-2'>
      <span class='w-100 pl-2 menu-name'>${item}</span>
      <button
        type='button'
        class='bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button'>
          수정
      </button>
      <button
        type='button'
        class='bg-gray-50 text-gray-500 text-sm menu-remove-button'>
          삭제
      </button>
      </li>`
      }

      count.push(menuItemListTemplate(menuName)) // querySelectorAll로도 가능
      ulEl.innerHTML += menuItemListTemplate(menuName) // insertAdjacentHTML도 가능
      menuCount.innerText = `총 ${count.length}개`
      inputEl.value = ''
    }
  })
}

app()
