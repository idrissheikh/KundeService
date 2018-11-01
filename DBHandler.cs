using kontakter.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kontakter
{
    public class DBHandler
    {

        private readonly SpoersmaalContext _context;
        public DBHandler(SpoersmaalContext context)
        {
            _context = context;
        }

        public List<OfteStilteSpoersmaal> hentAlle()
        {
            return _context.FAQ.ToList();
        }

        public List<OfteStilteSpoersmaal> hentBetaling()
        {
            return _context.FAQ.Where(f => f.Kategori == "Betaling").ToList();
        }

    }
}
