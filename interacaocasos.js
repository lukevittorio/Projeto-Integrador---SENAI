var header           = document.getElementById('header');
var navegacaoHeader  = document.getElementById('navegacao_header');
var contentcasos     = document.getElementById('contentcasos');
var bannercasos      = document.getElementById('bannercasos');
var contentc         = document.getElementById('contentc');
var bannerc          = document.getElementById('bannerc');
var showSidebar      = false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        navegacaoHeader.style.marginLeft = '-10vw';
        navegacaoHeader.style.animationName = 'showSidebar';
        contentcasos.style.filter = 'blur(2px)';
        bannercasos.style.filter = 'blur(2px)';
        contentc.style.filter = 'blur(2px)';
        bannerc.style.filter = 'blur(2px)';
    }
    else
    {
        navegacaoHeader.style.marginLeft = '-100vw';
        navegacaoHeader.style.animationName = '';
        contentcasos.style.filter = '';
        bannercasos.style.filter = '';
        contentc.style.filter = '';
        bannerc.style.filter = '';
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