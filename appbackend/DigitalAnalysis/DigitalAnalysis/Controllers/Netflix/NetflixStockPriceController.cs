using DigitalAnalysis.Configures;
using DigitalAnalysis.Models.Netflix;
using DigitalAnalysis.Utils;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using DigitalAnalysis.Models.Netflix.DTO;
using System.Drawing.Printing;

namespace DigitalAnalysis.Controllers.Netflix
{
    [Route("api/[controller]")]
    [ApiController]
    public class NetflixStockPriceController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public NetflixStockPriceController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("/get-netflix-stock-price/{page}/{page_size}")]
        public async Task<IActionResult> GetNetflixStockPrice([FromRoute(Name = "page")] int page, [FromRoute(Name = "page_size")] int pageSize)
        {
            var totalCount = await _dbContext.NetflixStockPrices.CountAsync();

            var netflixStockPrices = await _dbContext.NetflixStockPrices
           .OrderBy(p => p.Id)
           .Skip((page - 1) * pageSize)
           .Take(pageSize)
           .ToListAsync();

            var pageResult = new PageResult<NetflixStockPrice>(netflixStockPrices, totalCount, pageSize, page);

            return Ok(pageResult);
        }


        [HttpGet("/get-netflix-stock-prices/for-year/{year}")]
        public async Task<IActionResult> GetNetflixStockPricesForYear([FromRoute(Name = "year")] int year)
        {
            List<NetflixStockPrice> netflixStockPrices = await _dbContext.NetflixStockPrices
                .Where(stockPrice => stockPrice.Date.Year == year)
                .ToListAsync();

            return Ok(netflixStockPrices);
        }
    }
}

