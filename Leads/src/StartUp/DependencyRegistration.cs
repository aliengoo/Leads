using System.Web.Http;
using Microsoft.Practices.Unity;
using Unity.WebApi;

namespace Leads.StartUp
{
	using Leads.Configuration.Application;
	using Leads.Database;
	using Leads.Database.Document;
	using Leads.Database.Document.Sub;
	using Leads.Database.Models;

	public class DependencyRegistration
    {
        public static void Register(HttpConfiguration config)
        {
            var c = new UnityContainer();
            config.Properties["container"] = c;

            config.DependencyResolver = new UnityDependencyResolver(c);

            // TODO: Dependencies here

			// configuration
	        c.RegisterType<IApplicationConfiguration, ApplicationConfiguration>(new InjectionConstructor("leads"));

			// database
	        c.RegisterType<ILeadsDatabase, LeadsDatabase>();

			// Collections and sub-document dependencies
	        c.RegisterType<ILeads, Leads>();
	        c.RegisterType<IDocumentCrud<Lead>, Leads>();
	        c.RegisterType<ISubDocumentCrud<Lead, Note>, Notes>();
	        c.RegisterType<ISubDocumentCrud<Lead, Customer>, Customers>();
        }
    }
}