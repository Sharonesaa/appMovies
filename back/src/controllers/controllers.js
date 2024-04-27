function movies(req,res){
    res.status(200).json({
        data: "all movies"
    })
}

module.exports = {
    movies
}