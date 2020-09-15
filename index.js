const express = require('express')
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser')
const SettingsBill = require('./settingBill')

let app = express();

const settingsBill = SettingsBill();
app.use(express.static('public'))

app.engine('handlebars', exphbs({layoutsDir: './views/layouts'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res){


  console.log(settingsBill.colorFun())
  res.render('index',{
    settings:settingsBill.getSettings(),
    totals: settingsBill.totals(),
    color: settingsBill.colorFun()
  
  })
})

app.post('/settings', function (req,res){

  settingsBill.setSettings({
    callCost: req.body.callCost,
    smsCost : req.body.smsCost,
    warningLevel: req.body.warningLevel,
    criticalLevel: req.body.criticalLevel
  })

  console.log(settingsBill.getSettings());
  res.redirect('/');

});

app.post('/action', function(req,res){

 // console.log(req.body.actionType)

  
  settingsBill.recordAction(req.body.actionType)
  console.log(  settingsBill.totals())

  res.redirect('/');


})

app.get('/actions', function(req,res){
  res.render('actions', { actions : settingsBill.actions() })

})
app.get('/actions/:actionType',function(req,res){
  
  const actionType = req.params.actionType;
  res.render('actions', { actions : settingsBill.actionsFor(actionType) })


})

const PORT = process.env.PORT || 3011

app.listen(PORT, function(){
  console.log("App started at port :",PORT)
})