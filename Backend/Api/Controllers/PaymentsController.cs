using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MajorApi.Models;
using Microsoft.Data.SqlClient;

namespace MajorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly MajorContext _context;

        public PaymentsController(MajorContext context)
        {
            _context = context;
        }
        static string conn = "Data Source=HIN-DH9HYY2-LT\\SQLSERVER;Initial Catalog=Major;Integrated Security=True;Encrypt=True;Trust Server Certificate=True"
    ;
        SqlConnection conne = new SqlConnection(conn);
        // GET: api/Payments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Payments>>> GetPayments()
        {
            return await _context.Payments.ToListAsync();
        }

        // GET: api/Payments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Payments>> GetPayments(string id)
        {
            var payments = await _context.Payments.FindAsync(id);

            if (payments == null)
            {
                return NotFound();
            }

            return payments;
        }

        // PUT: api/Payments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("updates/{V_No}")]
        public async Task<IActionResult> PutPayments(string V_No, [FromBody] UpdatePaymentRequest request)
        {
            string updateQuery = "UPDATE Payments SET balance = @balance ,unpaid=@unpaid,paid=@paid WHERE V_No = @V_No";
            using (SqlCommand command = new SqlCommand(updateQuery, conne))
            {
                // Add the para  meters to the SQL command
                conne.Open();
                command.Parameters.AddWithValue("@balance", request.Balance);
                command.Parameters.AddWithValue("@unpaid", request.Unpaid);
                command.Parameters.AddWithValue("@paid", request.Paid);
                command.Parameters.AddWithValue("@V_No", V_No);

                // Execute the update query
                int rowsAffected = command.ExecuteNonQuery();
                conne.Close();
                if (rowsAffected > 0)
                {
                    return Ok(rowsAffected);
                }
                else
                {
                    return NotFound();
                }

            }
        }
        public class UpdatePaymentRequest
        {
            public decimal Balance { get; set; }
            public decimal Paid { get; set; }
            public decimal Unpaid { get; set; }

        }
        // POST: api/Payments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Payments>> PostPayments(Payments payments)
        {
            _context.Payments.Add(payments);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PaymentsExists(payments.V_No))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetPayments", new { id = payments.V_No }, payments);
        }

        // DELETE: api/Payments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePayments(string id)
        {
            var payments = await _context.Payments.FindAsync(id);
            if (payments == null)
            {
                return NotFound();
            }

            _context.Payments.Remove(payments);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PaymentsExists(string id)
        {
            return _context.Payments.Any(e => e.V_No == id);
        }
    }
}
