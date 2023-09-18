using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DigitalAnalysis.Models.Netflix
{
    [Table("netflix_revenue")]
    public class NetflixRevenue
    {
        [Key]
        [Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column("Date")]
        public DateTime? Date { get; set; }

        [Column("Global_Revenue")]
        public long? GlobalRevenue { get; set; }

        [Column("UACN_Revenue")]
        public long? UacnRevenue { get; set; }

        [Column("EMEA_Revenue")]
        public long? EmeaRevenue { get; set; }

        [Column("LATM_Revenue")]
        public long? LatmRevenue { get; set; }

        [Column("APAC_Revenue")]
        public long? ApacRevenue { get; set; }

        [Column("UACN_Members")]
        public long? UacnMembers { get; set; }

        [Column("EMEA_Members")]
        public long? EmeaMembers { get; set; }

        [Column("LATM_Members")]
        public long? LatmMembers { get; set; }

        [Column("APAC_Members")]
        public long? ApacMembers { get; set; }

        [Column("UACN_RPU")]
        public double? UacnRpu { get; set; }

        [Column("EMEA_RPU")]
        public double? EmeaRpu { get; set; }

        [Column("LATM_RPU")]
        public double? LatmRpu { get; set; }

        [Column("APAC_RPU")]
        public double? ApacRpu { get; set; }

        [Column("Domestic_Members")]
        public int? DomesticMembers { get; set; }

        [Column("Domestic_Revenue")]
        public int? DomesticRevenue { get; set; }

        [Column("International_Members")]
        public int? InternationalMembers { get; set; }
        [Column("International_Revenue")]
        public int? InternationalRevenue { get; set; }

        [Column("Domestic_Free_Trialers")]
        public int? DomesticFreeTrialers { get; set; }

        [Column("Interntaional_Free_Trialers")]
        public int? InterntaionalFreeTrialers { get; set; }

        [Column("Netflix_Global_Users")]
        public int? NetflixGlobalUsers { get; set; }
    }
}
