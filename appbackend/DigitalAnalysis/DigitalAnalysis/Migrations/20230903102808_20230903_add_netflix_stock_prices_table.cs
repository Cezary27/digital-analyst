using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DigitalAnalysis.Migrations
{
    /// <inheritdoc />
    public partial class _20230903_add_netflix_stock_prices_table : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
             name: "netflix_stock_prices",
             columns: table => new
             {
                 id = table.Column<string>(type: "integer", nullable: false),
                 Date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                 Open = table.Column<double>(type: "double precision", nullable: false),
                 High = table.Column<double>(type: "double precision", nullable: false),
                 Low = table.Column<double>(type: "double precision", nullable: false),
                 Close = table.Column<double>(type: "double precision", nullable: false),
                 Adj_Close = table.Column<double>(type: "double precision", nullable: false),
                 Volume = table.Column<int>(type: "integer", nullable: false)
             },
             constraints: table =>
             {
                 table.PrimaryKey("PK_netflix_stock_prices", x => x.id);
             });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
              name: "netflix_stock_prices");
        }
    }
}
