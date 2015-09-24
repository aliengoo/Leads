using System.Web.Http;
using Leads.Configuration;
using Owin;

namespace Leads.StartUp
{
	using Leads.Configuration.Application;

	public class WebApiRegistration
    {
        public static void Register(IAppBuilder app, HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes(new CustomDirectRouteProvider());

            app.UseWebApi(config);
        }
    }
}