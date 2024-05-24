var header           = document.getElementById('header');
var navegacaoHeader  = document.getElementById('navegacao_header');
var contentquemsomos = document.getElementById('contentquemsomos');
var bannerquemsomos  = document.getElementById('bannerquemsomos');
var showSidebar      = false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        navegacaoHeader.style.marginLeft = '-10vw';
        navegacaoHeader.style.animationName = 'showSidebar';
        contentquemsomos.style.filter = 'blur(2px)';
        bannerquemsomos.style.filter = 'blur(2px)';
    }
    else
    {
        navegacaoHeader.style.marginLeft = '-100vw';
        navegacaoHeader.style.animationName = '';
        contentquemsomos.style.filter = '';
        bannerquemsomos.style.filter = '';
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