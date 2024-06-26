using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MajorApi.Models;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;

namespace MajorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignupsController : ControllerBase
    {
        private readonly MajorContext _context;

        public SignupsController(MajorContext context)
        {
            _context = context;
        }

        // GET: api/Signups
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Signup>>> GetSignups()
        {
            return await _context.Signups.ToListAsync();
        }

        // GET: api/Signups/5
        [HttpGet("{id}/{pwd}")]
        public async Task<ActionResult<Signup>> GetSignup(string id,string pwd)
        {
            var signup =  _context.Signups.FirstOrDefault(a => a.Email == id && a.Pwd == pwd);

            if (signup == null)
            {
                return NotFound();
            }

            return signup;
        }
        [HttpGet("name/{id}")]
        public async Task<string> GetName(string id)
        {
            var signup = _context.Registrations.FirstOrDefault(a => a.VNo==id);

       

            return signup.Fname;
        }
        // PUT: api/Signups/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSignup(int id, Signup signup)
        {
            if (id != signup.Sid)
            {
                return BadRequest();
            }

            _context.Entry(signup).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SignupExists(id))
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

        // POST: api/Signups
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Signup>> PostSignup(Signup signup)
        {
            _context.Signups.Add(signup);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSignup", new { id = signup.Sid }, signup);
        }

        // DELETE: api/Signups/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSignup(int id)
        {
            var signup = await _context.Signups.FindAsync(id);
            if (signup == null)
            {
                return NotFound();
            }

            _context.Signups.Remove(signup);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SignupExists(int id)
        {
            return _context.Signups.Any(e => e.Sid == id);
        }
    }
}
