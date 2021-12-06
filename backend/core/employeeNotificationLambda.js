var mysql = require('mysql');

var AWS = require("aws-sdk");
var ses = new AWS.SES({ region: "us-east-1" });
AWS.config.update( {
  region: 'us-east-1'
});



exports.handler = async (event) => {
  
  // console.log(event);
 
//  we will get the managerId and the status of his request in the event object
// something like { req_id: "50001",  status : 'approved'}
 
    var con  = await mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
    // connectionLimit : 10
  });
  
  await new Promise(resolve => setTimeout(resolve, 1000));
 
 
 
    // TODO implement
    var res;
    console.log("outside connection");
    await con.connect(async function(err) {
        if (err){
          
          throw err;
        } 
        console.log("inside connection");
        con.query("SELECT * FROM requests where is_done =true",async function (err, result, fields) {
          if (err) {
            console.log(err);
           throw err; 
          }

          console.log(result);
          for(var i=0;i<result.length;i++){
            await con.query("SELECT email FROM users where emp_no ="+ result[i].req_madeby, async function (err, result2, fields) {
          if (err) {
            console.log(err);
          throw err; 
          }

          
              console.log(result2);
              
              var emailMsg = "Your request has been processed";
            await  sendEmail(emailMsg, result2);
            await con.query("DELETE FROM requests WHERE req_id="+ result[i].req_id, async function (err, result2, fields) {
                if (err) {
                  console.log(err);
                throw err; 
                }
                  
                    });

              
              });
          }
          
        //   response = result;
          res = result;
       
       
        });
      });
      
      
      await new Promise(resolve => setTimeout(resolve, 2000));
    //   const response = {
    //     statusCode: 200,
    //     body: JSON.stringify(res),
    // };
    
    
    return res;
    
   
};


async function sendEmail(roleDetails, email){
        // console.log(email)
        var emailData = `
    <div >
        
        <div style="position: absolute; 
        bottom: 300; 
        color: black; 
        width: 100%; 
        padding: 20px; ">
          <h1>Nibble Allocation Notification</h1>
          <p>`+ roleDetails+`</p>
        </div>
      </div>
      `;
   
      // console.log(recipe);
  
 // // ses function to send email with procedure to users
  
  var params2 = {
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        // Text: { Data: roleDetails },
        Html: {
      Charset: "UTF-8",
      Data: emailData
      },
      },

      Subject: { Data: "EMS: Your request has been processed!" },
    },
    Source: "abhishek.yadav02@sjsu.edu",
  };
 
  console.log("email sent");
   await ses.sendEmail(params2).promise();
  
    
  }