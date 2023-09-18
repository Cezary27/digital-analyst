using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;

namespace DigitalAnalysis.Models.Netflix
{
    [Table("netflix_revenue_2018_2020")]
    public class NetflixRevenueQuarter
    {
        [Key]
        [Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column("Area")]
        public string Area { get; set; }

        [Column("Q1_2018")]
        public long Q1_2018 { get; set; }

        [Column("Q2_2018")]
        public long Q2_2018 { get; set; }

        [Column("Q3_2018")]
        public long Q3_2018 { get; set; }

        [Column("Q4_2018")]
        public long Q4_2018 { get; set; }

        [Column("Q1_2019")]
        public long Q1_2019 { get; set; }

        [Column("Q2_2019")]
        public long Q2_2019 { get; set; }

        [Column("Q3_2019")]
        public long Q3_2019 { get; set; }

        [Column("Q4_2019")]
        public long Q4_2019 { get; set; }
        [Column("Q1_2020")]
        public long Q1_2020 { get; set; }
        [Column("Q2_2020")]
        public long Q2_2020 { get; set; }
    }
}
