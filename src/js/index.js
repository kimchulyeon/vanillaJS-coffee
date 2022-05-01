const app = () => {
  const $ = (el) => document.querySelector(el)
  const inputEl = $('.input-field')
  const formEl = $('#espresso-menu-form')
  const ulEl = $('#espresso-menu-list')
  const addBtn = $('.input-submit')

  const menuItem = (el) => {
    return `
    <li class='menu-list d-flex items-center py-2'>
      <span class='w-100 pl-2 menu-name'>${el}</span>
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
  const addMenuProcess = () => {
    if (inputEl.value > 0) {
      ulEl.insertAdjacentHTML('beforeend', menuItem(inputEl.value))
      inputEl.value = ''
    }
  }

  formEl.addEventListener('submit', (e) => {
    e.preventDefault()
  })

  // ENTER 메뉴 추가
  inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addMenuProcess()
    }
  })

  // CLICK 메뉴 추가
  addBtn.addEventListener('click', addMenuProcess)

  // 삭제 수정 버튼
}

app()
