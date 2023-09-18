using DigitalAnalysis.Models.Netflix;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;

namespace DigitalAnalysis.Configures
{
    public class AppDbContext : DbContext
    {
        public DbSet<NetflixTitle> NetflixTitles { get; set; }
        public DbSet<NetflixTvShow> NetflixTvShows { get; set; }
        public DbSet<NetflixSubscriptionFee> NetflixSubscriptionFees { get; set; }

        public DbSet<NetflixSubscription> NetflixSubscriptions { get; set; }

        public DbSet<NetflixRevenueQuarter> NetflixRevenueQuarters { get; set; }

        public DbSet<NetflixRevenue> NetflixRevenues { get; set; }

        public DbSet<NetflixOrginalsShow> NetflixOrginalsShows { get; set; }

        public DbSet<NetflixFilm> NetflixFilms { get; set; }
        public DbSet<NetflixStockPrice> NetflixStockPrices { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)

            
        {

        }
    }
}
