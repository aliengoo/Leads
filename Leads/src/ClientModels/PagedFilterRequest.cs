namespace Leads.ClientModels
{
	using System.Collections.Generic;

	using Pagination;

	public class PagedFilterRequest
	{
		public IDictionary<string, object> Filter { get; set; }

		public Page Page { get; set; } 
	}
}