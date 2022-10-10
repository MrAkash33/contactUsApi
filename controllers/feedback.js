const { customerModal } = require("../modal/contact")

const feedBack = async (req,res,next) => {
    const data = req.body
    let user = new customerModal ({
        username :req.body.username,
        email :req.body.email,
        message :req.body.message
    })
    const savedData = await user.save()
    res.json(savedData)
    console.log(data,savedData,"data")
}

module.exports = {
    feedBack
}