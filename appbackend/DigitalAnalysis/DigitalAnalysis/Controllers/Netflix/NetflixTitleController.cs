using DigitalAnalysis.Configures;
using DigitalAnalysis.Models.Netflix;
using DigitalAnalysis.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DigitalAnalysis.Controllers.netflix
{
    [Route("api/[controller]")]
    [ApiController]
    public class NetflixTitleController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public NetflixTitleController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        public IActionResult CreateNetflixTitle([FromBody] NetflixTitle netflixTitle)
        {
            if (ModelState.IsValid)
            {
                _dbContext.NetflixTitles.Add(netflixTitle);
                _dbContext.SaveChanges();
                return Ok(netflixTitle);
            }

            return BadRequest("Invalid netflix title data.");
        }

        [HttpGet]
        [Route("/get-netflix-titles/{page}/{page_size}/{sortBy}/{sortDirection}")]
        public async Task<IActionResult> GetNetflixTitles([FromRoute(Name = "page")] int page, [FromRoute(Name = "page_size")] int pageSize, [FromRoute(Name = "sortBy")] string sortBy, [FromRoute(Name = "sortDirection")] string sortDirection)
        {
            var totalCount = await _dbContext.NetflixTitles.CountAsync();

            IQueryable<NetflixTitle> query = _dbContext.NetflixTitles;

            if(sortBy != "none")
            {
                var test = sortBy.ToLower();
                switch (sortBy.ToLower())
                {
                    case "id":
                        query = sortDirection.ToLower() == "asc"
                            ? query.OrderBy(p => p.Id)
                            : query.OrderByDescending(p => p.Id);
                        break;
                    case "type":
                        query = sortDirection.ToLower() == "asc"
                            ? query.OrderBy(p => p.Type)
                            : query.OrderByDescending(p => p.Type);
                        break;
                    case "title":
                        query = sortDirection.ToLower() == "asc"
                            ? query.OrderBy(p => p.Type)
                            : query.OrderByDescending(p => p.Type);
                        break;
                    case "director":
                        query = sortDirection.ToLower() == "asc"
                            ? query.OrderBy(p => p.Director)
                            : query.OrderByDescending(p => p.Director);
                        break;
                    case "casts":
                        query = sortDirection.ToLower() == "asc"
                            ? query.OrderBy(p => p.Casts)
                            : query.OrderByDescending(p => p.Casts);
                        break;
                    case "country":
                        query = sortDirection.ToLower() == "asc"
                            ? query.OrderBy(p => p.Country)
                            : query.OrderByDescending(p => p.Country);
                        break;
                    case "datedded":
                        query = sortDirection.ToLower() == "asc"
                            ? query.OrderBy(p => p.DateAdded)
                            : query.OrderByDescending(p => p.DateAdded);
                        break;
                    case "releaseyear":
                        query = sortDirection.ToLower() == "asc"
                            ? query.OrderBy(p => p.ReleaseYear)
                            : query.OrderByDescending(p => p.ReleaseYear);
                        break;
                    case "rating":
                        query = sortDirection.ToLower() == "asc"
                            ? query.OrderBy(p => p.Rating)
                            : query.OrderByDescending(p => p.Rating);
                        break;

                    case "duration":
                        query = sortDirection.ToLower() == "asc"
                            ? query.OrderBy(p => p.Duration)
                            : query.OrderByDescending(p => p.Duration);
                        break;
                    case "listedin":
                        query = sortDirection.ToLower() == "asc"
                            ? query.OrderBy(p => p.ListedIn)
                            : query.OrderByDescending(p => p.ListedIn);
                        break;
                    case "description":
                        query = sortDirection.ToLower() == "asc"
                            ? query.OrderBy(p => p.Description)
                            : query.OrderByDescending(p => p.Description);
                        break;
                    default:

                        return BadRequest("Invalid sortBy parameter.");

                }
                var netflixTitles = await query
               .Skip((page - 1) * pageSize)
               .Take(pageSize)
               .ToListAsync();

                var pageResult = new PageResult<NetflixTitle>(netflixTitles, totalCount, pageSize, page);

                return Ok(pageResult);
            }
            else
            {
                var netflixTitles = await _dbContext.NetflixTitles
      
                 .Skip((page - 1) * pageSize)
                 .Take(pageSize)
                 .ToListAsync();

                var pageResult = new PageResult<NetflixTitle>(netflixTitles, totalCount, pageSize, page);

                return Ok(pageResult);
            }
          

        
        }
    }
}
