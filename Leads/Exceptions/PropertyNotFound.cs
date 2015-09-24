namespace Leads.Exceptions
{
	using System;

	public class DocumentPropertyNotFoundException : Exception
	{
		public string PropertyName { get; set; }

		public Type DocumentType { get; set; }

		public DocumentPropertyNotFoundException(string propertyName, Type documentType, string message)
			: this(propertyName, documentType, message, null)
		{
		}

		public DocumentPropertyNotFoundException(string propertyName, Type documentType, string message, Exception innerException)
			: base(message, innerException)
		{
			PropertyName = propertyName;
			DocumentType = documentType;
		}
	}
}