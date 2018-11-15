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

        public List<OfteStilteSpoersmaal> hentspoarsmaaler()
        {
            return _context.FAQ.Where(f => f.Kategori == "Konto").ToList();
        }

        public List<Sporsmaaler> AlleSporsmaaler()
        {
            List<Sporsmaaler> alle = null;
            try
            {
                alle = _context.Spoersmaaler.ToList();
                return alle;

            }
            catch
            {
                return alle;

            }

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

        public Boolean like(int id, OfteStilteSpoersmaal ofteStilteSpoersmaal) {
            try
            {

               var faq = _context.FAQ.Find(id);
                faq.Like++;
                _context.SaveChanges();
                return true;

            }
            catch
            {
                return false;

            }
        }

        public Boolean Dislike(int id, OfteStilteSpoersmaal oft)
        {
            try
            {

                var faq = _context.FAQ.Find(id);
                faq.DisLike++;
                _context.SaveChanges();
                return true;

            }
            catch
            {
                return false;

            }
        }
    }
}
