const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());

// Connection URL
const url = 'mongodb://127.0.0.1:27017/Shoes';
mongoose.connect(url).then(() => {
    console.log('Connected successfully to server');
});

//create schema for product
const productSchema = new mongoose.Schema({
    productNum:{
        type:"Number",
        required:true
    },

    name: {
        type: "String",
        required: true
    },


    brand:{
        type:"String",
        required:true
    },

    gender:{
        type:"String",
        required:true
    },

    category:{
        type:"String",
        required:true
    },

    is_in_inventory:{
        type:"Boolean",
        default:true
    },
    price: {
        type: "Number",
        required: true,
        min:10
    },

    oldPrice:{
        type:"Number",
        required:true,
        default:60
    },
    imageURL:{
        type:"String",
        required:true
    }
});


//create model
const Product = mongoose.model("Product", productSchema);

app.use(express.json());

//get all products
app.get('/api/products', async (req, res) => {
    let products = await Product.find();
    res.json(products);
});

//get single product
app.get('/api/products/:productId', async (req, res) => {
    try {
        const id = req.params.productId;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "product not found"});
        }
        res.json(product);
    } catch (error) {
        return res.status(400).json({ message: "Invalid Id" });

    }
});

//get trending products
app.get('/api/trending', async (req,res)=>{
    const myProducts = await Product.find();
    const trendingProducts = myProducts.slice(0,3);
    res.json(trendingProducts);
});

//get products by gender
app.get('/api/products/gender/:Gender', async (req,res)=>{
    let genderPara=req.params.Gender;
    let productsGender=await Product.find({gender:genderPara});
    res.json(productsGender);
});

//get products by brand
app.get('/api/products/brand/:Brand', async (req,res)=>{
    let brandPara=req.params.Brand;
    let productsBrand=await Product.find({brand:brandPara});
    res.json(productsBrand);
});

//get products by category
app.get('/api/products/category/:Category', async (req,res)=>{
    let categoryPara=req.params.Category;
    let productsCategory=await Product.find({category:categoryPara});
    res.json(productsCategory);
});

//add new product
app.post('/api/products', async (req, res) => {

    try {
        let product = new Product(req.body);
        await product.save()
        res.json(product);

    } catch (error) {
        return res.status(400).json(error);
    }

});

//update product
app.patch('/api/products/:productId', async (req, res) => {
    const id = req.params.productId;
    let product = await Product.findByIdAndUpdate(id, req.body, { new: true })
    res.json(product);
});

//delete product
app.delete('/api/products/:productId', async (req, res) => {
    const id = req.params.productId;
    let product = await Product.findByIdAndDelete(id);
    if (!product) {
        return res.status(400).json({ message: "product not found!" });
    }
    res.json(product);
});


//create users schema
const UsersSchema = new mongoose.Schema({

    name:{
        type:"String",
        required:true
    },

    email: {
        type: "String",
        required: true
    },


    password:{
        type:"String",
        required:true
    }
});

const User = mongoose.model("User", UsersSchema);

//Signup user
app.post('/signup', async (req, res) => {
    let check=await User.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,error:"existing user found with the same email address."});
    }

    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });


    await user.save();

    const data= {
        user:{
            id:user.id
        }
    }

    const token=jwt.sign(data,'secret_ecom');
    res.json({success:true,token});
});


//Login user
app.post('/login',async(req,res)=>{
    let user= await User.findOne({email:req.body.email});
    if(user){
        const passCompare=req.body.password===user.password;
        if(passCompare){
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }

        else{
            res.json({success:false,error:"Wrong password"});
        }
    }
    else{
        res.json({success:false,error:"Wrong email"});
    }
});


app.listen(8000, () => {
    console.log("Server is ruuning on port 8000!");
});
