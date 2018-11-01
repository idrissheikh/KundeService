using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kontakter.Models;
using Microsoft.AspNetCore.Mvc;

namespace kontakter.Controllers
{
    public class MainController : Controller
    {
        private readonly SpoersmaalContext _context;

        public MainController(SpoersmaalContext context)
        {
            _context = context;
        }


        [Route("api/alle")]
        public JsonResult Index()
        {
            var db = new DBHandler(_context);
            var liste = db.hentAlle();

            return new JsonResult(liste);
        }

        [Route("api/betaling")]
        public JsonResult hentBetaling()
        {
            var db = new DBHandler(_context);
            var liste = db.hentBetaling();

            return new JsonResult(liste);
        }
    }
}