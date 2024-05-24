// Declarando as variáveis com base nos ids declarados no HTML
var header          = document.getElementById('header');
var navegacaoHeader = document.getElementById('navegacao_header');
var contenthome     = document.getElementById('contenthome');
var bannerhome      = document.getElementById('bannerhome');
var showSidebar     = false;

function toggleSidebar() // Função para abrir a barra lateral
{
    showSidebar = !showSidebar;

     if(showSidebar)
    {
        navegacaoHeader.style.marginLeft = '-10vw';
        navegacaoHeader.style.animationName = 'showSidebar';
        contenthome.style.filter = 'blur(2px)';
        bannerhome.style.filter = 'blur(2px)';
    }
    else
    {
        navegacaoHeader.style.marginLeft = '-100vw';
        navegacaoHeader.style.animationName = '';
        contenthome.style.filter = '';
        bannerhome.style.filter = '';
    }
}

function closeSidebar() // Função para fechar a barra lateral
{
    if(showSidebar)
    {
         showSidebar = true;
        toggleSidebar();
    }
}

// Função para quando o site for redimensionado a barra lateral estar disponível
window.addEventListener('resize', function(event) {
    if(window.innerWidth > 1314 && showSidebar) 
    {  
        showSidebar = true;
        toggleSidebar();
    }
});