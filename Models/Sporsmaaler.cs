using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kontakter.Models
{
    public class Sporsmaaler
    {
        public int Id { get; set; }
        public string KundeNavn { get; set; }
        public string Kategori { get; set; }
        public string Spoersmaal { get; set; }
        public string Svar { get; set; }
        
    }
}
