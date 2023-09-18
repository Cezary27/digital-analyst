using DigitalAnalysis.Configures;
using DigitalAnalysis.Models.Netflix;
using DigitalAnalysis.Utils;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace DigitalAnalysis.Controllers.Netflix
{
    [Route("api/[controller]")]
    [ApiController]
    public class NetflixRevenueQuarterController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public NetflixRevenueQuarterController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("/get-netflix-revenue-quarter/{page}/{page_size}")]
        public async Task<IActionResult> GetNetflixRevenueQuarter([FromRoute(Name = "page")] int page, [FromRoute(Name = "page_size")] int pageSize)
        {
            var totalCount = await _dbContext.NetflixRevenueQuarters.CountAsync();

            var netflixRevenueQuarter = await _dbContext.NetflixRevenueQuarters
           .OrderBy(p => p.Id)
           .Skip((page - 1) * pageSize)
           .Take(pageSize)
           .ToListAsync();

            var pageResult = new PageResult<NetflixRevenueQuarter>(netflixRevenueQuarter, totalCount, pageSize, page);

            return Ok(pageResult);
        }

        [HttpGet]
        [Route("/get-netflix-revenue-quarter/all")]
        public Task<IActionResult> GetAllNetflixRevenueQuarter()
        {

            List<NetflixRevenueQuarter> netflixRevenueQuarters = _dbContext.NetflixRevenueQuarters.ToList();

            return Task.FromResult<IActionResult>(Ok(netflixRevenueQuarters));
        }

    

    }
}
