using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kontakter.Models;
using Microsoft.AspNetCore.Mvc;

namespace kontakter.Controllers
{
    [Route("api/[controller]")]
    public class MainController : Controller
    {
        private readonly SpoersmaalContext _context;

        public MainController(SpoersmaalContext context)
        {
            _context = context;
        }



        //[Route("api/alle")]
        [HttpGet("[action]")]
        public JsonResult Index()
        {
            var db = new DBHandler(_context);
            var liste = db.hentAlle();

            return new JsonResult(liste);
        }

        //[Route("api/betaling")]
        [HttpGet("[action]")]

        public JsonResult Betaling()
        {
            var db = new DBHandler(_context);
            var liste = db.Betaling();

            return new JsonResult(liste);
        }

        //[Route("api/registrering")] når du sender Id  da må være sånn         [HttpGet("[action]/{}"Id)]

        [HttpGet("[action]")]
        public JsonResult HentRegistrering()
        {
            var db = new DBHandler(_context);
            var liste = db.HentRegistrering();

            return new JsonResult(liste);
        }


        [HttpGet("[action]")]
        public JsonResult AlleSporsmaaler()
        {
            var db = new DBHandler(_context);
            var liste = db.AlleSporsmaaler();

            return new JsonResult(liste);
        }

        //      var PersonController = angular.module("personControll",[]);
        //personContr 
    }

  
}