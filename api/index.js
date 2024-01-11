const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const User = require("./models/User");
const Hospital = require("./models/Hospital");
const Doctor = require("./models/Doctor");
const Ambulance = require("./models/Ambulance.");
const Blood = require("./models/Blood");
const HealthCenter = require("./models/HealthCenter");
const Medicine = require("./models/Medicine");
const MedicalSupply = require("./models/MedicalSupply");
const Request = require("./models/Request");


const jwt = require("jsonwebtoken");

app.get("/", (req,res) => res.json({message:"setup success!!!"}));

app.listen(port, () => {
  console.log("Server is running on port 8000");
});

mongoose
  .connect("mongodb+srv://yugendarM:yuge24112003@cluster0.tpac3db.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDb", err);
  });


// const Order = require("./models/order");

const sendVerificationEmail = async (email, verificationToken) => {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Configure the email service or SMTP details here
    service: "gmail",
    auth: {
      user: "yugendarproj1@gmail.com",
      pass: "otny obuc wlse qcnv",
    },
  });

  // Compose the email message
  const mailOptions = {
    from: "medConnect.com",
    to: email,
    subject: "Email Verification",
    text: `Please click the following link to verify your email: http://localhost:8000/verify/${verificationToken}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully");
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};
// Register a new user
// ... existing imports and setup ...








app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    
    console.log(name+email+password);

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email already registered:", email); // Debugging statement
      return res.status(400).json({ message: "Email already registered" });
    }

    // Create a new user
    const newUser = new User({ name, email, password });

    // Generate and store the verification token
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    // Save the user to the database
    await newUser.save();

    // Debugging statement to verify data
    console.log("New User Registered:", newUser);

    // Send verification email to the user
    // Use your preferred email service or library to send the email
    sendVerificationEmail(newUser.email, newUser.verificationToken);

    res.status(201).json({
      message:
        "Registration successful. Please check your email for verification.",
    });
  } catch (error) {
    console.log("Error during registration:", error); // Debugging statement
    res.status(500).json({ message: "Registration failed" });
  }
});









//endpoint to verify the email
app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;

    //Find the user witht the given verification token
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid verification token" });
    }

    //Mark the user as verified
    user.verified = true;
    user.verificationToken = undefined;

    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Email Verificatioion Failed" });
  }
});

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");

  return secretKey;
};

const secretKey = generateSecretKey();



//endpoint to login the user!
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    //check if the password is correct
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    //generate a token
    const token = jwt.sign({ userId: user._id }, secretKey);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login Failed" });
  }
});


//endpoint to update address and phoneNumber to the backend
app.post("/updateProfile", async (req, res) => {
  try {
    const { userId, address, phoneNo } = req.body;

    //find the user by the Userid
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //add the new address to the user's addresses array
    user.address = {...address};
    user.phoneNo = phoneNo;

    //save the updated user in te backend
    await user.save();

    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile" });
  }
});


// endpoint to get all the Hospitals
app.get("/hospitals" , async (req,res) => {
  try{
    const getAllHospital = await Hospital.find();
  return res.json({Hospital:getAllHospital});
  }catch(error){
    res.status(500).json({message:"Error fetching Hospitals"})
  }
});


// endpoint to add new hospital
app.post("/hospital/new" , async(req,res) => {
  try{
    const {newHospital} = req.body;
    const addNewHospital = Hospital.create(newHospital);
    return res.json({
        Hospital:addNewHospital,
        Message: "Hospital added successfully"
  });
  }catch(error){
    res.status(500).json({message:"Error adding Hospital"});
  }
});


// endpoint to get all the Doctors
app.get("/doctors" , async (req,res) => {
  try{
    const getAllDoctors = await Doctor.find();
  return res.json({Doctor:getAllDoctors});
  }catch(error){
    res.status(500).json({message:"Error fetching Doctors"})
  }
});


// endpoint to add new doctor
app.post("/doctor/new" , async(req,res) => {
  try{
    const {newDoctor} = req.body;
    const addNewDoctor = Doctor.create(newDoctor);
    return res.json({
        Doctor:addNewDoctor,
        Message: "Doctor added successfully"
  });
  }catch(error){
    res.status(500).json({message:"Error adding Doctor"});
  }
});

// endpoint to get all the Ambulances
app.get("/ambulances" , async (req,res) => {
  try{
    const getAllambulance = await Ambulance.find();
  return res.json({Ambulance:getAllambulance});
  }catch(error){
    res.status(500).json({message:"Error fetching Ambulance"})
  }
});


// endpoint to add new hospital
app.post("/ambulance/new" , async(req,res) => {
  try{
    const {newAmbulance} = req.body;
    const addNewAmbulance = Ambulance.create(newAmbulance);
    return res.json({
        Ambulance:addNewAmbulance,
        Message: "Ambulance added successfully"
  });
  }catch(error){
    res.status(500).json({message:"Error adding Ambulance"});
  }
});

// endpoint to get all the Blood
app.get("/blood" , async (req,res) => {
  try{
    const getBlood = await Blood.find();
  return res.json({Blood:getBlood});
  }catch(error){
    res.status(500).json({message:"Error fetching Blood"})
  }
});


// endpoint to add new blood
app.post("/blood/new" , async(req,res) => {
  try{
    const {newBlood} = req.body;
    const addNewBlood = Blood.create(newBlood);
    return res.json({
        Blood:addNewBlood,
        Message: "Blood added successfully"
  });
  }catch(error){
    res.status(500).json({message:"Error adding Blood"});
  }
});

// endpoint to get all the HealthCenter
app.get("/healthcenter" , async (req,res) => {
  try{
    const getHealthCenter = await HealthCenter.find();
  return res.json({HealthCenter:getHealthCenter});
  }catch(error){
    res.status(500).json({message:"Error fetching HealthCenter"})
  }
});


// endpoint to add new healthcenter
app.post("/healthcenter/new" , async(req,res) => {
  try{
    const {newHealthCenter} = req.body;
    const addHealthCenter = HealthCenter.create(newHealthCenter);
    return res.json({
        HealthCenter:addHealthCenter,
        Message: "HealthCenter added successfully"
  });
  }catch(error){
    res.status(500).json({message:"Error adding HealthCenter"});
  }
});

// endpoint to get all the medicine
app.get("/medicine" , async (req,res) => {
  try{
    const getMedicine = await Medicine.find();
  return res.json({Medicine:getMedicine});
  }catch(error){
    res.status(500).json({message:"Error fetching Medicine"})
  }
});


// endpoint to add new medicine
app.post("/medicine/new" , async(req,res) => {
  try{
    const {newMedicine} = req.body;
    const addMedicine = Medicine.create(newMedicine);
    return res.json({
        Medicine:addMedicine,
        Message: "Medicine added successfully"
  });
  }catch(error){
    res.status(500).json({message:"Error adding Medicine"});
  }
});

// endpoint to get all the medicalsupplies
app.get("/medicalsupply" , async (req,res) => {
  try{
    const getMedicalSupply = await MedicalSupply.find();
  return res.json({MedicalSupply:getMedicalSupply});
  }catch(error){
    res.status(500).json({message:"Error fetching MedicalSupply"})
  }
});


// endpoint to add new medicine
app.post("/medicalsupply/new" , async(req,res) => {
  try{
    const {newMedicalSupply} = req.body;
    const addMedicalSupply = MedicalSupply.create(newMedicalSupply);
    return res.json({
        MedicalSupply:addMedicalSupply,
        Message: "MedicalSupply added successfully"
  });
  }catch(error){
    res.status(500).json({message:"Error adding MedicalSupply"});
  }
});

app.get("/requests" , async (req,res) => {
  try{
    const getRequests = await Request.find();
  return res.json({Request:getRequests});
  }catch(error){
    res.status(500).json({message:"Error fetching Requests"})
  }
});


// endpoint to add new request
app.post("/request/new" , async(req,res) => {
  try{
    const {newRequest} = req.body;
    const addRequest = Request.create(newRequest);
    return res.json({
        Request:addRequest,
        Message: "Request added successfully"
  });
  }catch(error){
    res.status(500).json({message:"Error adding Request"});
  }
});







//endpoint to get all the addresses of a particular user
// app.get("/addresses/:userId", async (req, res) => {
//   try {
//     const userId = req.params.userId;

//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const addresses = user.addresses;
//     res.status(200).json({ addresses });
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieveing the addresses" });
//   }
// });

//endpoint to store all the orders
// app.post("/orders", async (req, res) => {
//   try {
//     const { userId, cartItems, totalPrice, shippingAddress, paymentMethod } =
//       req.body;

//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     //create an array of product objects from the cart Items
//     const products = cartItems.map((item) => ({
//       name: item?.title,
//       quantity: item.quantity,
//       price: item.price,
//       image: item?.image,
//     }));

//     //create a new Order
//     const order = new Order({
//       user: userId,
//       products: products,
//       totalPrice: totalPrice,
//       shippingAddress: shippingAddress,
//       paymentMethod: paymentMethod,
//     });

//     await order.save();

//     res.status(200).json({ message: "Order created successfully!" });
//   } catch (error) {
//     console.log("error creating orders", error);
//     res.status(500).json({ message: "Error creating orders" });
//   }
// });

// get the user profile
app.get("/profile/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving the user profile" });
  }
});

// app.get("/orders/:userId",async(req,res) => {
//   try{
//     const userId = req.params.userId;

//     const orders = await Order.find({user:userId}).populate("user");

//     if(!orders || orders.length === 0){
//       return res.status(404).json({message:"No orders found for this user"})
//     }

//     res.status(200).json({ orders });
//   } catch(error){
//     res.status(500).json({ message: "Error"});
//   }
// })