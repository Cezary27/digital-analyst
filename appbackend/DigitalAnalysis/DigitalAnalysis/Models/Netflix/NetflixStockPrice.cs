using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DigitalAnalysis.Models.Netflix
{
    [Table("netflix_stock_prices")]
    public class NetflixStockPrice
    {

        [Key]
        [Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column("Date")]
        public DateTime Date { get; set; }

        [Column("Open")]
        public double Open { get; set; }
        [Column("High")]
        public double High { get; set; }
        [Column("Low")]
        public double Low { get; set; }

        [Column("Close")]
        public double Close { get; set; }

        [Column("Adj_Close")]
        public double AdjClose { get; set; }

        [Column("Volume")]
        public int Volume { get; set; }
    }
}
