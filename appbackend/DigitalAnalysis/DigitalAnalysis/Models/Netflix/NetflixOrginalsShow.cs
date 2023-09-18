using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DigitalAnalysis.Models.Netflix
{
    [Table("netflix_originals_shows")]
    public class NetflixOrginalsShow
    {
        [Key]
        [Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column("Title")]
        public string Title { get; set; }

        [Column("Genre")]
        public string Genre { get; set; }

        [Column("Premiere")]
        public DateTime Premiere { get; set; }

        [Column("Runtime")]
        public int Runtime { get; set; }

        [Column("IMDB_Score")]
        public double ImdbScore { get; set; }

        [Column("Language")]
        public string Language { get; set; }

    }
}
