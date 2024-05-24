var header           = document.getElementById('header');
var navegacaoHeader  = document.getElementById('navegacao_header');
var contentcontato   = document.getElementById('contentcontato');
var bannercontato    = document.getElementById('bannercontato');
var showSidebar      = false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        navegacaoHeader.style.marginLeft = '-10vw';
        navegacaoHeader.style.animationName = 'showSidebar';
        contentcontato.style.filter = 'blur(2px)';
        bannercontato.style.filter = 'blur(2px)';

    }
    else
    {
        navegacaoHeader.style.marginLeft = '-100vw';
        navegacaoHeader.style.animationName = '';
        contentcontato.style.filter = '';
        bannercontato.style.filter = '';

    }
}

function closeSidebar()
{
    if(showSidebar)
    {
        showSidebar = true;
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 1314 && showSidebar) 
    {  
        showSidebar = true;
        toggleSidebar();
    }
});