using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kontakter.Models
{
    public class SpoersmaalContext : DbContext

    {

        public SpoersmaalContext(DbContextOptions<SpoersmaalContext> options) : base(options)
        {

        }

        public DbSet<OfteStilteSpoersmaal> FAQ { get; set; }
        public DbSet<Sporsmaaler> Spoersmaaler { get; set; }


    }
}
