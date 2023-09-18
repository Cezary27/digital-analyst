using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DigitalAnalysis.Models.Netflix
{
    [Table("netflix_subscription_2020")]
    public class NetflixSubscription
    {
        [Key]
        [Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column("Area")]
        public string? Area { get; set; }

        [Column("Years")]
        public string? Years { get; set; }

        [Column("Subscribers")]
        public int? Subscribers { get; set; }
    }
}
