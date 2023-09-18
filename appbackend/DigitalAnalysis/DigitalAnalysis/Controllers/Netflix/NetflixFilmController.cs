using DigitalAnalysis.Configures;
using DigitalAnalysis.Models.Netflix;
using DigitalAnalysis.Utils;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace DigitalAnalysis.Controllers.Netflix
{
    [Route("api/[controller]")]
    [ApiController]
    public class NetflixFilmController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public NetflixFilmController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("/get-netflix-films/{page}/{page_size}")]
        public async Task<IActionResult> GetNetflixFilms([FromRoute(Name = "page")] int page, [FromRoute(Name = "page_size")] int pageSize)
        {
            var totalCount = await _dbContext.NetflixTitles.CountAsync();

            var netflixTitles = await _dbContext.NetflixTitles
           .OrderBy(p => p.Id)
           .Skip((page - 1) * pageSize)
           .Take(pageSize)
           .ToListAsync();

            var pageResult = new PageResult<NetflixTitle>(netflixTitles, totalCount, pageSize, page);

            return Ok(pageResult);
        }
    }
}
