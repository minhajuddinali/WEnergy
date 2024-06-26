using System.ComponentModel.DataAnnotations;

namespace MajorApi.Models
{
    public class Payments
    {
        [Key]
        public  string V_No { get; set; }
        public decimal balance { get; set; }
        public decimal unpaid { get; set; }
        public decimal paid { get; set; }
        public decimal total { get; set; } 

 
    }
}
