using Microsoft.AspNetCore.Mvc;
using Forms.Data;

namespace Forms.Controllers
{
    /// <summary>
    /// <c>FormsController</c> is a main controller class.
    /// Inherits from <c>Controller</c> class.
    /// </summary>
    [Route("api/[controller]")]
    public class FormsController : Controller
    {
        /// <value>Property <c>_service</c> is an instance of <c>IFormService</c>
        /// </value>
        private IFormService _service;
        /// <summary>
        /// <c>FormsController</c> constructor.
        /// Initializes new <c>_service</c> to control form's data.
        /// </summary>
        public FormsController(IFormService service)
        {
            this._service = service;
        }

        /// <summary>
        /// <c>GetForms</c> method.
        /// Used to get all form's data from storage and return it to user.
        /// </summary>
        [HttpGet("[action]")]
        public IActionResult GetForms()
        {
            var allForms = _service.GetAllForms();
            return Ok(allForms);
        }

        /// <summary>
        /// <c>AddForm</c> method.
        /// Used to add new form's data to storage submitted by user.
        /// </summary>
        [HttpPost("AddForm")]
        public IActionResult AddForm([FromBody]FormData form)
        {
            if (form != null)
            {
               _service.AddForm(form);
            }
            return Ok();
        }
    }
}