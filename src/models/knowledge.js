const mongoose = require('mongoose')

const knowledgeSchema = new mongoose.Schema(
  {
    week: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      trim: true,
      
    },
    
    content: {
      type: String,
      trim: true,
      maxlength: 25
    },
    description: {
      type: String,
      enum: ['Admin', 'User'], 
      default: 'User'
    },
   
    user:[
      {type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }
    ] 
  
},

    
      
  { timestamps: true }
)

knowledgeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the password should not be revealed
    delete returnedObject.password
  }
})
const knowledge  = mongoose.model('knowledge', knowledgeSchema)

module.exports = knowledge
