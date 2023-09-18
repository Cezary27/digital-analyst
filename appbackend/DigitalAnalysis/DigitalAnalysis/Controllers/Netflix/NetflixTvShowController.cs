using DigitalAnalysis.Configures;
using DigitalAnalysis.Models.Netflix;
using DigitalAnalysis.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace DigitalAnalysis.Controllers.netflix
{
    [Route("api/[controller]")]
    [ApiController]
    public class NetflixTvShowController : ControllerBase
    {

        private readonly AppDbContext _dbContext;

        public NetflixTvShowController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        [HttpGet]
        [Route("/get-netflix-tv-shows/{page}/{page_size}")]
        public async Task<IActionResult> GetNetflixTvShows([FromRoute(Name = "page")] int page, [FromRoute(Name = "page_size")] int pageSize)
        {
            var totalCount = await _dbContext.NetflixTvShows.CountAsync();

            var netflixTvShows = await _dbContext.NetflixTvShows
           .OrderBy(p => p.Id)
           .Skip((page - 1) * pageSize)
           .Take(pageSize)
           .ToListAsync();

            var pageResult = new PageResult<NetflixTvShow>(netflixTvShows, totalCount, pageSize, page);

            return Ok(pageResult);
        }
    }
}
