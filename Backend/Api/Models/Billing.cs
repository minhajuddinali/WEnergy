using System.ComponentModel.DataAnnotations;
using System.Security.Policy;

namespace MajorApi.Models
{
    public class Billing
    {
        [Key]
        public string VNo { get; set; } = null!;
        public string Fuel_type { get; set; }
        public string Quantity { get; set; }
        
        public string Location { get; set; }
        public string Amount { get; set; }
        public DateOnly Date { get; set; }
        public string status { get; set; }    
        public string email { get; set; }

    }
}
