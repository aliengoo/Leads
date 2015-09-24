namespace Leads.Controllers
{
	using System.Threading.Tasks;
	using System.Web.Http;

	using ClientModels;

	using Database.Models;

	using Leads.Database.Document;

	using Pagination;

	[RoutePrefix("api/leads")]
	public class LeadsController : ApiController
	{
		private readonly ILeads _leads;

		public LeadsController(ILeads leads)
		{
			_leads = leads;
		}

		[HttpGet]
		[Route("{id}")]
		public async Task<Lead> RetrieveAsync(string id)
		{
			return await _leads.RetrieveAsync(id);
		}

		[HttpPost]
		public async Task<Page> RetrieveAsync(PagedFilterRequest pagedFilterRequest)
		{
			return await _leads.RetrieveAsync(pagedFilterRequest.Filter, pagedFilterRequest.Page);
		}

		[HttpPost]
		public async Task<Lead> CreateAsync(Lead lead)
		{
			return await _leads.CreateAsync(lead);
		}

		[HttpPut]
		[Route("{id}")]
		public async Task<Lead> UpdateAsync(Lead lead)
		{
			return await _leads.UpdateAsync(lead);
		}

		[HttpDelete]
		[Route("{id}")]
		public async Task DeleteAsync(string id)
		{
			await _leads.DeleteAsync(id);
		}
	}
}