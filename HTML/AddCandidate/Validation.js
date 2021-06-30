$(document).ready(function(){
    
    //PERSONAL DETAILS Validation 
    
    $("#nxtbtn").click(function(){
      validateForm1();
    });
  
    function validateForm1() {
        let NAME = document.forms["form1"]["name"].value;
        let MAIL= document.forms["form1"]["mail"].value;
        let MNO= document.forms["form1"]["mno"].value;
        var atposition=MAIL.indexOf("@");  
        var dotposition=MAIL.lastIndexOf(".");  
        if (NAME == ""){
            document.getElementById("error-name").innerHTML = "Please enter candidate name!";
          }
          else if (NAME.length<3)
          {
            document.getElementById("error-name").innerHTML = "Please enter valid candidate name!"; 
          }
        if (MAIL=="")
        {
          document.getElementById("error-mail").innerHTML = "Please enter Mail ID!";
        }
        else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=MAIL.length)
        {
          document.getElementById("error-mail").innerHTML = "Please enter valid Mail ID!";
        }

        if (MNO=="")
        {
          document.getElementById("error-mno").innerHTML = "Please enter Mobil NO!";
        }
        else if((isNaN(MNO)) || MNO.length!=10)
        {
          document.getElementById("error-mno").innerHTML = "Please enter valid Mobil NO!";
        }
      }

      //PROFESSIONAL DETAILS VALIDATION

      $("#nxtbtn2").click(function(){
        validateForm2();
        var objsend={};
        $('input').each(function(temp,ctrl){
            objsend[ctrl.id]=ctrl.value;
        });
        $(':radio').each(function(temp,ctrl){
          objsend[ctrl.id]=ctrl.value;
        });
        $.post('http://localhost:5000/api/CandidateDetails/AddCandidate',objsend).then(function(rtn){
            alert(rtn,Message);
            $('form')[0].reset();
        });
    });

    function validateForm2(){
      let JOB = document.forms["form2"]["job"].value;
      let EXP = document.forms["form2"]["exp"].value;
      let SAL = document.forms["form2"]["sal"].value;
      let ESAL = document.forms["form2"]["esal"].value;
      let RESUME = document.forms["form2"]["resume"].value;
      var allowedExtensions = /(\.doc|\.docx|\.pdf)$/i;
      if (JOB == "" || JOB=="-- Select --") {
        document.getElementById("error-job").innerHTML = "Please Select Applied Job!";
      }
      if (EXP == "") {
        document.getElementById("error-exp").innerHTML = "Please enter Your Experience!";
      }
      else if ((isNaN(EXP))) {
        document.getElementById("error-exp").innerHTML = "Enter Numeric Value Only!"; 
      }
      if ((isNaN(SAL))) {
        document.getElementById("error-sal").innerHTML = "Invalid input! Enter Numeric value only"; 
      }
      if ((isNaN(ESAL))) {
        document.getElementById("error-esal").innerHTML = "Invalid input! Enter Numeric value only"; 
      }
      if (RESUME == "") {
        document.getElementById("error-resume").innerHTML = "Please Upload Resume!";
      }
      else if (!allowedExtensions.exec(RESUME)) {
        document.getElementById("error-resume").innerHTML = "Invalid File Type! Upload .doc or .pdf file";
          } 
      }

    //INTERVIEW STATUS

            $("#subbtn").click(function(){
              validateForm3();
                var objsend={};
                $('input').each(function(temp,ctrl){
                    objsend[ctrl.id]=ctrl.value;
                });
                $(':radio').each(function(temp,ctrl){
                  objsend[ctrl.id]=ctrl.value;
                });
                $.post('http://localhost:5000/api/CandidateDetails/Updinterview',objsend).then(function(rtn){
                    alert(rtn,Message);
                    $('form')[0].reset();
                });
            });

            function validateForm3() {
              let ID = document.forms["interview"]["id"].value;
              let HR= document.forms["interview"]["hr"].value;
              let INAME= document.forms["interview"]["iname"].value;
              let STATUS= document.forms["interview"]["status"].value;
              if (ID == "") {
                  document.getElementById("error-id").innerHTML = "Please enter candidate ID!";
              }
              else if ((isNaN(ID))) {
                document.getElementById("error-id").innerHTML = "Enter Numeric value Only!";
              }
              if (HR=="")
              {
                document.getElementById("error-hr").innerHTML = "Please enter HR Name!";
              }
              else if (HR.length<3)
              {
                document.getElementById("error-hr").innerHTML = "Please enter valid Name!"; 
              }
              if (INAME=="")
              {
                document.getElementById("error-iname").innerHTML = "Please enter Interviewer Name!";
              }
              else if (INAME.length<3)
              {
                document.getElementById("error-iname").innerHTML = "Please enter valid Name!"; 
              }
              if (STATUS=="" || STATUS=="-- Select --")
              {
                document.getElementById("error-status").innerHTML = "Please select Interview Status!";
              }
            }









});