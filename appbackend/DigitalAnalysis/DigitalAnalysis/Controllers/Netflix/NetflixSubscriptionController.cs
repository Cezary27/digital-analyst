using DigitalAnalysis.Configures;
using DigitalAnalysis.Models.Netflix;
using DigitalAnalysis.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DigitalAnalysis.Controllers.Netflix
{
    [Route("api/[controller]")]
    [ApiController]
    public class NetflixSubscriptionController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public NetflixSubscriptionController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("/get-netflix-subscription/{page}/{page_size}")]
        public async Task<IActionResult> GetNetflixSubscription([FromRoute(Name = "page")] int page, [FromRoute(Name = "page_size")] int pageSize)
        {
            var totalCount = await _dbContext.NetflixSubscriptions.CountAsync();

            var netflixSubscription = await _dbContext.NetflixSubscriptions
           .OrderBy(p => p.Id)
           .Skip((page - 1) * pageSize)
           .Take(pageSize)
           .ToListAsync();

            var pageResult = new PageResult<NetflixSubscription>(netflixSubscription, totalCount, pageSize, page);

            return Ok(pageResult);
        }
    }
}
