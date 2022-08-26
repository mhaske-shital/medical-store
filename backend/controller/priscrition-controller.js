const pre=require("../model/priscription-model")

exports.cretedUserData = async(req,res) => {
    try {
     const resutl = await pre.create(req.body)
     res.json({
         message: "created Data",
         success: true,
         data:resutl
     })
    } catch (error) {
     res.json({
         message: "error"+error,
     })
    }
 }
exports.deletedUserData = async(req,res) => {
    try {
     const resutl = await pre.deleteMany()
     res.json({
         message: "deleted Data",
         success: true,
         data:resutl
     })
    } catch (error) {
     res.json({
         message: "error"+error,
     })
    }
 }
 exports.findPostUserData = async (req, res) => {
    try {
     const resutl = await pre.find({userId:req.params.id})
     res.json({
         message: "find post Data",
         success: true,
         data:resutl
     })
    } catch (error) {
     res.json({
         message: "error"+error,
     })
    } 
}