namespace Leads.Controllers
{
	using System.Web.Http;

	[RoutePrefix("api/hello")]
	public class HelloController : ApiController
	{
		[HttpGet]
		[Route("")]
		public string Get()
		{
			return "Hello, World!";
		}
	}
}