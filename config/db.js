if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURI: '<ProductionURI>'}
}else{
    module.exports = {mongoURI:'<LocalURI>'}
}