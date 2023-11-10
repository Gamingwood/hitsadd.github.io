let show = document.getElementById('show');
let hide = document.getElementById('hide');
let navd = document.getElementById('navd');
let logo = document.getElementById('logo');
document.getElementById('show').addEventListener('click' , function(){
    show.style.display = 'none';
    hide.style.display = 'initial';
    navd.style.display = 'flex';
    logo.style.marginLeft = '20%';
});

hide.addEventListener('click' , function(){
    show.style.display = 'initial';
    hide.style.display = 'none';
    navd.style.display = 'none';
    logo.style.marginLeft = '';
});