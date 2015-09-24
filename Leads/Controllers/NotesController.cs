namespace Leads.Controllers
{
	using System.Web.Http;

	using Leads.Database.Document.Sub;
	using Leads.Database.Models;

	[RoutePrefix("api/notes")]
	public class NotesController : SubDocumentController<Lead, Note>
	{
		public NotesController(ISubDocumentCrud<Lead, Note> crud)
			: base(crud)
		{
		}
	}
}