const notice = document.querySelector('.notice')

if(notice){
    const noticeCloseEl = document.querySelector('.notice__close')
    noticeCloseEl.addEventListener('click', ()=>{

        notice.classList.add('notice--hidden');
    })
}