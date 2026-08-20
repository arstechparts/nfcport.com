const modal=document.querySelector('#quote-modal');
document.querySelectorAll('.quote-open').forEach(button=>button.addEventListener('click',()=>modal.showModal()));
document.querySelector('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',event=>{if(event.target===modal)modal.close()});
const params=new URLSearchParams(location.search);
if(params.get('teklif')==='basarili'){
  const toast=document.querySelector('#success-toast');
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),7000);
  history.replaceState({},'',location.pathname+location.hash);
}
