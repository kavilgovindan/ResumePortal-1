using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Dapper;
using System.Data;
using Microsoft.Extensions.Logging;
using Candidateportal.Models;
using Microsoft.Extensions.Configuration;

namespace Candidateportal.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class CandidateDetailsController : ControllerBase
    {
        private readonly IConfiguration config;
        string Connectionstring;
        IConfiguration _Config;
        public CandidateDetailsController(IConfiguration config)
        {
            _Config=config;
            Connectionstring=_Config.GetConnectionString("CandidatedetailsDB");
            this.config = config;
        }

        [HttpPost]
        [Route("~/api/CandidateDetails/AddCandidate")]
        public string AddCandidate([FromForm] AddCandidateDetails Adddetails)
        {       
            String strQry="INSERT INTO Candidatedetails (C_name,C_mail,C_mno,C_gender,C_dob,C_location,C_job,C_exp,C_sal,C_esal,Cperiod,C_company,C_degree,C_skills,C_resume) VALUES ('"+Adddetails.name+"','"+Adddetails.mail+"','"+Adddetails.mno+"','"+Adddetails.gender+"','"+Adddetails.dob+"','"+Adddetails.location+"','"+Adddetails.job+"','"+Adddetails.exp+"','"+Adddetails.sal+"','"+Adddetails.esal+"','"+Adddetails.period+"','"+Adddetails.company+"','"+Adddetails.degree+"','"+Adddetails.skills+"','"+Adddetails.resume+"');";
            using (SqlConnection DBConn=new SqlConnection(Connectionstring)){
                DBConn.Execute(strQry);
            }
                
            
            return "Inserted";
        }
        [Route("~/api/CandidateDetails/Display")]
        public string Display()
        {
            return "It's working";
        }
        [HttpPost]
        [Route("~/api/CandidateDetails/Updinterview")]
        public string Updinterview([FromForm] AddCandidateDetails Adddetails)
        {       
            String strQry="Update Candidatedetails set HR_name='"+Adddetails.hr+"',I_name='"+Adddetails.iname+"',I_status='"+Adddetails.status+"',Communication='"+Adddetails.commun+"',I_date='"+Adddetails.idate+"',I_rating='"+Adddetails.rate+"',HR_cmt='"+Adddetails.hrcmt+"',TI_cmt='"+Adddetails.tic+"' where C_id='"+Adddetails.id+"';";
            using (SqlConnection DBConn=new SqlConnection(Connectionstring)){
                DBConn.Execute(strQry);
            }    
            
            return "Updated" ;
        }

        
        
    }
}
