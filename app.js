const express=require("express");
const bodyParser=require("body-parser");
app=express();
var items=["Beer","Food","Code!"];
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set("view engine","ejs")
app.get("/",function (req,res) {
let today=new Date();
let options={
  weekday:"long",
  day:"numeric",
  month:"long"
}
var day=today.toLocaleDateString("en-US",options);

res.render("list",{KindofDay:day,newListItem:items});
});

app.post("/",function (req,res) {
  var item=req.body.newItem;
  items.push(item);
  res.redirect("/")
})

app.listen(3000,function(req,res){
  console.log("server started on port 3000");
})
