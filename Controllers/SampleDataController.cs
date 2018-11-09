using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kontakter.Models;
using Microsoft.AspNetCore.Mvc;

namespace kontakter.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {


        private readonly SpoersmaalContext _context;

        public SampleDataController(SpoersmaalContext context)
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

        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
