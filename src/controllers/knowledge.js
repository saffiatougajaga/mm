const knowledge = require('../models/knowledge');
const user = require('../models/user')


const createknowledge = async (req, res) => {
    const content = req.body;
    
 const knowledge = await knowledge.findById(content.userId);

    try {
    const knowledge = await knowledge.create({user: content.userId, ...content})
    user.knowledge = user.knowledge.concat(knowledge._Id)
    await user.save();
     
   return res.status(201).json({ data: knowledge });
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
  };
  
 const getAllknowledge = async (req, res) => {
    const userId = req.body.userId;
    try {
      const knowledge = await knowledge.find({ user: userId });
      return res.status(201).json({ data: knowledge });
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
  };
  
  const getOneknowledge = async (req, res) => {
    const id = req.params.id
    const userId = req.body.userId;
    try {
      const knowledge = await knowledge.findOne({ _id: id, user: userId });
      if (!knowledge) {
        return res.status(400).json({ message: 'knowledge not found' });
      }
      return res.status(201).json({ data: knowledge});
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
  };


  

const updateOneknowledge = async (req, res) => {
  const id = req.params.id
  const userId = req.body.userId;
  const content = req.body
  try {
    const knowledge = await knowledge.findOneAndUpdate(
      { _id: id, user: userId },
      content,
      { new: true }
    );
    if (!knowledge) {
      return res.status(400).json({ message: 'knowledge not found' });
    }
    return res.status(201).json({ data: knowledge });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

const deleteOneknowledge = async (req, res) => {
  const id = req.params.id
  const userId = req.body.userId;
  try {
    const knowledge = await knowledge.findOneAndRemove({ _id: id, user: userId 
});


    if (!knowledge) {
      return res.status(400).json({ message: 'knowledge not found' });
    }
    return res.status(201).json({ message: 'deleted successfully', 
data: knowledge });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

  

   

module.exports = {
  createknowledge,
  getAllknowledge,
  getOneknowledge,
  updateOneknowledge,
  deleteOneknowledge
};