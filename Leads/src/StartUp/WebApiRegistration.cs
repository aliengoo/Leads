using System.Web.Http;
using Owin;

namespace Leads.StartUp
{
	using Leads.Configuration.Application;

	public class WebApiRegistration
    {
		public static void Register(IAppBuilder app, HttpConfiguration config)
		{
			config.MapHttpAttributeRoutes(new CustomDirectRouteProvider());

			config.Routes.MapHttpRoute(
				name: "DefaultApi",
				routeTemplate: "api/{controller}/{id}",
				defaults: new { id = RouteParameter.Optional });

			app.UseWebApi(config);
		}
    }
}