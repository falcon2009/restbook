using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

using Restbook.Interface;
using Restbook.Model;

namespace Restbook.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConfigController : ControllerBase
    {
        private readonly IConfiguration config;
        public ConfigController(IConfiguration config)
        {
            this.config = config;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IAppConfig), StatusCodes.Status200OK)]
        public IActionResult Get()
        {
            IConfigurationSection section = config.GetSection("AppConfig");
            IAppConfig appConfig = section.Get<AppConfig>();

            return Ok(appConfig);
        }
    }
}
