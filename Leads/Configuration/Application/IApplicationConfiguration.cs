namespace Leads.Configuration.Application
{
	using System.Collections.Generic;

	public interface IApplicationConfiguration
    {
        IEnumerable<string> CorsOrigins { get; }

        string ConnectionString { get; }
    }
}