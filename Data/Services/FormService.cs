using System.Collections.Generic;
using System.Linq;

namespace Forms.Data
{

    /// <summary>
    /// <c>FormService</c> is an inheritor of <c>IFormService</c>.
    /// Implements methods defined in <c>IFormService</c>.
    /// </summary>
    public class FormService : IFormService
    {
        public void AddForm(FormData form)
        {
            int id = Data.Forms.Count + 1;
            form.Id = id;
            Data.Forms.Add(form);
        }

        public List<FormData> GetAllForms() => Data.Forms.ToList();
    }
}