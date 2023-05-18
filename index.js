
const http=require('http');
// const data=require('./data')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'contect-type':'application\json'});
    resp.write(JSON.stringify({name:"shivani",email:'shivani21@navgurukul.org'}));
    resp.end();

}).listen(5000);