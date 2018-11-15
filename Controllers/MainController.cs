﻿using System;
using System.Collections.Generic;
using System.Linq;
using kontakter.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
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

        // POST api/henvendelse
        [HttpPost("[action]")]
        public HttpResponseMessage LeggTil([FromBody]Sporsmaaler Sporsmaaler)
        {

            if (ModelState.IsValid)
            {
                var db = new DBHandler(_context);
                bool OK = db.postHenvendelse(Sporsmaaler);
                if (OK)
                {
                    return new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.OK
                    };

                }
            }
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.BadRequest,
                Content = new StringContent("Kunne ikke sette inn henvendelse i DB")
            };
        }

        [HttpPut("[action]")]
        public HttpResponseMessage VedLike(int id, [FromBody]OfteStilteSpoersmaal faq)
        {
            var db = new DBHandler(_context);
            if (db.like(faq.Id, faq))
            {
                return new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };
            }
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.BadRequest,
                Content = new StringContent("Kunne ikke sette endre antall liker i FAQ")
            };
        }







        [HttpPut("[action]")]
        public HttpResponseMessage VedDisLike(int id, [FromBody]OfteStilteSpoersmaal faq)
        {
            var db = new DBHandler(_context);
            if (db.Dislike(faq.Id, faq))
            {
                return new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };
            }
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.BadRequest,
                Content = new StringContent("Kunne ikke sette endre antall misliker i FAQ")
            };
        }

    }

  
}