namespace Leads.Controllers
{
	using System.Threading.Tasks;
	using System.Web.Http;

	using Leads.Database.Document.Sub;
	using Leads.Database.Models;

	public class SubDocumentController<TParentDoc, TDoc> : ApiController
		where TParentDoc : class, IDocument
		where TDoc : class, ISubDocument
	{
		private readonly ISubDocumentCrud<TParentDoc, TDoc> _crud;

		public SubDocumentController(ISubDocumentCrud<TParentDoc, TDoc> crud)
		{
			_crud = crud;
		}

		[HttpPost]
		[Route("{parentId}")]
		public async Task<TDoc> CreateAsync(string parentId, TDoc doc)
		{
			return await _crud.CreateAsync(parentId, doc);
		}

		[HttpGet]
		[Route("{parentId}/{id}")]
		public async Task<TDoc> RetrieveAsync(string parentId, string id)
		{
			return await _crud.RetrieveAsync(parentId, id);
		}

		[HttpPut]
		[Route("{parentId}/{id}")]
		public async Task<TDoc> UpdateAsync(string parentId, TDoc doc)
		{
			return await _crud.UpdateAsync(parentId, doc);
		}

		[HttpDelete]
		[Route("{parentId}/{id}")]
		public async Task DeleteAsync(string parentId, string id)
		{
			await _crud.DeleteAsync(parentId, id);
		}
	}
}