import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { createCipheriv } from 'crypto';
const { Request, Response } = express;
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI )
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Simple route to test the server
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Start the server

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    image: String
  }
);
const Product = mongoose.model('Product', productSchema);
//GET ALL THE PRODUCTS
app.get('/api/products',async(req,res)=>{
  try{
    const products = await Product.find();
    res.json(products);
  }
  catch(error){
    res.status(500).send('Error fetching products.');
  }
})
//POST A NEW PRODUCT
app.post('/api/products',async(req,res)=>{
  const {name ,price,description,image}= req.body;
  try{
    const newProduct =new Product({name,price,description,image});
    await newProduct.save();
    res.status(201).json(newProduct);
  }
  catch(error){
    res.status(500).send('Error adding products.');
  }
})

//UPDATE AN EXISTING PRODUCT
app.put('/api/products/:id',async(req,res)=>{
  const {id} = req.params;
  const {name,price,description,image}=req.body;
  try{
    const updatedProduct =await Product.findByIdAndUpdate(id,
      {name,price,description,image},
      {new:true}
    );
    
    if(!updatedProduct){
      return res.status(404).send('Product not found.');
    }
    res.json(updatedProduct);
  }
  catch(error){
    res.status(500).send('Error updating product.');
  }
});

//DELETE A PRODUCT
app.delete('/api/products/:id',async(req,res)=>{
  const {id}= req.params;
  try{
    const deletedProduct = await Product.findByIdAndDelete(id);
    if(!deletedProduct){
      return res.status(404).send('Product not found.');
    }
    res.json({message:'Product deleted successfully'});
    
  }
  catch(error){
    res.status(500).send('Error deleting product.');
}
})
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});