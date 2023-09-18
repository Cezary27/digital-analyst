using DigitalAnalysis.Configures;
using DigitalAnalysis.Models.Netflix;
using DigitalAnalysis.Utils;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace DigitalAnalysis.Controllers.Netflix
{
    [Route("api/[controller]")]
    [ApiController]
    public class NetflixSubscriptionFeeController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public NetflixSubscriptionFeeController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        [HttpGet]
        [Route("/get-netflix-subscription-fee/all")]
        public Task<IActionResult> GetAllNetflixSubscriptionFee()
        {
       
           List<NetflixSubscriptionFee> netflixSubscriptionFees =  _dbContext.NetflixSubscriptionFees.ToList();
          
            return Task.FromResult<IActionResult>(Ok(netflixSubscriptionFees));
        }

        [HttpGet]
        [Route("/get-netflix-subscription-fee/{page}/{page_size}")]
        public async Task<IActionResult> GetNetflixSubscriptionFee([FromRoute(Name = "page")] int page, [FromRoute(Name = "page_size")] int pageSize)
        {
            var totalCount = await _dbContext.NetflixSubscriptionFees.CountAsync();

            var netflixSubscriptionFees = await _dbContext.NetflixSubscriptionFees
           .OrderBy(p => p.Id)
           .Skip((page - 1) * pageSize)
           .Take(pageSize)
           .ToListAsync();

            var pageResult = new PageResult<NetflixSubscriptionFee>(netflixSubscriptionFees, totalCount, pageSize, page);

            return Ok(pageResult);
        }


        [HttpGet]
        [Route("/get-netflix-subscription-fee/by-name/{country}")]
        public IActionResult GetByNameNetflixSubscriptionFee([FromRoute(Name = "country")] string country)
        {

   
            NetflixSubscriptionFee netflixSubscriptionFee = _dbContext.NetflixSubscriptionFees
                .FirstOrDefault(fee => fee.Country == country);


            if (netflixSubscriptionFee == null)
            {
                return NotFound(); 
            }

            return Ok(netflixSubscriptionFee);
        }
    }
}
