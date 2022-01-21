let production = false
let urls = ['http://localhost:3060/', 'https://cinema-save.herokuapp.com/']
let baseURL;

if(production === true){
    baseURL = urls[1]
} else {
    baseURL = urls[0]
}

let routes = {
    'handleSave': baseURL+'authentication/profile/deleteboard/',
    'handleDelete': baseURL+'authentication/profile/deletepin/',
    'handleMovieID': baseURL+'movie/id',
    'handleAddBoard': baseURL+'authentication/profile/addboard/',
    'handleEditBoard': baseURL+'authentication/profile/editboard/',
    'handleDeleteBoard': baseURL+'authentication/profile/deleteboard/',
    'handleLogin': baseURL+'authentication/login/',
    'handleRegister': baseURL+'/authentication/register/',
    'handleBaseURL': baseURL
}

export {routes}