const  express= require('express');
const cors =require('cors')
const Affanapi= require('./controller/apis')
const mongoose=require('mongoose')

const app = express();
app.use(cors());

const Affanmiddleware=( data)=>{
   
    console.log("hi im affan middleware",data)
}
app.use(express.json())
// app.use(Affanmiddleware("affu"))
app.use('/Affan',Affanapi);

mongoose.connect('mongodb+srv://affan2905:affan2905@cluster0.ncafivz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB...', err));

app.listen(9000,()=>{console.log('server running on port 9000')})


//localhost:9000/Affan/postdata