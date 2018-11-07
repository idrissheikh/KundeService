using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kontakter.Models;
using Microsoft.Extensions.DependencyInjection;

namespace kontakter
{
    public class DBInit
    {

        public static void Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetRequiredService<SpoersmaalContext>();
            context.Database.EnsureCreated();
            // EnsureDeleted 
            if (!context.FAQ.Any())
            {

                // Om konto 
                context.Add(new OfteStilteSpoersmaal
                {

                    Kategori = "Konto",
                    Spoersmaal = "Hvordan oppretter jeg en konto?",
                    Svar = " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid." +
                    " 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. " +
                    "Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et." +
                    " Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident." +
                    " Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt" +
                    " you probably haven't heard of them accusamus labore sustainable VHS."
                });

                context.Add(new OfteStilteSpoersmaal
                {
                    Kategori = "Betaling",
                    Spoersmaal = "Er medlemskapet gratis?",
                    Svar = " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid." +
                   " 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. " +
                   "Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et." +
                   " Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident." +
                   " Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt" +
                   " you probably haven't heard of them accusamus labore sustainable VHS."
                });


                context.Add(new OfteStilteSpoersmaal
                {
                    Kategori = "Betaling",
                    Spoersmaal = "Er medlemskapet gratis?",
                    Svar = " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid." +
                   " 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. " +
                   "Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et." +
                   " Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident." +
                   " Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt" +
                   " you probably haven't heard of them accusamus labore sustainable VHS."
                });

                context.Add(new OfteStilteSpoersmaal
                {
                    Kategori = "Registrering",
                    Spoersmaal = "Hvordan kan jeg betale?",
                    Svar = " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid." +
               " 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. " +
               "Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et." +
               " Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident." +
               " Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt" +
               " you probably haven't heard of them accusamus labore sustainable VHS."
                });

                context.Add(new OfteStilteSpoersmaal
                {
                    Kategori = "Registrering",
                    Spoersmaal = "Kan jeg betale med vipps?",
                    Svar = " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid." +
             " 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. " +
             "Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et." +
             " Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident." +
             " Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt" +
             " you probably haven't heard of them accusamus labore sustainable VHS."
                });
                context.SaveChanges();

            }

        }
    }
}