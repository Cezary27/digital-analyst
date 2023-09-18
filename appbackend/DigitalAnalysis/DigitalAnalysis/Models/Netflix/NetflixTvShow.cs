using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DigitalAnalysis.Models.Netflix
{
    [Table("netflix_tv_shows")]
    public class NetflixTvShow
    {

        [Key]
        [Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column("Titles")]
        public string? Title { get; set; }

        [Column("Year")]
        public DateTime? Year { get; set; }

        [Column("Rating")]
        public string? Rating { get; set; }

        [Column("IMDB_Rating")]
        public double? IMDBRating { get; set; }

        [Column("Netflix")]
        public bool? Netflix { get; set; }
    }
}
