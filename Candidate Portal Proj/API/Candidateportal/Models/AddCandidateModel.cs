using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
namespace Candidateportal.Models
{
    public class AddCandidateDetails
    {
        public int id {get;set;} 
        public string name {get;set;}
        public string mail {get;set;}
        public string mno {get;set;}
        public string gender {get;set;}
        public DateTime dob {get;set;}
        public string location {get;set;}
        public string job {get;set;}
        public int exp {get;set;}
        public int sal {get;set;}
        public int esal {get;set;}
        public string period {get;set;}
        public string company {get;set;}
        public string degree {get;set;}
        public string skills {get;set;}
        public string resume {get;set;}
        public string hr {get;set;}
        public string iname {get;set;}
        public string status {get;set;}
        public string commun {get;set;}
        public DateTime idate {get;set;}
        public int rate{get;set;}
        public string hrcmt {get;set;}
        public string tic {get;set;}

    }
    
}
