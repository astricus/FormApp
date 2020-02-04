using System.Collections.Generic;

namespace Forms.Data
{

    /// <summary>
    /// Interface <c>IFormService</c> defines services which will be used in the application
    /// </summary>
    public interface IFormService
    {
        /// <summary>
        /// Method <c>GetAllForms</c> is used to get all forms from storage
        /// </summary>
        /// <returns>
        /// List in which each item is an object of <с>Form</c> class.
        /// </returns>
        List<FormData> GetAllForms();

        /// <summary>
        /// Method <c>AddForm</c> is used to add a form to storage
        /// </summary>
        void AddForm(FormData form);
    }
}