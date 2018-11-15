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

        public List<OfteStilteSpoersmaal> Betaling()
        {
            return _context.FAQ.Where(f => f.Kategori == "Betaling").ToList();
        }

        public List<OfteStilteSpoersmaal> HentRegistrering()
        {
            return _context.FAQ.Where(f => f.Kategori == "Registrering").ToList();
        }

        public List<Sporsmaaler> AlleSporsmaaler()
        {
            return _context.Spoersmaaler.ToList();
        }

        public List<OfteStilteSpoersmaal> hentspoarsmaaler()
        {
            return _context.FAQ.Where(f => f.Kategori == "Konto").ToList();
        }

      

        // Lagre henvendelse
        public bool postHenvendelse(Sporsmaaler Sporsmaaler)
        {
            try
            {
                _context.Spoersmaaler.Add(Sporsmaaler);
                _context.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;

            }

        }

        // Vis alle henvendelser
        public List<Sporsmaaler> hentAlleHenvendelser()
        {
            List<Sporsmaaler> henvendelser;
            try
            {
                henvendelser = _context.Spoersmaaler.ToList();
            }
            catch
            {
                henvendelser = null;

            }
            return henvendelser;
        }


    }
}
