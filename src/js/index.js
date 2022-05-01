const app = () => {
  const $ = (element) => document.querySelector(element)

  // 메뉴 추가 입력
  const inputEl = $('#espresso-menu-name')
  const formEl = $('#espresso-menu-form')
  const ulEl = $('#espresso-menu-list')
  const confirmBtn = $('.input-submit')
  const menuCount = $('.menu-count')

  // 메뉴 갯수 업데이터 (중복 제거 함수)
  const updataMenuCount = () => {
    const count = ulEl.querySelectorAll('li').length
    menuCount.innerText = `총 ${count}개` // 총 갯수 표시
  }
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

    ulEl.insertAdjacentHTML('beforeend', menuItemListTemplate(menuName)) // insertAdjacentHTML도 가능
    updataMenuCount()
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

  // 수정 삭제 버튼 (이벤트 위임)
  ulEl.addEventListener('click', (e) => {
    // 수정 버튼
    if (e.target.className.includes('menu-edit-button')) {
      const MENU_NAME = e.target.closest('li').querySelector('.menu-name')
      let newMenu = prompt('메뉴명을 수정하세요', MENU_NAME.innerText)
      MENU_NAME.innerText = newMenu
    }
    // 삭제 버튼
    if (e.target.className.includes('menu-remove-button')) {
      const okDelete = confirm('메뉴를 삭제하시겠습니까?')
      if (okDelete) {
        // e.target.closest('li').style.display = 'none'
        e.target.closest('li').remove()
        updataMenuCount()
      }
    }
  })
}

app()
