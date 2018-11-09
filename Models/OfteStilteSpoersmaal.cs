using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kontakter.Models
{
    public class OfteStilteSpoersmaal
    {
        public int Id { get; set; }
        public string Spoersmaal { get; set; }
        public string Svar  { get; set; }
        public string Kategori { get; set; }
        public string Email { get; set; }
    }
}
