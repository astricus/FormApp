using System;

namespace Forms.Data
{
    /// <summary>
    /// The main <c>Forms</c> class.
    /// This class is used to store data from form's fields.
    /// </summary>
    public class FormData {

        /// <value>Property <c>Id</c> represents the id of the form.</value>
        public int Id { get; set; }

        /// <value>Property <c>Name</c> represents the Name field of the form.</value>
        public string Name { get; set; }

        /// <value>Property <c>Email</c> represents the Email field of the form.</value>
        public string Email { get; set; }

        /// <value>Property <c>City</c> represents the City field of the form.</value>
        public string City { get; set; }

        /// <value>Property <c>Date</c> represents the Date field of the form.</value>
        public DateTime Date { get; set; }

        /// <value>Property <c>Gender</c> represents the Gender field of the form.</value>
        public string Gender { get; set; }
    }
}