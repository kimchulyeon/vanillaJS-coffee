const app = () => {
  const $ = (element) => document.querySelector(element)

  // 메뉴 추가 입력
  const inputEl = $('#espresso-menu-name')
  const formEl = $('#espresso-menu-form')
  const ulEl = $('#espresso-menu-list')
  const menuCount = $('.menu-count')
  const confirmBtn = $('.input-submit')
  const editBtn = $('.menu-edit-button')
  const deleteBtn = $('.menu-delete-button')
  const count = []

  // 메뉴 추가 과정 (중복 제거 함수)
  const menuAddProcess = () => {
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
    menuCount.innerText = `총 ${count.length}개` // 총 갯수 표시
    inputEl.value = '' // Input 빈칸으로 되돌리기
  }

  // 페이지 새로고침 막기
  formEl.addEventListener('submit', (e) => {
    e.preventDefault()
  })

  // Enter 눌렀을 때 이벤트
  inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputEl.value.length > 0) {
      menuAddProcess()
    }
  })

  // 확인 버튼 눌렀을 때 이벤트
  confirmBtn.addEventListener('click', () => {
    if (inputEl.value > 0) {
      menuAddProcess()
    }
  })
}

app()
