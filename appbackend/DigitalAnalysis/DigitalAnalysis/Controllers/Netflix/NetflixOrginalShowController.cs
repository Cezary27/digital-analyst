using DigitalAnalysis.Configures;
using DigitalAnalysis.Models.Netflix;
using DigitalAnalysis.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DigitalAnalysis.Controllers.Netflix
{
    [Route("api/[controller]")]
    [ApiController]
    public class NetflixOrginalShowController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public NetflixOrginalShowController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet]
        [Route("/get-netflix-orginal-show/{page}/{page_size}")]
        public async Task<IActionResult> GetNetflixOrginalShow([FromRoute(Name = "page")] int page, [FromRoute(Name = "page_size")] int pageSize)
        {
            var totalCount = await _dbContext.NetflixOrginalsShows.CountAsync();

            var orginalShow = await _dbContext.NetflixOrginalsShows
           .OrderBy(p => p.Id)
           .Skip((page - 1) * pageSize)
           .Take(pageSize)
           .ToListAsync();

            var pageResult = new PageResult<NetflixOrginalsShow>(orginalShow, totalCount, pageSize, page);

            return Ok(pageResult);
        }
    }
}
