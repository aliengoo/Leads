using Leads.Database.Models;

namespace Leads.Database.Collections
{
    public class Leads : BaseCollection<Lead>, ILeads
    {
        public Leads(ILeadsDatabase leadsDatabase) : base("leads", leadsDatabase)
        {
        }
    }
}