const app = () => {
  const $ = (el) => document.querySelector(el)
  const inputEl = $('.input-field')
  const formEl = $('#espresso-menu-form')
  const ulEl = $('#espresso-menu-list')
  const addBtn = $('.input-submit')
  const menuCount = $('.menu-count')

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

  const updateMenuCount = () => {
    const menuLength = ulEl.querySelectorAll('li').length
    menuCount.innerText = `총 ${menuLength}개`
  }

  const addMenuProcess = () => {
    if (inputEl.value.length > 0) {
      ulEl.insertAdjacentHTML('beforeend', menuItem(inputEl.value))
      updateMenuCount()
      inputEl.value = ''
    }
  }

  const removeMenu = (e) => {
    if (e.target.className.includes('menu-remove')) {
      const okRemove = confirm('메뉴를 삭제하시겠습니까?')
      if (okRemove) {
        $('.menu-list').remove()
        updateMenuCount()
      }
    }
  }

  const editMenu = (e) => {
    if (e.target.className.includes('menu-edit')) {
      const result = prompt(
        '메뉴 이름을 작성하시오.',
        e.target.closest('li').querySelector('.menu-name').innerText
      )
      e.target.closest('li').querySelector('.menu-name').innerText = result
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
  ulEl.addEventListener('click', (e) => {
    removeMenu(e)
    editMenu(e)
  })
}

app()
