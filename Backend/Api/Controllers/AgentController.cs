using MajorApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Configuration;
using System.Data.SqlClient;
using Azure.Core;
using Microsoft.Identity.Client;
using System.Transactions;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MajorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgentController : ControllerBase
    {
        // GET: api/<AgentController>
        private readonly MajorContext _context;
        //public readonly IConfiguration _configuration;
        public AgentController(MajorContext context)
        {
          _context = context;
        }
        static string conn = "Data Source=HIN-DH9HYY2-LT\\SQLSERVER;Initial Catalog=Major;Integrated Security=True;Encrypt=True;Trust Server Certificate=True"
    ;
        SqlConnection conne = new SqlConnection(conn);
        SqlCommand cmd = null;
        SqlDataAdapter adapter=null;
      //[HttpGet]
      //public IEnumerable<string> Get()
      //{
      //    var details=_context.Agents.ToList();
      //    return details;
      //}

      // GET api/<AgentController>/5
      [HttpGet("{id}")]
        public ActionResult<Dictionary<string, object>> Getonlylocation(string id)
        {
            var agent = _context.Registrations.FirstOrDefault(a => a.VNo == id);
            //var details= (from Agents in _context.Agents
            //              join registration in _context.Registrations
            //              on agent.VNo equals registration.VNo
            //              where agent.VNo == id
            //              select registration)
            //      .FirstOrDefault();
            var result = new Dictionary<string, object>
        {
            { "VNo", agent.VNo },
       
           
            { "Fname", agent.Fname },
           
            { "City", agent.City },
            { "Lname", agent.Lname },
            { "Contact", agent.Contact },
                { "email",agent.Email},
                {"VName",agent.VName }
        };
            return result;
        }
        //[HttpGet("{id1}")]
        //public string Getfname(string id1)
        //{
        //    var fullName = (from agent in _context.Agents
        //                    join registration in _context.Registrations
        //                    on agent.VNo equals registration.VNo
        //                    where agent.VNo == id1
        //                    select registration.Fname)
        //          .FirstOrDefault();

        //    return fullName;
        //}
        // POST api/<AgentController>
        [HttpGet]
        [Route("Login/{email}/{pwd}")]
        public ActionResult<Dictionary<string, object>> Login(string email,string pwd)
        {
            var res = new List<string>();
            var status = "True";
            var paid = "";
            var unpaid = "";
            var balance = "";
            var total = "";

            try
            {
                #region logintry
        //using var cmd = conne.CreateCommand();
        //cmd.CommandText = "usp_login";
        //cmd.CommandType = CommandType.StoredProcedure;

        //cmd.Parameters.AddWithValue("@email", user.Email);
        //cmd.Parameters.AddWithValue("@pwd", user.Password);

        //using var reader = await cmd.ExecuteReaderAsync();
        //if (reader.Read())
        //{
        //    // Retrieve all columns from the first row
        //  //  var userId = reader.GetInt32(reader.GetOrdinal("V_No"));
        //    var userName = reader.GetString(reader.GetOrdinal("location"));
        //    var email = reader.GetString(reader.GetOrdinal("amount"));
        //    // Retrieve other columns as needed

        //    // Return the user data
        //    return Ok(new
        //    {
        //   //     UserId = userId,
        //        UserName = userName,
        //        Email = email
        //        // Include other columns as needed
        //    });
        //}
        //else
        //{
        //    // Login failed, return an error response
        //    return BadRequest(new { Error = "Invalid email or password." });
        //} 
        #endregion
                var regis=_context.Registrations.FirstOrDefault(a=>a.Email== email && a.Pwd==pwd);
                if (regis == null)
                {
                    return BadRequest(new { Error = "Invalid email or password." });
                }
                var agent = _context.Agents.FirstOrDefault(a => a.VNo == regis.VNo);
                if(agent == null)
                {
                    status = "True";
                }
                else
                {
                    status = agent.Status.ToString();
                }
                
                var payment = _context.Payments.FirstOrDefault(a => a.V_No == regis.VNo);
                if (payment == null)
                {
                    paid = "0";
                    unpaid = "0";
                    balance = "0"; total = "0"; 
                }
                else
                {
                    balance = payment.balance.ToString();
                    unpaid = payment.unpaid.ToString();
                    paid = payment.paid.ToString();
                    total = payment.total.ToString();
                }
                var result = new Dictionary<string, object>
        {
            { "VNo", regis.VNo },
            { "Status", status },
            { "Balance", balance },
            { "Fname", regis.Fname },
            { "VName", regis.VName },
            { "City", regis.City },
            { "Lname", regis.Lname },
            { "Contact", regis.Contact },
            { "Unpaid", unpaid},
            { "Paid", paid},
            { "Total",  total}
        };
                //res.Add(regis.VNo); res.Add(agent.Status.ToString());res.Add(agent.Amount.ToString()); res.Add ( regis.Fname); res.Add(  regis.VName); res.Add( regis.City) ; res.Add(regis.Lname);res.Add(regis.Contact);
                //res.Add(payment.balance+"");res.Add(payment.unpaid + "");res.Add(payment.paid + "");res.Add(payment.total + "");

                return result;

            }
            catch (Exception e)
            {
                return BadRequest(new { Error = "An error occurred while processing the request." });
            }
    
        }
        private string GenerateToken(string email)
        {
            // Implement your token generation logic here
            return $"JWT_TOKEN_{email}";
        }
        public class loginreq
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }
        [HttpPost]
        [Route("Registration")]
        public string Register(Registration user)
        {
            var ans = "";

            try
            {

                cmd = new SqlCommand("usp_register", conne);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@VNo", user.VNo);
                cmd.Parameters.AddWithValue("@fname", user.Fname);
                cmd.Parameters.AddWithValue("@lname", user.Lname);
                cmd.Parameters.AddWithValue("@contact", user.Contact);
                cmd.Parameters.AddWithValue("@email", user.Email);
                cmd.Parameters.AddWithValue("@V_name", user.VName);
                cmd.Parameters.AddWithValue("@city", user.City);
                cmd.Parameters.AddWithValue("@pwd", user.Pwd);
                Console.WriteLine(user.VName);
                conne.Open();
                int i = cmd.ExecuteNonQuery();
                conne.Close();
                return i >= 1 ? "Data Inserted" : "Error";
            }
            catch (Exception e)
            {

                return e.Message;
            }
            return ans;
        }
        // PUT api/<AgentController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AgentController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
