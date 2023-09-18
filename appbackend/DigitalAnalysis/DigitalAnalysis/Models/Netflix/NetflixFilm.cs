using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DigitalAnalysis.Models.Netflix
{
    [Table("netflix_films")]
    public class NetflixFilm
    {
        [Key]
        [Column("show_id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }

        [Column("title")]
        public string Title { get; set; }

        [Column("director")]
        public string Director { get; set; }

        [Column("casts")]
        public string Casts { get; set; }

        [Column("country")]
        public string Country { get; set; }
        [Column("date_added")]
        public DateTime DateAdded { get; set; }

        [Column("release_year")]
        public string ReleaseYear { get; set; }
        [Column("rating")]
        public string Rating { get; set; }

        [Column("duration")]
        public string Duration { get; set; }

        [Column("listed_in")]
        public string ListedIn { get; set; }

        [Column("description")]
        public string Description { get; set; }
    }
}
