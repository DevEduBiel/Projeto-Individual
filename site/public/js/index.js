id = localStorage.getItem('ID_USUARIO');
function apaga() {
    document.getElementById("suaPlaylist").innerHTML = ""
}
function deslogar(){
    localStorage.ID_USUARIO = null
    window.location.reload(false);
}