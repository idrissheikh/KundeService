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

                    Kategori = "Betaling",
                    Spoersmaal = "Hvordan oppretter jeg en konto?",
                    Svar = "An overwhelming 80 per cent of workers have no idea how many years they must pay National Insurance to get a full state pension in old age." +
                    " A third are also unaware that missing NI payments during career breaks could affect their state pension - although more than half of workers take at least one year off work during their lives. " +
                    "Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et." +
                    " Workers need to make 35 years of NI contributions to get the full state pension, which is currently £155.65 a week for anyone retiring from April this year onwards." +
                    " Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt" +
                    " you probably haven't heard of them accusamus labore sustainable VHS.",
                    //Like = 4,
                    //DisLike = 2,
                });

                context.Add(new OfteStilteSpoersmaal
                {
                    Kategori = "Betaling",
                    Spoersmaal = "tar dere kash?",
                    Svar = "Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et." +
                    " A third are also unaware that missing NI payments during career breaks could affect their state pension - although more than half of workers take at least one year off work during their lives. " +
                   "Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et." +
                    "An overwhelming 80 per cent of workers have no idea how many years they must pay National Insurance to get a full state pension in old age." + " Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt" +
                   " you probably haven't heard of them accusamus labore sustainable VHS.",
                    //Like = 14,
                    //DisLike = 2,
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
                   " you probably haven't heard of them accusamus labore sustainable VHS.",
                    //Like = 4,
                    //DisLike = 12,
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
               " you probably haven't heard of them accusamus labore sustainable VHS.",
                
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
             " you probably haven't heard of them accusamus labore sustainable VHS.",
                  
                });

                context.Add(new OfteStilteSpoersmaal
                {
                    Kategori = "Registrering",
                    Spoersmaal = "Kan jeg betale med vipps?",
                    Svar = "MPs and pension industry experts have called for all over-50s to be sent annual automatic state pension statements to combat lack ." +
             " The Government has resisted on the grounds of cost, the inefficiency of sending out millions of letters, and because it already uses other measures to raise awareness. " +
             "Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et." +
             " Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident." +
             " Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt" +
             " you probably haven't heard of them accusamus labore sustainable VHS.",

                });
                context.SaveChanges();

            }

        }
    }
}