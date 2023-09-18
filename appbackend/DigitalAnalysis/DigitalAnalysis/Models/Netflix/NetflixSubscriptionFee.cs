using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;

namespace DigitalAnalysis.Models.Netflix
{
    [Table("netflix_subscription_fee_dec_2021")]
    public class NetflixSubscriptionFee
    {

        [Key]
        [Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column("Country_Code")]
        public string? CountryCode { get; set; }

        [Column("Country")]
        public string? Country { get; set; }

        [Column("Total_Library_Size")]
        public int? TotalLibrarySize { get; set; }

        [Column("Number_of_TV_Shows")]
        public int? NumberOfTVShows { get; set; }

        [Column("Number_of_Movies")]
        public int? NumberOfMovies { get; set; }

        [Column("Cost_Per_Month_Basic")]
        public double? CostPerMonthBasic { get; set; }

        [Column("Cost_Per_Month_Standard")]
        public double? CostPerMonthDtandard { get; set; }

        [Column("Cost_Per_Month_Premium")]
        public double? CostPerMonthPremium { get; set; }


    }
}