namespace Leads.Configuration.Attributes
{
	using System;
	using System.Linq;

	[AttributeUsage(AttributeTargets.Class)]
	public class CollectionNameAttribute : Attribute
	{
		public string CollectionName { get; set; }

		public CollectionNameAttribute(string collectionName)
		{
			CollectionName = collectionName;
		}

		public static string GetCollectionName(Type docType)
		{
			var collectionNameAttribute = docType.GetCustomAttributes(typeof(CollectionNameAttribute), true).Cast<CollectionNameAttribute>().FirstOrDefault();

			return collectionNameAttribute?.CollectionName;
		}
	}
}