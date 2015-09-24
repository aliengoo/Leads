namespace Leads.Controllers
{
	using System.Web.Http;

	using Leads.Database.Document.Sub;
	using Leads.Database.Models;

	[RoutePrefix("api/interests")]
	public class InterestsController : SubDocumentController<Lead, Interest>
	{
		public InterestsController(ISubDocumentCrud<Lead, Interest> crud)
			: base(crud)
		{
		}
	}
}