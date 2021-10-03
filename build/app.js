"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var uri = "'mongodb://localhost:27017/articles'";
var app = (0, express_1.default)();
var port = 3000;
//json data
app.use(express_1.default.json());
//importing routers
require('./routes/routes')(app);
console.log('HeLLO WORDL');
console.log('Added github web hooks');
//setting up templating engines
app.set('views', path_1.default.join(__dirname + path_1.default.sep + 'views'));
app.set('view engine', 'pug');
//connecting mongo db
//  mongoose.connect(uri)
//  const con = mongoose.connection
//  con.on('open',()=>{
//      console.log(`Database is connected ...`)
//  })
//  con.on('close', ()=>{
//      console.log(`Database is disconnected ...`)
//  })
//starting the server
app.listen(port, function () {
    console.log("Server started at port " + port);
});
