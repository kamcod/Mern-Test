const User = require('../modal/user');


const getAllUsers = async (req, res) => {
  const user = await User.findOne({_id: req.user.userId });
  if(!user.isAdmin){
    res.status(401).send("user not authorized");
  }
  const users = await User.find({ });
  // const filtered = users.filter(u=> u.isAdmin == undefined);
  // we can filter the admin user
  let data = [];
  users.forEach(i=> {
    data.push({
      id: i._id,
      name: i.name,
      email: i.email,
      isAdmin: i.isAdmin ? true : false
    })
  })
  res.status(200).send({users: data})
}
module.exports = {
  getAllUsers
}