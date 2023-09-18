using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace DigitalAnalysis.Migrations
{
    /// <inheritdoc />
    public partial class init_db_28_08_2023_22_52 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "netflix_films",
                columns: table => new
                {
                    show_id = table.Column<string>(type: "text", nullable: false),
                    title = table.Column<string>(type: "text", nullable: false),
                    director = table.Column<string>(type: "text", nullable: false),
                    casts = table.Column<string>(type: "text", nullable: false),
                    country = table.Column<string>(type: "text", nullable: false),
                    date_added = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    release_year = table.Column<string>(type: "text", nullable: false),
                    rating = table.Column<string>(type: "text", nullable: false),
                    duration = table.Column<string>(type: "text", nullable: false),
                    listed_in = table.Column<string>(type: "text", nullable: false),
                    description = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_netflix_films", x => x.show_id);
                });

            migrationBuilder.CreateTable(
                name: "netflix_originals_shows",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Title = table.Column<string>(type: "text", nullable: false),
                    Genre = table.Column<string>(type: "text", nullable: false),
                    Premiere = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Runtime = table.Column<int>(type: "integer", nullable: false),
                    IMDB_Score = table.Column<double>(type: "double precision", nullable: false),
                    Language = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_netflix_originals_shows", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "netflix_revenue",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Date = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    Global_Revenue = table.Column<long>(type: "bigint", nullable: true),
                    UACN_Revenue = table.Column<long>(type: "bigint", nullable: true),
                    EMEA_Revenue = table.Column<long>(type: "bigint", nullable: true),
                    LATM_Revenue = table.Column<long>(type: "bigint", nullable: true),
                    APAC_Revenue = table.Column<long>(type: "bigint", nullable: true),
                    UACN_Members = table.Column<long>(type: "bigint", nullable: true),
                    EMEA_Members = table.Column<long>(type: "bigint", nullable: true),
                    LATM_Members = table.Column<long>(type: "bigint", nullable: true),
                    APAC_Members = table.Column<long>(type: "bigint", nullable: true),
                    UACN_RPU = table.Column<double>(type: "double precision", nullable: true),
                    EMEA_RPU = table.Column<double>(type: "double precision", nullable: true),
                    LATM_RPU = table.Column<double>(type: "double precision", nullable: true),
                    APAC_RPU = table.Column<double>(type: "double precision", nullable: true),
                    Domestic_Members = table.Column<int>(type: "integer", nullable: true),
                    Domestic_Revenue = table.Column<int>(type: "integer", nullable: true),
                    International_Members = table.Column<int>(type: "integer", nullable: true),
                    International_Revenue = table.Column<int>(type: "integer", nullable: true),
                    Domestic_Free_Trialers = table.Column<int>(type: "integer", nullable: true),
                    Interntaional_Free_Trialers = table.Column<int>(type: "integer", nullable: true),
                    Netflix_Global_Users = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_netflix_revenue", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "netflix_revenue_2018_2020",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Area = table.Column<string>(type: "text", nullable: false),
                    Q1_2018 = table.Column<long>(type: "bigint", nullable: false),
                    Q2_2018 = table.Column<long>(type: "bigint", nullable: false),
                    Q3_2018 = table.Column<long>(type: "bigint", nullable: false),
                    Q4_2018 = table.Column<long>(type: "bigint", nullable: false),
                    Q1_2019 = table.Column<long>(type: "bigint", nullable: false),
                    Q2_2019 = table.Column<long>(type: "bigint", nullable: false),
                    Q3_2019 = table.Column<long>(type: "bigint", nullable: false),
                    Q4_2019 = table.Column<long>(type: "bigint", nullable: false),
                    Q1_2020 = table.Column<long>(type: "bigint", nullable: false),
                    Q2_2020 = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_netflix_revenue_2018_2020", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "netflix_stock_prices",
                columns: table => new
                {
                    show_id = table.Column<string>(type: "text", nullable: false),
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
                    table.PrimaryKey("PK_netflix_stock_prices", x => x.show_id);
                });

            migrationBuilder.CreateTable(
                name: "netflix_subscription_2020",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Area = table.Column<string>(type: "text", nullable: true),
                    Years = table.Column<string>(type: "text", nullable: true),
                    Subscribers = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_netflix_subscription_2020", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "netflix_subscription_fee_dec_2021",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Country_Code = table.Column<string>(type: "text", nullable: true),
                    Country = table.Column<string>(type: "text", nullable: true),
                    Total_Library_Size = table.Column<int>(type: "integer", nullable: true),
                    Number_of_TV_Shows = table.Column<int>(type: "integer", nullable: true),
                    Number_of_Movies = table.Column<int>(type: "integer", nullable: true),
                    Cost_Per_Month_Basic = table.Column<double>(type: "double precision", nullable: true),
                    Cost_Per_Month_Standard = table.Column<double>(type: "double precision", nullable: true),
                    Cost_Per_Month_Premium = table.Column<double>(type: "double precision", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_netflix_subscription_fee_dec_2021", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "netflix_titles",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    type = table.Column<string>(type: "text", nullable: true),
                    title = table.Column<string>(type: "text", nullable: true),
                    director = table.Column<string>(type: "text", nullable: true),
                    casts = table.Column<string>(type: "text", nullable: true),
                    country = table.Column<string>(type: "text", nullable: true),
                    date_added = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    release_year = table.Column<string>(type: "text", nullable: true),
                    rating = table.Column<string>(type: "text", nullable: true),
                    duration = table.Column<string>(type: "text", nullable: true),
                    listed_in = table.Column<string>(type: "text", nullable: true),
                    description = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_netflix_titles", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "netflix_tv_shows",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Titles = table.Column<string>(type: "text", nullable: true),
                    Year = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    Rating = table.Column<string>(type: "text", nullable: true),
                    IMDB_Rating = table.Column<double>(type: "double precision", nullable: true),
                    Netflix = table.Column<bool>(type: "boolean", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_netflix_tv_shows", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "netflix_films");

            migrationBuilder.DropTable(
                name: "netflix_originals_shows");

            migrationBuilder.DropTable(
                name: "netflix_revenue");

            migrationBuilder.DropTable(
                name: "netflix_revenue_2018_2020");

            migrationBuilder.DropTable(
                name: "netflix_stock_prices");

            migrationBuilder.DropTable(
                name: "netflix_subscription_2020");

            migrationBuilder.DropTable(
                name: "netflix_subscription_fee_dec_2021");

            migrationBuilder.DropTable(
                name: "netflix_titles");

            migrationBuilder.DropTable(
                name: "netflix_tv_shows");
        }
    }
}
