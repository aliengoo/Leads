namespace Leads.Controllers
{
	using System.Web.Http;

	using Leads.Database.Document.Sub;
	using Leads.Database.Models;

	[RoutePrefix("api/customers")]
	public class CustomersController : SubDocumentController<Lead, Customer>
	{
		public CustomersController(ISubDocumentCrud<Lead, Customer> crud)
			: base(crud)
		{
		}
	}
}