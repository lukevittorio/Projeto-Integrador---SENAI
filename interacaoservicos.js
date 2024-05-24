var header           = document.getElementById('header');
var navegacaoHeader  = document.getElementById('navegacao_header');
var contentservicos  = document.getElementById('contentservicos');
var bannerservicos   = document.getElementById('bannerservicos');
var showSidebar      = false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        navegacaoHeader.style.marginLeft = '-10vw';
        navegacaoHeader.style.animationName = 'showSidebar';
        contentservicos.style.filter = 'blur(2px)';
        bannerservicos.style.filter = 'blur(2px)';
    }
    else
    {
        navegacaoHeader.style.marginLeft = '-100vw';
        navegacaoHeader.style.animationName = '';
        contentservicos.style.filter = '';
        bannerservicos.style.filter = '';
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