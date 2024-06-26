using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MajorApi.Models;

namespace MajorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillingsController : ControllerBase
    {
        private readonly MajorContext _context;

        public BillingsController(MajorContext context)
        {
            _context = context;
        }

        // GET: api/Billings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Billing>>> GetBilling()
        {
            return await _context.Billing.ToListAsync();
        }

        // GET: api/Billings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Billing>>> GetBilling(string id)
        {
            var billing = await _context.Billing.Where(i => i.email == id).ToListAsync();

            if (billing == null)
            {
                return NotFound();
            }

            return billing;
        }
        [HttpGet("onlyUser/{id}")]
        public async Task<ActionResult<Billing>> getName(string id)
        {
            var billing = await _context.Billing.FirstOrDefaultAsync(i => i.VNo == id);

            if (billing == null)
            {
                return NotFound();
            }

            return billing;
        }

        // PUT: api/Billings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBilling(string id, Billing billing)
        {
            if (id != billing.VNo)
            {
                return BadRequest();
            }

            _context.Entry(billing).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BillingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Billings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Billing>> PostBilling(Billing billing)
        {
            try
            {
                // Check if a billing record with the same VNo already exists
                var existingBilling = await _context.Billing.FirstOrDefaultAsync(b => b.VNo == billing.VNo);
                if (existingBilling != null)
                {
                    // If the record exists, call the PutBilling method to update it
                    return NoContent();
                }
                else
                {
                    // If the record doesn't exist, add the new billing record
                    _context.Billing.Add(billing);
                    await _context.SaveChangesAsync();
                    return CreatedAtAction("GetBilling", new { id = billing.VNo }, billing);
                }
            }
            catch (DbUpdateException)
            {
                // If there's an error, throw the exception
                throw;
            }

            // return CreatedAtAction("GetBilling", new { id = billing.VNo }, billing);
        }

        // DELETE: api/Billings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBilling(string id)
        {
            var billing = await _context.Billing.FindAsync(id);
            if (billing == null)
            {
                return NotFound();
            }

            _context.Billing.Remove(billing);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BillingExists(string id)
        {
            return _context.Billing.Any(e => e.VNo == id);
        }
    }
}
