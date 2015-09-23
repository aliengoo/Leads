using System.Collections.Generic;

namespace Leads.Configuration
{
    public interface IApplicationConfiguration
    {
        IEnumerable<string> CorsOrigins { get; }

        string ConnectionString { get; }
    }
}